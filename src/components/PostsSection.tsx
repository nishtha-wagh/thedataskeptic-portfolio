import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const PostsSection = () => {
  return (
    <section id="posts" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Posts & Thoughts
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Writing out <span className="text-gradient">loud.</span>
          </h2>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-display font-medium text-primary hover:opacity-80 transition-opacity mb-12">
            View all posts <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-display font-medium ${post.tagColor}`}
                  >
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-coral" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {post.comments}
                  </span>
                  <span className="ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-display font-medium">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
