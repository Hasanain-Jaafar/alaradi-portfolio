import { NextResponse } from "next/server";
import { removeSubscriber } from "@/lib/subscribers";

// Rate limiting for unsubscribe endpoint
const unsubscribeAttempts = new Map();

export async function POST(request) {
  try {
    const { token, email } = await request.json();

    // Must provide either token or email
    if (!token && !email) {
      return NextResponse.json(
        { success: false, error: "Please provide either a token or email address" },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address" },
          { status: 400 }
        );
      }
    }

    // Validate token format if provided (should be 64 character hex string)
    if (token && (typeof token !== 'string' || !/^[a-f0-9]{64}$/.test(token))) {
      return NextResponse.json(
        { success: false, error: "Invalid unsubscribe token" },
        { status: 400 }
      );
    }

    // Rate limiting: max 5 attempts per identifier per hour to prevent abuse
    const now = Date.now();
    const oneHourAgo = now - 3600000;
    const identifier = token || email;

    if (unsubscribeAttempts.has(identifier)) {
      const attempts = unsubscribeAttempts.get(identifier);
      const recentAttempts = attempts.filter(time => time > oneHourAgo);

      if (recentAttempts.length >= 5) {
        return NextResponse.json(
          { success: false, error: "Too many unsubscribe attempts. Please try again later." },
          { status: 429 }
        );
      }

      recentAttempts.push(now);
      unsubscribeAttempts.set(identifier, recentAttempts);
    } else {
      unsubscribeAttempts.set(identifier, [now]);
    }

    // Remove subscriber from Netlify Blobs
    const removed = await removeSubscriber(
      token || email,
      token ? 'token' : 'email'
    );

    if (!removed) {
      return NextResponse.json(
        { success: false, error: "Email address not found in our subscriber list" },
        { status: 404 }
      );
    }

    const unsubscribedEmail = removed.email;

    return NextResponse.json({
      success: true,
      message: "Successfully unsubscribed",
      email: unsubscribedEmail
    });

  } catch (error) {
    console.error("Error processing unsubscribe:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process unsubscribe request" },
      { status: 500 }
    );
  }
}
