import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Clock } from "lucide-react";

const posts = [
  {
    title: "Why Your ML Model Doesn't Need More Data",
    excerpt:
      "Everyone's obsessed with bigger datasets. But sometimes, the real breakthrough comes from better feature engineering and domain expertise...",
    date: "Jan 2026",
    likes: 342,
    comments: 47,
    tag: "Hot Take",
    tagColor: "bg-coral-light text-coral",
  },
  {
    title: "The Art of Being a Misfit in Data Science",
    excerpt:
      "Conformity kills innovation. Here's why the best data scientists are the ones who dare to ask the 'stupid' questions...",
    date: "Dec 2025",
    likes: 891,
    comments: 123,
    tag: "Personal",
    tagColor: "bg-lavender-light text-lavender",
  },
  {
    title: "5 SQL Tricks That Changed My Life",
    excerpt:
      "Window functions, CTEs, and lateral joins — the holy trinity of analytical SQL. Let me walk you through real-world examples...",
    date: "Nov 2025",
    likes: 1204,
    comments: 89,
    tag: "Tutorial",
    tagColor: "bg-mint-light text-mint",
  },
];

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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Writing out <span className="text-gradient">loud.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
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
                <Share2 size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;