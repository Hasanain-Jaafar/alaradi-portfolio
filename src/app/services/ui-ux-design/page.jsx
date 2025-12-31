import { Palette, CheckCircle } from 'lucide-react';
import Custbutton from '@/app/components/Button';
import Links from '@/app/components/Links';

export const metadata = {
  title: 'UI/UX Design Services',
  description: 'User-centered design services that solve real problems and create delightful experiences.',
};

export default function UIUXDesignPage() {
  const features = [
    'User research and persona development',
    'Wireframing and prototyping',
    'High-fidelity UI design',
    'Interactive prototypes',
    'Design system creation',
    'Usability testing',
    'Responsive design for all devices',
    'Accessibility-focused design',
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision',
    'Photoshop', 'Illustrator', 'Miro', 'Optimal Workshop'
  ];

  const process = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'Understanding your users, competitors, and business goals through research and analysis.',
    },
    {
      step: '02',
      title: 'Wireframing & Concepts',
      description: 'Creating low-fidelity wireframes and exploring different design concepts.',
    },
    {
      step: '03',
      title: 'Visual Design',
      description: 'Developing high-fidelity designs with your brand identity and modern design principles.',
    },
    {
      step: '04',
      title: 'Testing & Iteration',
      description: 'Conducting usability tests, gathering feedback, and refining the design.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-secondary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <Palette size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6">
            UI/UX Design
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Crafting user-centered designs that solve real problems and create delightful experiences. 
            Beautiful interfaces that users love and businesses need.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">What&apos;s Included</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={24} className="text-text-accent shrink-0 mt-1" />
                <p className="text-lg text-text-secondary">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Design Process</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div key={index} className="border border-border-subtle p-8 hover:border-border-accent transition-all">
                <div className="text-5xl font-bold text-text-accent mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Design Tools</h2>
          
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-bg-primary border border-border-subtle hover:border-border-accent transition-all"
              >
                <span className="text-lg font-semibold">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Design That Converts?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s create a user experience that delights your customers and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Links path="/contact" styleType="link">
              <Custbutton btn="Get Started" styleType="bgCta" />
            </Links>
            <Links path="/myWork" styleType="link">
              <Custbutton btn="View Portfolio" styleType="chostBtn" />
            </Links>
          </div>
        </div>
      </section>

    </div>
  );
}