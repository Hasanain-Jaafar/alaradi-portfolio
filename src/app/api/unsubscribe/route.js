import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const subscribersFile = path.join(process.cwd(), "subscribers.json");

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

    // Read existing subscribers
    let subscribers = [];
    try {
      if (!fs.existsSync(subscribersFile)) {
        return NextResponse.json(
          { success: false, error: "No subscribers found" },
          { status: 404 }
        );
      }

      const data = fs.readFileSync(subscribersFile, "utf8");
      subscribers = JSON.parse(data);
    } catch (error) {
      console.error("Error reading subscribers file:", error);
      return NextResponse.json(
        { success: false, error: "Failed to process unsubscribe request" },
        { status: 500 }
      );
    }

    // Find subscriber by token or email
    let subscriberIndex = -1;

    if (token) {
      // Find by token (more secure, from email link)
      subscriberIndex = subscribers.findIndex(sub =>
        typeof sub === 'object' && sub.token === token
      );
    } else if (email) {
      // Find by email (manual unsubscribe)
      subscriberIndex = subscribers.findIndex(sub =>
        typeof sub === 'string' ? sub === email : sub.email === email
      );
    }

    if (subscriberIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Email address not found in our subscriber list" },
        { status: 404 }
      );
    }

    // Get email before removing (for response)
    const subscriber = subscribers[subscriberIndex];
    const unsubscribedEmail = typeof subscriber === 'string' ? subscriber : subscriber.email;

    // Remove subscriber
    subscribers.splice(subscriberIndex, 1);

    // Save updated subscribers list
    try {
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
    } catch (error) {
      console.error("Error saving subscribers file:", error);
      return NextResponse.json(
        { success: false, error: "Failed to process unsubscribe request" },
        { status: 500 }
      );
    }

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
