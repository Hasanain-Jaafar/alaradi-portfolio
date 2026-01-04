import { Code, CheckCircle, ArrowRight } from "lucide-react";
import Custbutton from "@/app/components/Button";
import Links from "@/app/components/Links";
import Link from "next/link";

export const metadata = {
  title: "Web Development Services",
  description:
    "Professional web development services using modern frameworks and best practices.",
};

export default function WebDevelopmentPage() {
  const features = [
    "Custom website development from scratch",
    "Responsive design for all devices",
    "Modern frameworks (Next.js, React)",
    "Fast loading times and optimization",
    "SEO-friendly architecture",
    "Secure and scalable solutions",
    "API integration and backend development",
    "Ongoing maintenance and support",
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "API Development",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Creating wireframes, design mockups, and technical architecture plans.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building your application with clean code, best practices, and regular updates.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Thorough testing, bug fixes, deployment, and post-launch support.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <Code size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>

          <h2 className="text-5xl md:text-6xl mb-6">Web Development</h2>

          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Building fast, scalable, and modern web applications that drive
            results. From concept to launch, I create digital experiences that
            your users will love.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What&apos;s Included</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle
                  size={24}
                  className="text-text-accent shrink-0 mt-1"
                />
                <p className="text-lg text-text-secondary">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Development Process</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="border border-border-subtle p-8 hover:border-border-accent transition-all"
              >
                <div className="text-5xl font-bold text-text-accent mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl px-22 mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technologies I Use</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-bg-primary border border-border-subtle hover:border-border-accent transition-all"
              >
                <span className="text-lg font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Related Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/mobile-first"
              className="cta border border-border-subtle p-6 hover:border-border-accent transition-all"
            >
              <h3 className="text-xl font-bold mb-3">
                Mobile-First Development
              </h3>
              <p className="text-text-secondary mb-4">
                Responsive designs that work perfectly on all devices
              </p>
              <span className="text-text-accent flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/services/backend-development"
              className="cta border border-border-subtle p-6 hover:border-border-accent transition-all"
            >
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-text-secondary mb-4">
                Robust server-side solutions and APIs
              </p>
              <span className="text-text-accent flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/services/seo-marketing"
              className="cta border border-border-subtle p-6 hover:border-border-accent transition-all"
            >
              <h3 className="text-xl font-bold mb-3">SEO & Marketing</h3>
              <p className="text-text-secondary mb-4">
                Get found online and grow your business
              </p>
              <span className="text-text-accent flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s discuss your web development needs and create something
            amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Links path="/contact" styleType="link">
              <Custbutton btn="Get Started" styleType="bgCta" />
            </Links>
            <Links path="/myWork" styleType="link">
              <Custbutton btn="View Portfolio" styleType="chostBtn" />
            </Links>
          </div>
        </div>
      </section>
    </div>
  );
}
