import ServiceCard from "@/app/components/ServiceCard";
import Cta from "@/app/components/Cta";
import Stats from "@/app/components/Status";
import Custbutton from "@/app/components/Button";
import { Code, Palette, Zap } from "lucide-react";
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 flex flex-col gap-4">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary font-bold mb-6 leading-tight">
              Creative Developer
              <br />
              <span className="text-text-primary">Building Bold</span>
              <br />
              Digital Experiences
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-2xl">
              I design and develop modern web applications that are fast,
              accessible, and conversion-focused. Let&apos;s build something
              remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 font-heading">
              <Links path="/myWork" styleType="link">
                <Custbutton btn="View My Work" styleType="bgCta" />
              </Links>
              <Links path="/services" styleType="link">
                <Custbutton btn="Services" styleType="chostBtn" />
              </Links>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Services Section */}
      <section className="px-6 pt-12 md:pt-20 pb-4" id="services">
        <div className="mx-auto my-0 max-w-7xl">
          <div className="mb-12 md:mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">What I Do</h2>
            <h6 className="max-w-lg text-base sm:text-lg text-text-secondary">
              Specialized in creating high-quality digital solutions that drive
              results
            </h6>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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