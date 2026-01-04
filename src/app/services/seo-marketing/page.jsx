import { TrendingUp, CheckCircle } from 'lucide-react';
import Custbutton from '@/app/components/Button';
import Links from '@/app/components/Links';

export const metadata = {
  title: 'SEO & Marketing Services',
  description: 'Get found online and grow your business with SEO and digital marketing.',
};

export default function SEOMarketingPage() {
  const features = [
    'Technical SEO optimization',
    'Keyword research and strategy',
    'On-page SEO implementation',
    'Content optimization',
    'Meta tags and schema markup',
    'Google Analytics setup',
    'Performance tracking',
    'Competitor analysis',
  ];

  const benefits = [
    {
      title: 'Higher Rankings',
      description: 'Appear on the first page of Google for your target keywords.',
    },
    {
      title: 'More Traffic',
      description: 'Increase organic visitors to your website without paid ads.',
    },
    {
      title: 'Better Conversions',
      description: 'Attract qualified leads who are actively searching for your services.',
    },
    {
      title: 'Long-Term Growth',
      description: 'Build sustainable organic traffic that compounds over time.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current website performance and SEO health.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating a custom SEO roadmap based on your goals and competition.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Executing technical fixes, content optimization, and on-page improvements.',
    },
    {
      step: '04',
      title: 'Monitoring & Reporting',
      description: 'Tracking rankings, traffic, and conversions with regular progress reports.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            SEO & Marketing
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Get found by your ideal customers when they&apos;re searching for your services. 
            I optimize your website to rank higher, drive more traffic, and grow your business.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why SEO Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="border border-border-subtle p-8 hover:border-border-accent transition-all">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
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
          <h2 className="text-4xl font-bold mb-12">SEO Process</h2>
          
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Online Presence?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s create an SEO strategy that drives real results for your business.
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
