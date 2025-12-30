import { Zap, CheckCircle } from 'lucide-react';
import Custbutton from '@/app/components/Button';
import Links from '@/app/components/Links';

export const metadata = {
  title: 'Performance Optimization Services',
  description: 'Speed up your website and improve conversions with professional performance optimization.',
};

export default function PerformanceOptimizationPage() {
  const features = [
    'Page speed optimization',
    'Core Web Vitals improvement',
    'Image optimization and lazy loading',
    'Code splitting and minification',
    'Caching strategies',
    'Database query optimization',
    'CDN setup and configuration',
    'Performance monitoring and reporting',
  ];

  const metrics = [
    { label: 'Load Time', value: '<2s', description: 'Target page load time' },
    { label: 'Performance Score', value: '90+', description: 'Lighthouse score target' },
    { label: 'Core Web Vitals', value: 'Pass', description: 'All metrics in green' },
    { label: 'Conversion Rate', value: '+40%', description: 'Average improvement' },
  ];

  const process = [
    {
      step: '01',
      title: 'Audit & Analysis',
      description: 'Comprehensive performance audit using industry-standard tools to identify bottlenecks.',
    },
    {
      step: '02',
      title: 'Optimization Plan',
      description: 'Creating a prioritized action plan based on impact and implementation effort.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Applying optimizations including code, images, caching, and infrastructure improvements.',
    },
    {
      step: '04',
      title: 'Testing & Monitoring',
      description: 'Continuous monitoring and fine-tuning to maintain optimal performance.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <Zap size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Performance Optimization
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Speed matters. Optimizing websites for blazing-fast load times, better SEO rankings, 
            and higher conversion rates. Every millisecond counts.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Performance Targets</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="border border-border-subtle p-6 text-center hover:border-border-accent transition-all">
                <div className="text-5xl font-bold text-text-accent mb-3">{metric.value}</div>
                <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
                <p className="text-sm text-text-secondary">{metric.description}</p>
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

      {/* Process */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Optimization Process</h2>
          
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

      {/* Why It Matters */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Performance Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border-subtle p-8">
              <h3 className="text-2xl font-bold mb-4">Better SEO</h3>
              <p className="text-text-secondary">
                Google uses page speed as a ranking factor. Faster sites rank higher in search results.
              </p>
            </div>
            <div className="border border-border-subtle p-8">
              <h3 className="text-2xl font-bold mb-4">Higher Conversions</h3>
              <p className="text-text-secondary">
                A 1-second delay in load time can reduce conversions by 7%. Speed directly impacts revenue.
              </p>
            </div>
            <div className="border border-border-subtle p-8">
              <h3 className="text-2xl font-bold mb-4">Better UX</h3>
              <p className="text-text-secondary">
                53% of mobile users abandon sites that take longer than 3 seconds to load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-bg-secondary mb-14">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Is Your Site Too Slow?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s optimize your website for speed, SEO, and conversions.
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