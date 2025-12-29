'use client';

export default function TestMDXPage() {
  return (
    <div className="min-h-screen bg-primary text-primary p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">MDX Test Page</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-secondary mb-4">
            This is testing if MDX rendering works.
          </p>
          
          <h2 className="text-3xl font-bold mt-8 mb-4">Features:</h2>
          <ul className="text-secondary space-y-2">
            <li>Markdown support</li>
            <li><strong>Bold text</strong></li>
            <li><em>Italic text</em></li>
          </ul>
          
          <p className="text-accent mt-6">Success! ✅</p>
        </div>
      </div>
    </div>
  );
}


