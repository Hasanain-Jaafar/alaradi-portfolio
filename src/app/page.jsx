import Testimonials from "@/app/components/Testimonials";
import Cta from "@/app/components/Cta";
import WhatIDo from "@/app/components/WhatIDo";
import Skills from "@/app/components/Skills";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto pt-4 gap-4">
      <Hero />
      <WhatIDo />
      <Skills />
      <Testimonials />
      <Cta />
    </div>
  );
}
