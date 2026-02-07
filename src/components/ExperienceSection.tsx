import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Senior Data Scientist",
    company: "TechCorp Analytics",
    period: "2023 – Present",
    description:
      "Leading ML initiatives for customer churn prediction and recommendation systems. Reduced churn by 18% through ensemble modeling approaches.",
    tags: ["Python", "TensorFlow", "AWS", "Spark"],
  },
  {
    role: "Data Scientist",
    company: "DataDriven Inc.",
    period: "2021 – 2023",
    description:
      "Built NLP pipelines for sentiment analysis across 50M+ social media posts. Developed real-time dashboards for executive decision-making.",
    tags: ["NLP", "PyTorch", "SQL", "Tableau"],
  },
  {
    role: "Junior Data Analyst",
    company: "StartupHub",
    period: "2020 – 2021",
    description:
      "Performed A/B testing and statistical analysis to optimize conversion funnels. Automated reporting pipelines saving 20+ hours weekly.",
    tags: ["R", "Python", "PostgreSQL", "Excel"],
  },
];

const education = [
  {
    degree: "M.S. in Data Science",
    school: "University of Innovation",
    period: "2019 – 2021",
    detail: "Thesis: \"Adversarial Robustness in Federated Learning Systems\"",
  },
  {
    degree: "B.S. in Statistics & Computer Science",
    school: "State University",
    period: "2015 – 2019",
    detail: "Summa Cum Laude · Dean's List all semesters",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Experience & Education
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            The <span className="text-gradient">journey</span> so far.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Experience */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={20} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Work Experience</h3>
            </div>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-border pb-6 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <span className="text-xs font-display font-medium text-primary">
                  {exp.period}
                </span>
                <h4 className="font-display text-lg font-semibold mt-1">{exp.role}</h4>
                <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-display font-medium bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-xs font-display font-medium text-accent">
                  {edu.period}
                </span>
                <h4 className="font-display text-base font-semibold mt-1">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs text-muted-foreground mt-2 italic">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;