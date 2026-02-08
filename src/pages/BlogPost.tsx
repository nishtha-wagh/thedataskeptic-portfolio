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
        {/* Back link */}
        <Link
          to="/posts"
          className="text-sm text-muted-foreground mb-6 inline-block hover:text-primary transition-colors"
        >
          ← Back to all posts
        </Link>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-muted font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Engagement */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-10">
          <span>♡ {post.likes} likes</span>
          <span>💬 {post.comments} comments</span>
        </div>

        {/* CONTENT */}
        <article className="space-y-6 leading-relaxed text-[15.5px] text-foreground">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-display font-bold mt-10 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-display font-semibold mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {children}
                </ul>
              ),
              li: ({ children }) => <li>{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">
                  {children}
                </strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="my-10 border-t border-border" />
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
