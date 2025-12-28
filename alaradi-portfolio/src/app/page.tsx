import ServiceCard from "@/app/components/ServiceCard";
import Cta from "@/app/components/Cta";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const colors = {
  bgPrimary: "#0a0a0a",
  bgSecondary: "#213258",
  bgTertiary: "#262626",
  textPrimary: "#e5e5e5",
  textSecondary: "#a3a3a3",
  textTertiary: "#737373",
  borderSubtle: "#262626",
  borderDefault: "#404040",
  accent: "#f54a00",
  accentLight: "#ca3500",
  accentDark: "#ea580c",
};
export default function Home() {
  return (
    <div className="container mx-auto pt-8 flex flex-col gap-4">
      {/* hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Orange accent bar */}
            <div className="w-20 h-1 bg-btn rounded-full mb-8"></div>

            <h1 className="text-6xl text-text md:text-7xl font-bold mb-6 leading-tight">
              Creative Developer
              <br />
              <span className="text-text">Building Bold</span>
              <br />
              Digital Experiences
            </h1>

            <p className="text-xl text-text leading-relaxed mb-10 max-w-2xl">
              I design and develop modern web applications that are fast,
              accessible, and conversion-focused. Let&apos;s build something
              remarkable together.
            </p>

            <div className="flex gap-4 font-heading">
              <button className="bg-btn hover:bg-orange-700 text-white px-8 py-4  font-semibold transition-all shadow-lg shadow-[#ffffff5c]/20 flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-btn text-btn hover:bg-orange-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="px-6 py-4 " id="services">
        <div className="mx-auto my-0 max-w-[1280]">
          <div className="mb-16">
            <div
              style={{
                width: "5rem",
                height: "0.25rem",
                backgroundColor: colors.accent,
                borderRadius: "9999px",
                marginBottom: "1.5rem",
              }}
            ></div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              What I Do
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: colors.textSecondary,
                maxWidth: "42rem",
              }}
            >
              Specialized in creating high-quality digital solutions that drive
              results
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Service Card 1 */}
            <ServiceCard
              icon={<Code size={28} />}
              title="Web Development"
              description="Building fast, scalable web applications with modern frameworks like Next.js, React, and Tailwind CSS."
              colors={colors}
            />

            {/* Service Card 2 */}
            <ServiceCard
              icon={<Palette size={28} />}
              title="UI/UX Design"
              description="Crafting user-centered designs that solve real problems and create delightful experiences."
              colors={colors}
            />

            {/* Service Card 3 */}
            <ServiceCard
              icon={<Zap size={28} />}
              title="Performance Optimization"
              description="Optimizing websites for speed, SEO, and conversion to maximize your business impact."
              colors={colors}
            />
          </div>
        </div>
    </section>
      <Cta colors={colors}/>
    </div>
  );
}
