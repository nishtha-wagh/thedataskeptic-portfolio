import { motion } from "framer-motion";
import { Brain, BarChart3, Cloud, Code2 } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning", color: "bg-coral-light text-coral" },
  { icon: Code2, label: "Python & SQL", color: "bg-mint-light text-mint" },
  { icon: Cloud, label: "AWS & GCP", color: "bg-lavender-light text-lavender" },
  { icon: BarChart3, label: "Experimentation & A/B Testing", color: "bg-peach-light text-peach" },
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
            className="space-y-4 text-muted-foreground font-body leading-relaxed text-base"
          >
            <p>
  I'm a <b>Senior Data Scientist with 4+ years</b> building production ML systems from messy, ambiguous problems to deployed solutions driving real decisions. My experience spans <b>credit risk modeling, LLM pipelines, and experimentation</b>, working across the full lifecycle from feature engineering to monitoring systems at scale.
</p>

<p>
  At <b>Amazon</b>, I built credit risk models on <b>AWS serving 500K+ daily decisions</b> and optimized pipelines that cut runtime by <b>95%</b>. At <b>ASU</b>, I'm deploying <b>LLM systems on GCP processing 20K+ weekly</b> and running A/B tests that <b>improved engagement by 7%</b>. My approach: question the defaults, validate with data, and build systems designed for production.
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
                <skill.icon size={40} />
                <span className="font-display text-base font-semibold text-foreground">
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