'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export default function MDXContent({ slug }) {
  const Content = dynamic(() => import(`../posts/${slug}.mdx`), {
    loading: () => (
      <div className="animate-pulse">
        <div className="h-4 bg-bg-secondary rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-bg-secondary rounded w-full mb-4"></div>
        <div className="h-4 bg-bg-secondary rounded w-5/6 mb-4"></div>
      </div>
    ),
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}