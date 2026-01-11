import Links from "./Links";
import Custbutton from "./Button";
function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="max-w-4xl">
          <h2 className="sm:text-5xl md:text-6xl font-bold mb-6 leading-tight capitalize">
            I design and build fast,
            <br />
            <span className="text-text-secondary">
              conversion-focused websites
            </span>
            <br />
            for modern businesses.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-2xl">
            From UI/UX to performance-optimized front-end, I help brands turn
            visitors into users with clean design, solid engineering, and zero
            bloat.
          </p>
          {/* Stats Section */}
          <div className="text-bg-accent mb-10 font-logo text-xl  flex justify-start items-center gap-10">
            <span className=" pl-4 text-2xl border-l-2 border-accent/30">
              50+ <p className="text-sm text-text-secondary/60 ">Projects Completed</p>
            </span>
            <span className=" pl-4 text-2xl border-l-2 border-accent/30">
              5+ <p className="text-sm text-text-secondary/60 ">Years Experience</p>
            </span>
            <span className=" pl-4 text-2xl border-l-2 border-accent/30">
              30+ <p className="text-sm text-text-secondary/60 ">Happy Clients</p>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 font-heading mt-24">
            <Links path="/contact" styleType="link">
              <Custbutton btn="Start a Project" styleType="bgCta" />
            </Links>
            <Links path="/services" styleType="link">
              <Custbutton btn="View My Work" styleType="chostBtn" />
            </Links>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
