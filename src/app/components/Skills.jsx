import { Code2, Award, BookOpen, TrendingUp } from "lucide-react";

export default function Skills() {
  const stats = [
    {
      icon: <Code2 size={32} />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <Award size={32} />,
      number: "30+",
      label: "Projects Completed",
    },
    {
      icon: <BookOpen size={32} />,
      number: "15+",
      label: "Certifications",
    },
    {
      icon: <TrendingUp size={32} />,
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  const technologies = [
    { name: "Next.js", level: 95, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Git & GitHub", level: 90, category: "Tools" },
    { name: "Figma", level: 85, category: "Design" },
  ];

  const certifications = [
    {
      title: "Advanced React & Next.js",
      issuer: "Udemy",
      year: "2024",
      verified: true,
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      year: "2023",
      verified: true,
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2023",
      verified: true,
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022",
      verified: true,
    },
  ];

  return (
    <section className="py-20 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary">
            Proven experience with modern technologies and continuous learning
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-bg-secondary border border-border-subtle p-6 text-center hover:border-border-accent transition-all"
            >
              <div className="text-text-accent mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies with Progress Bars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-primary font-semibold">
                    {tech.name}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {tech.category}
                  </span>
                </div>
                <div className="w-full bg-bg-secondary h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Certifications & Courses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-bg-secondary border border-border-subtle p-6 hover:border-border-accent transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-text-primary pr-4">
                    {cert.title}
                  </h4>
                  {cert.verified && (
                    <Award size={20} className="text-text-accent shrink-0" />
                  )}
                </div>
                <p className="text-text-secondary mb-1">{cert.issuer}</p>
                <p className="text-text-secondary text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
