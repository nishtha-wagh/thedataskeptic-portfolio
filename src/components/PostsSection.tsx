import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

const posts = [
  {
    title: "Why Your ML Model Doesn't Need More Data",
    excerpt:
      "Everyone's obsessed with bigger datasets. But sometimes, the real breakthrough comes from better feature engineering and domain expertise.",
    date: "Jan 2026",
    tag: "Hot Take",
    tagColor: "bg-coral-light text-coral",
    url: "https://medium.com/@your-handle/why-your-ml-model-doesnt-need-more-data",
  },
  {
    title: "The Art of Being a Data Skeptic",
    excerpt:
      "Why questioning defaults, assumptions, and metrics is a superpower in data science.",
    date: "Dec 2025",
    tag: "Personal",
    tagColor: "bg-lavender-light text-lavender",
    url: "https://www.linkedin.com/pulse/your-post-link",
  },
  {
    title: "5 SQL Patterns Senior Data Scientists Actually Use",
    excerpt:
      "Beyond basic joins — practical SQL patterns that show up in real production systems.",
    date: "Nov 2025",
    tag: "Tutorial",
    tagColor: "bg-mint-light text-mint",
    url: "https://medium.com/@your-handle/5-sql-patterns",
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
            Writing & Thinking
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Posts worth <span className="text-gradient">reading.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                Read on Medium / LinkedIn
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
