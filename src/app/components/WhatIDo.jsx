import Link from "next/link";
import ServiceCard from "@/app/components/ServiceCard";
import { Code, Palette, Zap } from "lucide-react";

function WhatIDo() {
  return (
     <section className="px-6 pt-12 md:pt-20 pb-4" id="services">
        {/* What I Do Section */}
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
  )
}

export default WhatIDo