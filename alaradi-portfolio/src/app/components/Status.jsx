export default function Stats() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-20">
      <section className="bg-bg-secondary flex items-center justify-center max-w-7xl mx-auto py-12 px-6 border-t border-b border-subtle">
        <div
          style={{
            minWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-text-accent font-heading font-bold mb-2 text-5xl">
                {stat.number}
              </div>
              <div className="text-text-secondary text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
