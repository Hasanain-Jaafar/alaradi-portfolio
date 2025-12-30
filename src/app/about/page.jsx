import Links from "../components/Links";
import Custbutton from "../components/Button";
import { Send } from "lucide-react";

export default function AboutPage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
    "Figma",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Orange accent bar */}
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About Me
          </h1>

          <p className="mb-8">
            I&apos;m a creative developer passionate about building modern web
            experiences that combine beautiful design with powerful
            functionality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-6 ">My Journey</h3>

          <div className="space-y-6 text-secondary text-lg leading-relaxed">
            <p>
              I started my journey in web development 5 years ago, driven by a
              passion for creating digital experiences that make a real impact.
              What began as curiosity about how websites work evolved into a
              full-fledged career.
            </p>

            <p>
              Over the years, I&apos;ve worked with startups and established
              companies, helping them build modern web applications that are
              fast, accessible, and conversion-focused. I specialize in Next.js,
              React, and modern CSS frameworks.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <h2>Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-bg-secondary p-6 border border-border-subtle text-center font-semi-bold text-text-secondary  hover:border-border-accent transition-all duration-400 ease-in-out cursor-pointer hover:bg-bg-primary"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-secondary border border-subtle p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>

            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it.
            </p>

            <div className="flex justify-center  ">
              <Links path="/contact" styleType="link">
                <Custbutton btn="Get In Touch" styleType="bgCta">
                  <Send size={20} />
                </Custbutton>
              </Links>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
