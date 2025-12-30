export default function Stats() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
  ];

  return (
    <section className="bg-bg-secondary py-8 md:py-12 px-6 border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-text-accent font-heading mb-2 text-4xl md:text-5xl">
                {stat.number}
              </div>
              <div className="text-text-secondary text-base md:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}