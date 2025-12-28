import ServiceCard from "@/app/components/ServiceCard";
import Cta from "@/app/components/Cta";
import Stats from "@/app/components/Status";
import Custbutton from "@/app/components/Button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 flex flex-col gap-4">
      {/* hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl text-text-primary md:text-7xl font-bold mb-6 leading-tight">
              Creative Developer
              <br />
              <span className="text-text-primary">Building Bold</span>
              <br />
              Digital Experiences
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
              I design and develop modern web applications that are fast,
              accessible, and conversion-focused. Let&apos;s build something
              remarkable together.
            </p>

            <div className="flex gap-4 font-heading">
              <button className="bg-bg-accent hover:bg-orange-700 text-text-primary px-8 py-4 font-semibold tracking-wide  transition-all duration-400 ease-in-out shadow-lg shadow-[#ffffff5c]/20 flex items-center gap-2 cursor-pointer hover:text-text-secondary font-heading">
                View My Work <ArrowRight size={20} />
              </button>
              <Custbutton btn="Skills" styleType="chostBtn"/> 
            </div>
          </div>
        </div>
      </section>
      <Stats />
      {/* Services Section */}
      <section className="px-6 pt-20 pb-4 " id="services">
        <div className="mx-auto my-0 max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4">What I Do</h2>
            <h6 className="max-w-lg">
              Specialized in creating high-quality digital solutions that drive
              results
            </h6>
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
            />

            {/* Service Card 2 */}
            <ServiceCard
              icon={<Palette size={28} />}
              title="UI/UX Design"
              description="Crafting user-centered designs that solve real problems and create delightful experiences."
            />

            {/* Service Card 3 */}
            <ServiceCard
              icon={<Zap size={28} />}
              title="Performance Optimization"
              description="Optimizing websites for speed, SEO, and conversion to maximize your business impact."
            />
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}
