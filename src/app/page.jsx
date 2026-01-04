import ServiceCard from "@/app/components/ServiceCard";
import Cta from "@/app/components/Cta";
import Stats from "@/app/components/Status";
import Custbutton from "@/app/components/Button";
import { Code, Palette, Zap } from "lucide-react";
import Links from "./components/Links";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 gap-4">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
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

            <div className="flex flex-col sm:flex-row gap-4 font-heading">
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

      <Stats />

      {/* Services Section */}
      <section className="px-6 pt-12 md:pt-20 pb-4" id="services">
        <div className="mx-auto my-0 max-w-7xl">
          <div className="mb-12 md:mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              What I Do
            </h2>
            <h6 className="max-w-lg text-base sm:text-lg text-text-secondary">
              Specialized in creating high-quality digital solutions that drive
              results
            </h6>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <Link href="/services/web-development">
              <ServiceCard
                icon={<Code size={28} />}
                title="Web Development"
                description="Building fast, scalable web applications with modern frameworks like Next.js, React, and Tailwind CSS."
              />
            </Link>

            {/* Service Card 2 */}
            <Link href="/services/ui-ux-design">
              <ServiceCard
                icon={<Palette size={28} />}
                title="UI/UX Design"
                description="Crafting user-centered designs that solve real problems and create delightful experiences."
              />
            </Link>

            {/* Service Card 3 */}
            <Link href="/services/performance-optimization">
              <ServiceCard
                icon={<Zap size={28} />}
                title="Performance"
                description="Optimizing websites for speed, SEO, and conversion to maximize your business impact."
              />
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}
