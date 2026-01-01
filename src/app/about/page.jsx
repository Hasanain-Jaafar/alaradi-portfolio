import Links from "../components/Links";
import Custbutton from "../components/Button";

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
    <div className="container mx-auto flex flex-col gap-4">
      {/* Hero Section */}
      <section className="pt-20 pb-6 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Orange accent bar */}
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

          <h1 className="mb-12">About Me</h1>

          <p className="mb-8 max-w-3xl">
            I&apos;m Alaradi, a web developer and designer focused on building
            fast, conversion-driven websites for modern businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 ">What I DO?</h2>

          <div className="space-y-6 text-secondary text-lg leading-relaxed max-w-3xl">
            <p className="mb-10 max-w-[65ch] leading-8">
              I work at the intersection of UI/UX design and front-end
              development, creating clean, accessible, and performance-optimized
              websites using modern tools like Next.js, React, and Tailwind.
            </p>

            <p className="mb-10 max-w-[65ch] leading-8">
              I don&apos;t chase trends or overdesign. I focus on clarity,
              usability, and structure — because good design should guide users
              and support real business goals.
            </p>

            <p className="mb-10 max-w-[65ch] leading-8">
              Whether it&apos;s a landing page, a full website, or a UI
              redesign, my goal is to deliver work that looks professional,
              feels intuitive, and helps businesses convert and grow.
            </p>
            <p className="max-w-[65ch] leading-8">
              I prefer strong fundamentals, clean systems, and measurable
              outcomes over flashy visuals that don’t perform.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            <h2>Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-bg-secondary p-6 border relative border-border-subtle text-center font-semi-bold text-text-secondary  hover:border-border-accent transition-all duration-400 ease-in-out cursor-pointer hover:bg-bg-primary"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className=" cta border border-text-secondary p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>

            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it.
            </p>

            <div className="flex justify-center  ">
              <Links path="/contact" styleType="link">
                <Custbutton btn="Get In Touch" styleType="bgCta"></Custbutton>
              </Links>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
