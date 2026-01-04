import { Server, CheckCircle } from 'lucide-react';
import Custbutton from '@/app/components/Button';
import Links from '@/app/components/Links';

export const metadata = {
  title: 'Backend Development Services',
  description: 'Robust server-side solutions, APIs, and database architecture.',
};

export default function BackendDevelopmentPage() {
  const features = [
    'RESTful API development',
    'Database design and optimization',
    'Authentication and authorization',
    'Server configuration and deployment',
    'Third-party API integrations',
    'Microservices architecture',
    'Real-time data processing',
    'Scalable cloud infrastructure',
  ];

  const technologies = [
    'Node.js', 'Express', 'Next.js API Routes', 'PostgreSQL',
    'MongoDB', 'Redis', 'AWS', 'Vercel', 'Docker', 'GraphQL'
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your data models, business logic, and scalability needs.',
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Planning database schema, API endpoints, and system architecture.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building robust backends with comprehensive testing and documentation.',
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      description: 'Deploying to production with monitoring, logging, and performance optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-bg-accent flex items-center justify-center">
              <Server size={32} className="text-white" />
            </div>
            <div className="w-20 h-1 bg-bg-accent"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Backend Development
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Powerful server-side solutions that handle your business logic, data, and integrations. 
            I build scalable backends that grow with your business.
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
          <h2 className="text-4xl font-bold mb-12">Development Process</h2>
          
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

      {/* Technologies */}
      <section className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Backend Technologies</h2>
          
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-bg-primary border border-border-subtle hover:border-border-accent transition-all"
              >
                <span className="text-lg font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Robust Backend?
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let&apos;s build a scalable server-side solution for your application.
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