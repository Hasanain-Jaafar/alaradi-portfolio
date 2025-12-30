"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;

  const [post, setPost] = useState(null);
  const [Content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function loadPost() {
      try {
        // Dynamically import the MDX file
        const mdxModule = await import(`../posts/${slug}.mdx`);
        setContent(() => mdxModule.default);
        setPost(mdxModule.frontmatter || {});
      } catch (err) {
        console.error("Error loading post:", err);
        setError(err.message);
      }
    }

    loadPost();
  }, [slug]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-primary text-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary text-primary flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-secondary mb-8">
            The blog post &quot;{slug}&quot; could not be loaded.
          </p>
          <p className="text-sm text-tertiary mb-8">Error: {error}</p>
          <Link
            href="/blogs"
            className="inline-block bg-accent hover:bg-[#fb923c] text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post || !Content) {
    return (
      <div className="min-h-screen bg-primary text-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Back Button */}
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Post Header */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          {post.category && (
            <span className="text-accent text-sm font-semibold mb-4 inline-block">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title || "Untitled Post"}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-secondary">
            {post.date && (
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}

            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <Content />
          </article>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-subtle p-8 text-center">
            <h3 className=" text-2xl mb-4">Read More Articles</h3>
            <p className="mb-6">
              Check out more posts on web development, design, and business.
            </p>
            <Link href="/blogs" className="mdbtn">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
