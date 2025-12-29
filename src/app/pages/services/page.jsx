import { Code, Palette, Zap, Smartphone, Database, Search } from 'lucide-react';
import Links from "../../components/Links";
import Custbutton from "../../components/Button";

export default function ServicesPage() {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Building fast, scalable web applications with modern frameworks like Next.js, React, and Tailwind CSS. Clean code, optimized performance.',
      features: ['Next.js & React', 'Responsive Design', 'API Integration', 'Performance Optimization']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Crafting user-centered designs that solve real problems and create delightful experiences. From wireframes to high-fidelity prototypes.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and conversion to maximize your business impact. Fast sites rank higher and convert better.',
      features: ['Speed Optimization', 'SEO', 'Core Web Vitals', 'Analytics']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile-First Development',
      description: 'Creating responsive experiences that work perfectly on any device. Mobile-first approach ensures optimal performance everywhere.',
      features: ['Responsive Design', 'Touch Optimization', 'Progressive Web Apps', 'Cross-browser Testing']
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Building robust server-side solutions with Node.js, databases, and APIs. Scalable architecture for growing applications.',
      features: ['Node.js', 'Database Design', 'REST APIs', 'Authentication']
    },
    {
      icon: <Search size={32} />,
      title: 'SEO & Marketing',
      description: 'Implementing SEO best practices to help your site rank higher and reach more customers. Technical SEO and content optimization.',
      features: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'Analytics Setup']
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/*// > Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Services
          </h1>
          
          <p className="text-xl text-secondary leading-relaxed mb-8">
            Specialized in creating high-quality digital solutions that drive real results. 
            From concept to launch, I help bring your vision to life with modern web technologies.
          </p>
        </div>
      </section>

      {/*// > Services Grid */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2  gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-bg-secondary p-8 rounded-lg border border-subtle hover:border-accent transition-all group"
              >
                {/*// > Icon */}
                <div className="w-16 h-16 bg-bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:bg-accent/20 transition-all">
                  {service.icon}
                </div>

                {/*// > Title */}
                <h3 className="font-heading text-2xl mb-4 text-text-secondary">
                  {service.title}
                </h3>

                {/*// > Description */}
                <p className="text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/*// > Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/*// > Learn More Link */}
                <div className= 'mb-auto flex items-center gap-4'>
                  <Links
                    path="/contact"
                    name="Get Started"
                    styleType="link" >
                  </Links>
                    <span className="text-accent text-4xl pb-2 inline-flex items-center transition-all">
                      →
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*// > Process Section */}
      <section className="py-20 px-6 border-t border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="w-20 h-1 bg-accent rounded-full mb-6 mx-auto"></div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              How I Work
            </h2>
            <p className="text-xl text-secondary">
              A clear, collaborative process from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/*// > Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent font-display text-2xl font-bold">
                1
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">
                Discovery
              </h3>
              <p className="text-secondary">
                Understanding your goals, audience, and requirements through detailed discussions.
              </p>
            </div>

            {/*// > Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent font-display text-2xl font-bold">
                2
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">
                Design & Build
              </h3>
              <p className="text-secondary">
                Creating wireframes, prototypes, and building your solution with modern best practices.
              </p>
            </div>

            {/*// > Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent font-display text-2xl font-bold">
                3
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">
                Launch & Support
              </h3>
              <p className="text-secondary">
                Deploying your project and providing ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*// > CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-secondary border border-subtle rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how these services can help bring your vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Links path="/contact" name="">
                <Custbutton styleType="bgCta" btn="Get in Touch">
                  <span>→</span>
                </Custbutton>
              </Links>
              
              <Links path="/about" name="">
                <Custbutton styleType="chostBtn" btn="Learn About Me" />
              </Links>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
