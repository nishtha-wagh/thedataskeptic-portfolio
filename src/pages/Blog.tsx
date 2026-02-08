import { motion } from "framer-motion";
import { Heart, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { posts } from "@/data/posts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-sm font-medium text-primary mb-2 block">
              Blog & Thoughts
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Writing out <span className="text-gradient">loud.</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl">
              Hot takes, tutorials, and personal reflections on data science, ML, and the art of thinking differently.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-display font-medium ${post.tagColor}`}
                    >
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {post.date}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart size={14} className="text-coral" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        {post.comments}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-display font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
