import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ChurnGuard ML",
    description:
      "End-to-end customer churn prediction system using XGBoost and SHAP explainability. Interactive Streamlit app with real-time inference and business impact analysis.",
    tags: ["XGBoost", "SHAP", "Streamlit", "Python"],
    color: "bg-coral-light",
    accent: "text-coral",
  },
  {
    title: "SentimentStream",
    description:
      "Real-time sentiment analysis dashboard processing 10K+ tweets/min using Kafka and BERT. Visualized via custom D3.js dashboards.",
    tags: ["BERT", "Kafka", "D3.js", "Docker"],
    color: "bg-mint-light",
    accent: "text-mint",
  },
  {
    title: "FairML Audit",
    description:
      "Open-source toolkit for auditing ML models for fairness and bias across protected attributes. 500+ GitHub stars.",
    tags: ["Fairness", "scikit-learn", "React", "Open Source"],
    color: "bg-lavender-light",
    accent: "text-lavender",
  },
  {
    title: "DataStory Generator",
    description:
      "AI-powered tool that automatically generates narrative insights from raw datasets. Uses GPT-4 + statistical analysis.",
    tags: ["GPT-4", "Pandas", "Streamlit", "NLP"],
    color: "bg-peach-light",
    accent: "text-peach",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Things I've <span className="text-gradient">built.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300 ${project.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-display font-medium bg-background/60 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;