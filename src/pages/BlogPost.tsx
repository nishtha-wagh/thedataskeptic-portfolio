import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, MessageCircle, Clock, Share2 } from "lucide-react";
import NavBar from "@/components/NavBar";
import { posts } from '../components/data/posts';
import MarkdownContent from "../components/MarkdownContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <article className="section-padding pt-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-display font-medium ${post.tagColor}`}
              >
                {post.tag}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={14} />
                {post.date}
              </span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 mb-8 border-b border-border">
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MarkdownContent content={post.content} />
          </motion.div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
