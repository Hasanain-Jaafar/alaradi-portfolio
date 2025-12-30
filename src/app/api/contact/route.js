import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting (resets when server restarts)
// For production with multiple servers, use Redis or database
const submissions = new Map();

// Clean up old entries every hour
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
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hassanainadm@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
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
