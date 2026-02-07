import { motion } from "framer-motion";
import { Brain, BarChart3, Database, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning & Statistics", color: "bg-coral-light text-coral" },
  { icon: BarChart3, label: "Experimentation & Analytics", color: "bg-mint-light text-mint" },
  { icon: Database, label: "Data Engineering", color: "bg-lavender-light text-lavender" },
  { icon: Code2, label: "Python & SQL", color: "bg-peach-light text-peach" },
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
              I'm a <b>Senior Data Scientist with 4+ years</b> building production ML systems—from messy, ambiguous problems to deployed solutions driving real decisions. My experience spans <b>credit risk modeling, LLM pipelines, and experimentation</b>, working across the full lifecycle from feature engineering to monitoring systems at scale.
            </p>

            <p>
              My approach? <b>Question the defaults. Challenge assumptions. Find the signal everyone else overlooks.</b> I don't accept the first problem framing or jump straight to algorithms. I validate with data, optimize for production (not just notebooks), and build systems designed to survive the real world—messy data, shifting requirements, and all.
            </p>

            <p>
              At <b>Amazon</b>, I built credit risk models on <b>AWS serving 500K+ daily decisions</b> and optimized pipelines that cut runtime by <b>95%</b>. At <b>ASU</b>, I'm deploying <b>LLM systems on GCP processing 20K+ weekly</b> and running A/B tests that <b>improved engagement by 7%</b>. When I'm not shipping models, you'll find me writing about data science, mentoring aspiring analysts, or figuring out which ML research actually matters for production.
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