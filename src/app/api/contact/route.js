import { Resend } from "resend";
import { NextResponse } from "next/server";
import { escapeHtml } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting (resets when server restarts)
// NOTE: Current limitations for production environments:
// - Rate limit counters reset on server restart/redeploy
// - Not shared across multiple server instances (horizontal scaling)
// - For production with multiple servers or serverless, migrate to:
//   * Redis for distributed rate limiting
//   * Database with indexed timestamps for persistent tracking
//   * Third-party service like Upstash Rate Limit or Cloudflare
const submissions = new Map();

 // |> Clean up old entries every hour 
setInterval(() => {
  const oneHourAgo = Date.now() - 3600000;
  for (const [email, times] of submissions.entries()) {
    const recentTimes = times.filter((t) => t > oneHourAgo);
    if (recentTimes.length === 0) {
      submissions.delete(email);
    } else {
      submissions.set(email, recentTimes);
    }
  }
}, 3600000);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Rate limiting: max 3 submissions per hour per email
    const now = Date.now();
    const oneHourAgo = now - 3600000;

    if (submissions.has(email)) {
      const times = submissions.get(email).filter((t) => t > oneHourAgo);

      if (times.length >= 3) {
        return NextResponse.json(
          {
            success: false,
            error: "Too many requests. Please try again later.",
          },
          { status: 429 }
        );
      }

      times.push(now);
      submissions.set(email, times);
    } else {
      submissions.set(email, [now]);
    }

    // Send email using Resend
    // Security: Escape HTML to prevent XSS attacks in email
    const data = await resend.emails.send({
      from: "Contact <noreply@hasseonline.cloud>",
      to: process.env.CONTACT_EMAIL || "hassanainadm@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${escapeHtml(subject)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
