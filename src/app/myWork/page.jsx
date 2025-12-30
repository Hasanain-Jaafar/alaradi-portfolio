import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WorkPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      tags: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
      image: "/ecommerce.jpg", // Add your image path
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description:
        "Modern analytics dashboard for SaaS products with real-time data visualization, custom reporting, and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "/dashboard.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Personal portfolio website showcasing projects and blog posts. Built with Next.js and featuring MDX for blog content management.",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      image: "/portfolio.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description:
        "Complete UI/UX design for a fitness tracking mobile app. Includes user research, wireframes, and high-fidelity prototypes.",
      tags: ["Figma", "UI Design", "Prototyping"],
      image: "/mobile-app.jpg",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      description:
        "Modern restaurant website with online ordering system, reservation management, and interactive menu with dietary filters.",
      tags: ["Next.js", "React", "API Integration"],
      image: "/restaurant.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-1 bg-accent mb-8"></div>

          <h1 className="font-heading text-5xl md:text-6xl mb-6 leading-tight">
            My Work
          </h1>

          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            A collection of projects showcasing web development, UI/UX design,
            and creative problem-solving. Each project represents a unique
            challenge and solution.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              Featured Projects
            </h2>
            <p className="text-secondary">
              Highlighting my most impactful work
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <article
                key={index}
                className="bg-bg-secondary rounded-lg border border-subtle overflow-hidden hover:border-text-accent-light transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="bg-tertiary aspect-video md:aspect-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-accent font-bold text-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h6 className="text-text-accent-light font-semibold mb-3">
                      {project.category}
                    </h6>

                    <h3 className="font-logo mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <p
                          key={idx}
                          className="px-3 py-1 text-bg-primary bg-text-secondary w-32 text-center text-sm"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-text-accent-light hover:text-text-accent font-semibold transition-colors"
                        >
                          View Live <ExternalLink size={18} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-text-accent-light hover:text-accent font-semibold transition-colors"
                        >
                          GitHub <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Project Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <h2 className="text-3xl md:text-4xl mb-2">
              More Project
            </h2>
            <p>
              Additional work across different technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((projects, index) => (
              <article
                key={index}
                className="bg-bg-secondary rounded-lg border border-subtle overflow-hidden hover:border-text-accent-light transition-all group"
              >
                {/* Project Image */}
                <div className="bg-tertiary aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-accent font-bold text-lg">
                    <Image
                      src={projects.image}
                      alt={projects.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h6 className="text-text-accent-light text-sm font-semibold mb-2 inline-block">
                    {projects.category}
                  </h6>

                  <h3 className="text-2xl  mb-3 group-hover:text-accent transition-colors">
                    {projects.title}
                  </h3>

                  <p className="text-secondary leading-relaxed mb-4">
                    {projects.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects.tags.map((tag, idx) => (
                      <p
                        key={idx}
                        className="px-2 py-1 bg-text-secondary w-26 text-center text-bg-primary text-xs "
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 text-sm">
                    {projects.liveUrl && (
                      <a
                        href={projects.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-text-accent-light hover:text-text-accent font-semibold transition-colors"
                      >
                        View Live <ExternalLink size={16} />
                      </a>
                    )}

                    {projects.githubUrl && (
                      <a
                        href={projects.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-text-accent-light hover:text-text-accent font-semibold transition-colors"
                      >
                        GitHub <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-secondary border border-subtle  p-12 md:p-16 text-center">
            <h2 className=" text-4xl md:text-5xl mb-6">
              Like What You See?
            </h2>

            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Let&apos;s work together to bring your vision to life
            </p>
            {/* // todo */}
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-3 bg-text-accent hover:bg-text-accent-light text-white px-10 py-4 font-semibold text-lg transition-all shadow-accent"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
