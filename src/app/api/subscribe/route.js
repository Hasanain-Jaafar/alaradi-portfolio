import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

// File to store subscribers (simple solution)
const subscribersFile = path.join(process.cwd(), "subscribers.json");

// Rate limiting
const submissions = new Map();

export async function POST(request) {
  try {
    const { email } = await request.json();
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Rate limiting: max 1 subscription per 10 minutes per email
    const now = Date.now();
    const tenMinutesAgo = now - 600000;

    if (submissions.has(email)) {
      const lastSubmission = submissions.get(email);
      if (lastSubmission > tenMinutesAgo) {
        return NextResponse.json(
          { success: false, error: "You already subscribed recently" },
          { status: 429 }
        );
      }
    }

    submissions.set(email, now);

    // Read existing subscribers
    let subscribers = [];
    try {
      if (fs.existsSync(subscribersFile)) {
        const data = fs.readFileSync(subscribersFile, "utf8");
        subscribers = JSON.parse(data);
      }
    } catch (error) {
      console.error("Error reading subscribers file:", error);
    }

    // Check if already subscribed
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { success: false, error: "This email is already subscribed" },
        { status: 400 }
      );
    }

    // Add new subscriber
    subscribers.push(email);

    // Save to file
    try {
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
    } catch (error) {
      console.error("Error saving subscriber:", error);
    }

    // Send welcome email
    await resend.emails.send({
      from: "Alaradi Newsletter <newsletter@@hasseonline.cloud>",
      to: "hassanainadm@gmail.com",
      subject: " 🎉 New Newsletter Subscriber!",
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #171717; border: 1px solid #262626;">
              
              <!-- Header with orange accent -->
              <tr>
                <td style="padding: 40px 40px 20px 40px;">
                  <div style="width: 80px; height: 4px; background-color: #f97316; margin-bottom: 30px;"></div>
                  <h1 style="color: #e5e5e5; font-size: 32px; margin: 0; font-weight: bold;">
                    Welcome to Alaradi!
                  </h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 20px 40px;">
                  <p style="color: #a3a3a3; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                    Thank you for subscribing to our newsletter. You're now part of the community!
                  </p>
                  
                  <p style="color: #e5e5e5; font-size: 18px; font-weight: bold; margin: 30px 0 15px 0;">
                    You'll receive updates about:
                  </p>
                  
                  <table cellpadding="0" cellspacing="0" style="margin: 0;">
                    <tr>
                      <td style="padding: 8px 0;">
                        <span style="color: #f97316; font-size: 20px; margin-right: 10px;">•</span>
                        <span style="color: #a3a3a3; font-size: 16px;">New blog posts and articles</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <span style="color: #f97316; font-size: 20px; margin-right: 10px;">•</span>
                        <span style="color: #a3a3a3; font-size: 16px;">Web development tips and tricks</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <span style="color: #f97316; font-size: 20px; margin-right: 10px;">•</span>
                        <span style="color: #a3a3a3; font-size: 16px;">Project updates and launches</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <span style="color: #f97316; font-size: 20px; margin-right: 10px;">•</span>
                        <span style="color: #a3a3a3; font-size: 16px;">Industry insights and trends</span>
                      </td>
                    </tr>
                  </table>
                  
                  <p style="color: #a3a3a3; font-size: 16px; line-height: 1.6; margin: 30px 0 20px 0;">
                    Stay tuned for exciting content!
                  </p>
                  
                  <!-- CTA Button -->
                  <table cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                    <tr>
                      <td>
                        <a href="https://alaradihassan.netlify.app/blogs" 
                           style="display: inline-block; background-color: #f97316; color: #ffffff; 
                                  padding: 14px 32px; text-decoration: none; font-weight: bold; 
                                  font-size: 16px;">
                          Read Latest Posts
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; border-top: 1px solid #262626;">
                  <p style="color: #737373; font-size: 14px; line-height: 1.6; margin: 0;">
                    You're receiving this because you subscribed at 
                    <a href="https://alaradihassan.netlify.app" style="color: #f97316; text-decoration: none;">
                      alaradi.com
                    </a>
                  </p>
                  <p style="color: #737373; font-size: 12px; margin: 15px 0 0 0;">
                    If you didn't subscribe, you can safely ignore this email.
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
    });
    //

    //
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
