import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/posts" className="text-primary mt-4 inline-block">
            ← Back to all posts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/posts"
          className="text-sm text-muted-foreground mb-8 inline-block hover:text-primary transition-colors"
        >
          ← Back to all posts
        </Link>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <span className="px-3 py-1 rounded-full bg-muted font-medium">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Engagement */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12">
          <span>♡ {post.likes} likes</span>
          <span>💬 {post.comments} comments</span>
        </div>

        {/* Content */}
        <article className="prose prose-neutral prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="mt-12 mb-4 text-2xl font-display font-semibold"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="mt-10 mb-3 text-xl font-display font-semibold"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="leading-relaxed mb-5" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="my-6 list-disc pl-6 space-y-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="my-6 list-decimal pl-6 space-y-2" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-muted pl-4 italic text-muted-foreground my-8"
                  {...props}
                />
              ),
              hr: () => <hr className="my-10 border-muted" />,
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-foreground" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
