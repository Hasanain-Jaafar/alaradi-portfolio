import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      company: "TechStart Inc.",
      text: "Hassan delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and enjoyable. Our conversion rate increased by 40% after launch.",
      image: "/tes 1.avif",
    },
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      company: "Digital Solutions",
      text: "Working with Hassan was a game-changer for our business. He transformed our outdated website into a modern, fast, and user-friendly platform. The project was delivered on time and within budget.",
      image: "/tes 2.avif",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLab",
      text: "Hassan's expertise in both design and development is rare. He understood our vision immediately and brought it to life beautifully. Communication was excellent throughout the project.",
      image: "/tes 3.avif",
    },
  ];

  return (
    <section className="py-20 px-6 bg-bg-secondary mt-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-text-secondary">
            Don&apos;t just take my word for it - hear from people I&apos;ve
            worked with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bg-primary border border-border-subtle p-8 hover:border-border-accent transition-all flex flex-col"
            >
              {/* Quote Icon */}
              <Quote size={40} className="text-text-accent mb-6" />

              {/* Testimonial Text */}
              <p className="text-text-secondary leading-relaxed mb-6">
                &apos;{testimonial.text}&apos;
              </p>

              {/* Author Info */}
              <div className="flex justify-center items-center gap-4 mt-auto">
                {/* Avatar - Use Image if available, otherwise show initial */}
                {testimonial.image ? (
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full shadow-gray-200 shadow-sm border-accent border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill={true}
                      className="object-cover my-auto mx-auto"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-bg-accent flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Name and Role */}
                <div>
                  <p className="text-text-primary font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
