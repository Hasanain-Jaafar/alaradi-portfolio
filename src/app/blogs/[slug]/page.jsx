import { notFound } from "next/navigation";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/lib/mdx";
import MDXContent from "./MDXContent";

// ... generateStaticParams and generateMetadata stay the same ...

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  const postUrl = `https://https://hasseonline.cloud//blogs/${slug}`;
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Back Button */}
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-accent transition-colors mb-8"
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
            <span className="text-text-accent text-sm font-semibold mb-4 inline-block">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h2 className=" text-4xl md:text-5xl  mb-6 leading-tight">
            {post.title}
          </h2>

          {/* Meta Info */}
          <div className="flex items-center flex-wrap gap-6 text-text-secondary mb-8">
            <div className="flex ">
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
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>
            {/* Share Buttons */}
            <ShareButtons title={post.title} url={postUrl} />
          </div>
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-96 mb-8 overflow-hidden border border-border-subtle">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg">
            <MDXContent slug={slug} />
          </article>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-secondary border border-border-subtle p-8 text-center">
            <h3 className="text-2xl mb-4 text-text-primary font-bold">
              Read More Articles
            </h3>
            <p className="mb-6 text-text-secondary">
              Check out more posts on web development, design, and business.
            </p>
            {/* Share Section */}
            <section className="pb-12 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-bg-secondary border border-border-subtle p-8">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">
                    Found this helpful? Share it!
                  </h3>
                  <ShareButtons title={post.title} url={postUrl} />
                </div>
              </div>
            </section>
            <Link href="/blogs" className="mdbtn">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
