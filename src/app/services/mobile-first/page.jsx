import { Smartphone, CheckCircle } from 'lucide-react';
import Custbutton from '@/app/components/Button';
import Links from '@/app/components/Links';

export const metadata = {
  title: 'Mobile-First Development Services',
  description: 'Responsive web development that works perfectly on all devices.',
};

export default function MobileFirstPage() {
  const features = [
    'Mobile-first responsive design',
    'Touch-optimized interfaces',
    'Progressive Web Apps (PWAs)',
    'Cross-device compatibility',
    'Fast mobile loading speeds',
    'Offline functionality',
    'App-like user experience',
    'Mobile performance optimization',
  ];

  const approaches = [
    {
      title: 'Design for Mobile First',
      description: 'Start with mobile constraints, then scale up to larger screens.',
    },
    {
      title: 'Touch-Friendly UI',
      description: 'Buttons, links, and controls sized for fingers, not mouse pointers.',
    },
    {
      title: 'Performance Focused',
      description: 'Optimized images, lazy loading, and efficient code for mobile networks.',
    },
    {
      title: 'Progressive Enhancement',
      description: 'Core functionality works everywhere, enhanced features for capable devices.',
    },
  ];

  const stats = [
    { number: '60%+', label: 'Mobile Traffic', description: 'Of all web traffic' },
    { number: '3s', label: 'Max Load Time', description: 'Before users leave' },
    { number: '85%', label: 'Expect Mobile', description: 'Users expect mobile sites' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <Smartphone size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Mobile-First Development
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            In a mobile-dominated world, your website needs to work flawlessly on every device. 
            I build responsive experiences that look and perform beautifully from smartphones to desktops.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Mobile-First Matters</h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="border border-border-subtle p-6">
                <div className="text-5xl font-bold text-text-accent mb-2">{stat.number}</div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-sm text-text-secondary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6">
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

      {/* Approach */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Mobile-First Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((item, index) => (
              <div key={index} className="border border-border-subtle p-8 hover:border-border-accent transition-all">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Mobile-First Website?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s create a responsive experience that works perfectly on every device.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Links path="/contact" styleType="link">
              <Custbutton btn="Get Started" styleType="bgCta" />
            </Links>
            <Links path="/work" styleType="link">
              <Custbutton btn="View Portfolio" styleType="chostBtn" />
            </Links>
          </div>
        </div>
      </section>

    </div>
  );
}