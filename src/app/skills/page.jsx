import Skills from '@/app/components/Skills';
import Links from '@/app/components/Links';
import Custbutton from '@/app/components/Button';

export const metadata = {
  title: 'Skills & Certifications',
  description: 'Technical skills, certifications, and professional experience.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-20 h-1 bg-accent mb-8"></div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Skills & Certifications
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Continuously learning and growing with the latest technologies and best practices in web development.
          </p>
        </div>
      </section>

      {/* Skills Component */}
      <Skills />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-border-subtle p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Ready to bring your project to life with modern technologies?
            </p>
            <Links path="/contact" styleType="link">
              <Custbutton btn="Start Your Project" styleType="bgCta" />
            </Links>
          </div>
        </div>
      </section>

    </div>
  );
}