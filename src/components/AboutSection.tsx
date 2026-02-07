import { motion } from "framer-motion";
import { Brain, BarChart3, Database, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning", color: "bg-coral-light text-coral" },
  { icon: BarChart3, label: "Statistical Analysis", color: "bg-mint-light text-mint" },
  { icon: Database, label: "Data Engineering", color: "bg-lavender-light text-lavender" },
  { icon: Code2, label: "Python & R", color: "bg-peach-light text-peach" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Not your typical
            <br />
            <span className="text-gradient">data person.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted-foreground font-body leading-relaxed"
          >
            <p>
              I'm a data scientist who thrives at the intersection of rigorous analysis 
              and creative problem-solving. With over 3 years of experience in machine 
              learning, statistical modeling, and data storytelling, I bring a "misfit" 
              perspective to every challenge.
            </p>
            <p>
              My approach? Question the defaults. Challenge assumptions. Find the signal 
              in the noise that everyone else overlooks. From predictive modeling to 
              NLP pipelines, I build solutions that don't just work — they surprise.
            </p>
            <p>
              When I'm not training models, you'll find me writing about data science, 
              mentoring aspiring analysts, or exploring the latest in AI research.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className={`rounded-2xl p-6 border border-border ${skill.color} bg-opacity-50 flex flex-col items-start gap-3`}
              >
                <skill.icon size={28} />
                <span className="font-display text-sm font-semibold text-foreground">
                  {skill.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;