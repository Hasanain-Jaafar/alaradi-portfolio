export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Privacy Policy
          </h1>
          
          <p className="text-secondary mb-4">
            Last updated: December 30, 2025
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-secondary leading-relaxed">
          
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you use the contact form on this website, we collect:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The subject and message you provide</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information you provide to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Communicate with you about potential projects</li>
              <li>Provide the services you request</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or share your personal information with third parties. 
              Your information is only used to respond to your contact form submission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Data Storage
            </h2>
            <p>
              Contact form submissions are processed through Resend and delivered to our email. 
              We do not store your information in any database.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Cookies
            </h2>
            <p>
              This website does not use cookies or tracking technologies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Request information about data we have collected</li>
              <li>Request deletion of your data</li>
              <li>Opt out of future communications</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <a href="mailto:support@alaradi.com" className="text-accent hover:text-[#fb923c]">
                support@alaradi.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date 
              at the top of this page will reflect any changes.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}