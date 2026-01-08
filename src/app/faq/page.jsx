'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Links from '@/app/components/Links';
import Custbutton from '@/app/components/Button';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = {
    general: [
      {
        question: "How do I get started with a project?",
        answer: "Simply reach out via the contact form or email. We'll schedule a free consultation to discuss your needs, goals, and timeline. From there, I'll provide a proposal and we can begin once you're ready."
      },
      {
        question: "What's your typical project timeline?",
        answer: "Timelines vary based on project scope. A simple landing page takes 1-2 weeks, while a full website with custom features can take 4-8 weeks. I'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you work with clients internationally?",
        answer: "Yes! I work with clients worldwide. I'm based in Stockholm, Sweden (CET timezone) but can accommodate different time zones for meetings and communication."
      },
      {
        question: "What information do you need to start?",
        answer: "I'll need your project goals, target audience, any existing branding materials, content (text and images), and examples of websites you like. Don't worry if you don't have everything - we can work through it together."
      },
    ],
    services: [
      {
        question: "What services do you offer?",
        answer: "I specialize in web development, UI/UX design, performance optimization, mobile-first development, backend development, and SEO & marketing. I can handle everything from design to deployment."
      },
      {
        question: "Do you offer website maintenance?",
        answer: "Yes! I offer ongoing maintenance packages including updates, bug fixes, content changes, security monitoring, and performance optimization. We can discuss a plan that fits your needs."
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. I can modernize your existing site, improve its performance, or rebuild it from scratch. I'll analyze your current site and recommend the best approach."
      },
      {
        question: "Do you provide hosting services?",
        answer: "I don't provide hosting directly, but I can recommend reliable hosting solutions and handle the entire deployment process. I typically use Netlify, Vercel, or AWS depending on project needs."
      },
    ],
    pricing: [
      {
        question: "How much do you charge?",
        answer: "Pricing depends on project scope, complexity, and timeline. Simple landing pages start around $1,500, while full custom websites range from $3,000-$10,000+. Contact me for a detailed quote based on your specific needs."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, for larger projects I offer flexible payment plans. Typically: 50% upfront to begin work, 25% at midpoint review, and 25% upon completion and launch."
      },
      {
        question: "What's included in your pricing?",
        answer: "All quotes include design, development, responsive optimization, basic SEO setup, deployment, and post-launch support. Additional services like content writing, custom illustrations, or ongoing maintenance are quoted separately."
      },
      {
        question: "Do you offer discounts for startups or nonprofits?",
        answer: "I occasionally offer reduced rates for early-stage startups and registered nonprofits doing meaningful work. Reach out and tell me about your mission!"
      },
    ],
    technical: [
      {
        question: "What technologies do you use?",
        answer: "I primarily work with Next.js, React, TypeScript, Tailwind CSS, Node.js, and modern web technologies. I choose the tech stack based on your project's specific requirements and long-term goals."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. Every website I build is fully responsive and optimized for mobile, tablet, and desktop. Mobile-first design is standard in all my projects."
      },
      {
        question: "Can you integrate with my existing tools?",
        answer: "Yes! I can integrate with most platforms including payment processors (Stripe, PayPal), CRMs, email marketing tools, analytics, and third-party APIs."
      },
      {
        question: "Will I be able to update content myself?",
        answer: "Yes. I can set up a content management system (CMS) or provide a simple way for you to update content without coding knowledge. I'll also provide documentation and training."
      },
    ],
    process: [
      {
        question: "How do we communicate during the project?",
        answer: "I'm flexible! We can communicate via email, Slack, video calls, or your preferred method. I provide regular updates and am available for questions throughout the project."
      },
      {
        question: "What if I need changes after the site is live?",
        answer: "Minor tweaks within the first 30 days are included. Larger changes or new features can be added with an additional quote. I'm here to support you long-term."
      },
      {
        question: "Do you provide training on how to use my website?",
        answer: "Yes! I provide documentation and can do a live training session to walk you through managing your site, updating content, and using any custom features."
      },
      {
        question: "What happens if I'm not satisfied?",
        answer: "Your satisfaction is my priority. I include revision rounds in every project and maintain open communication. We'll work together until you're happy with the result."
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-accent mb-8"></div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed">
            Got questions? I&apos;ve got answers. Find everything you need to know about working with me.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* General Questions */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">General Questions</h2>
            <div className="space-y-4">
              {faqs.general.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === `general-${index}`}
                  onToggle={() => toggleQuestion(`general-${index}`)}
                />
              ))}
            </div>
          </div>

          {/* Services & Maintenance */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">Services & Maintenance</h2>
            <div className="space-y-4">
              {faqs.services.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === `services-${index}`}
                  onToggle={() => toggleQuestion(`services-${index}`)}
                />
              ))}
            </div>
          </div>

          {/* Pricing & Payments */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">Pricing & Payments</h2>
            <div className="space-y-4">
              {faqs.pricing.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === `pricing-${index}`}
                  onToggle={() => toggleQuestion(`pricing-${index}`)}
                />
              ))}
            </div>
          </div>

          {/* Technical Questions */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">Technical Questions</h2>
            <div className="space-y-4">
              {faqs.technical.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === `technical-${index}`}
                  onToggle={() => toggleQuestion(`technical-${index}`)}
                />
              ))}
            </div>
          </div>

          {/* Process & Communication */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">Process & Communication</h2>
            <div className="space-y-4">
              {faqs.process.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === `process-${index}`}
                  onToggle={() => toggleQuestion(`process-${index}`)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-border-subtle p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-text-secondary text-lg mb-8">
              I&apos;m here to help. Reach out and let&apos;s discuss your project.
            </p>
            <Links path="/contact" styleType="link">
              <Custbutton btn="Get In Touch" styleType="bgCta" />
            </Links>
          </div>
        </div>
      </section>

    </div>
  );
}

// FAQ Item Component
// FAQ Item Component
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-border-subtle bg-bg-secondary overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-primary transition-all"
      >
        <h3 className="text-lg md:text-xl font-semibold text-text-primary pr-4">
          {question}
        </h3>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Plus size={24} className="text-text-accent" />
        </div>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out border-t border-border-subtle ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4">
          <p className="text-text-secondary leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}