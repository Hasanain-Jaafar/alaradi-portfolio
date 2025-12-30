import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-bg-primary text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Blog
          </h1>
          
          <p className="text-xl text-secondary leading-relaxed">
            Thoughts on web development, design, business, and everything in between.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-secondary">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group"
                >
                  <article className="bg-bg-secondary p-8  border border-subtle hover:border-accent transition-all h-full flex flex-col">
                    {/* Category Tag (if exists) */}
                    {post.category && (
                      <span className="text-text-accent text-sm font-semibold mb-4 inline-block">
                        {post.category}
                      </span>
                    )}

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-text-secondary mb-4 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white leading-relaxed mb-6 grow">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-tertiary mb-4 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      {post.readTime && (
                        <div className="flex items-center gap-2">
                          <Clock size={16} color='white'/>
                          <span>{post.readTime} min read</span>
                        </div>
                      )}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={18} />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}