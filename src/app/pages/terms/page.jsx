export default function TermsPage() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          
          <h2 className=" text-5xl md:text-6xl mb-6 leading-tight">
            Terms & Conditions
          </h2>
          
          <p className="text-secondary mb-4">
            Last updated: December 30, 2025
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-secondary leading-relaxed">
          
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing this website, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Use of Website
            </h2>
            <p className="mb-4">
              This website is intended for:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Viewing portfolio work and projects</li>
              <li>Reading blog content</li>
              <li>Contacting for business inquiries</li>
              <li>Learning about services offered</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, code, and design, is owned by 
              Alaradi unless otherwise stated. You may not copy, reproduce, or distribute any 
              content without written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Services
            </h2>
            <p className="mb-4">
              Services offered through this website are subject to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Availability and scheduling</li>
              <li>Separate service agreements</li>
              <li>Pricing discussed on a per-project basis</li>
              <li>Payment terms agreed upon before work begins</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              User Conduct
            </h2>
            <p className="mb-4">
              When using this website, you agree not to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use the contact form for spam or malicious purposes</li>
              <li>Attempt to hack or compromise the website</li>
              <li>Submit false or misleading information</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Third-Party Links
            </h2>
            <p>
              This website may contain links to external websites. We are not responsible for 
              the content or privacy practices of these third-party sites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Disclaimer
            </h2>
            <p>
              This website and its content are provided &quot;as is&quot; without warranties of any kind. 
              We make no guarantees about the accuracy, reliability, or availability of the website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Limitation of Liability
            </h2>
            <p>
              We are not liable for any damages arising from the use of this website, including 
              but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. 
              Changes will be effective immediately upon posting to this page.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Contact Information
            </h2>
            <p>
              For questions about these Terms and Conditions, contact us at:{' '}
              <a href="mailto:support@alaradi.com" className="text-accent hover:text-[#fb923c]">
                support@alaradi.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of Sweden. 
              Any disputes will be resolved in the courts of Stockholm, Sweden.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}