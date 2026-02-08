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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Engagement */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-10">
          <span>♡ {post.likes} likes</span>
          <span>💬 {post.comments} comments</span>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-neutral max-w-none leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
        </ReactMarkdown>
        </article>

      </div>
    </section>
  );
};

export default BlogPost;