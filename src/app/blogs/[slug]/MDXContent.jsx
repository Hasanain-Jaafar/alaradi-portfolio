'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export default function MDXContent({ slug }) {
  // Security: The slug is validated in getPostBySlug() before this component is rendered
  // The dynamic import will fail safely if the file doesn't exist
  const Content = dynamic(
    () => import(`../posts/${slug}.mdx`).catch((error) => {
      console.error(`Failed to load MDX file for slug: ${slug}`, error);
      // Return a fallback component if import fails
      return {
        default: () => (
          <div className="text-center py-8">
            <p className="text-destructive">Failed to load content.</p>
          </div>
        ),
      };
    }),
    {
      loading: () => (
        <div className="animate-pulse">
          <div className="h-4 bg-bg-secondary rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-bg-secondary rounded w-full mb-4"></div>
          <div className="h-4 bg-bg-secondary rounded w-5/6 mb-4"></div>
        </div>
      ),
    }
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}