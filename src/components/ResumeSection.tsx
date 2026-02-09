import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";

const resumes = [
  {
    id: "traditional-ds",
    label: "Traditional DS",
    title: "Traditional Data Scientist",
    pdf: "/resumes/traditional-ds.pdf",
    description: "Classic data science role focusing on statistical analysis, hypothesis testing, A/B experiments, and data-driven decision making.",
    highlights: [
      "Statistical modeling & hypothesis testing",
      "A/B experimentation & causal inference",
      "Data visualization & storytelling",
      "SQL, Python, R, Tableau",
      "Cross-functional stakeholder communication",
    ],
  },
  {
    id: "product-ds",
    label: "Product DS",
    title: "Product Data Scientist",
    pdf: "/resumes/product-ds.pdf",
    description: "Product-focused data science emphasizing user behavior analytics, growth metrics, and product experimentation.",
    highlights: [
      "Product analytics & funnel optimization",
      "Growth metrics & KPI frameworks",
      "User segmentation & cohort analysis",
      "Experimentation platforms & feature flags",
      "Product strategy & roadmap influence",
    ],
  },
  {
    id: "ml-engineer",
    label: "ML Engineer",
    title: "Machine Learning Engineer",
    pdf: "/resumes/ml-engineer.pdf",
    description: "Engineering-heavy role focused on building, deploying, and scaling ML systems in production environments.",
    highlights: [
      "End-to-end ML pipeline development",
      "Model deployment & MLOps (Docker, K8s)",
      "Feature engineering & feature stores",
      "Real-time inference & model monitoring",
      "Python, TensorFlow, PyTorch, Spark",
    ],
  },
  {
    id: "credit-risk-ds",
    label: "Credit Risk DS",
    title: "Credit Risk Data Scientist",
    pdf: "/resumes/credit-risk-ds.pdf",
    description: "Domain-specialized role in financial risk modeling, credit scoring, and regulatory compliance analytics.",
    highlights: [
      "Credit scoring & PD/LGD/EAD models",
      "Regulatory frameworks (Basel, IFRS 9)",
      "Scorecard development & validation",
      "Portfolio risk analytics & stress testing",
      "SAS, Python, SQL, risk dashboards",
    ],
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-light text-foreground font-display text-sm font-medium mb-4">
            Résumés
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            One Skeptic, <span className="text-gradient">Four Fits</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Different roles need different stories. Pick the version that matches what you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="traditional-ds" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8 justify-center">
              {resumes.map((r) => (
                <TabsTrigger
                  key={r.id}
                  value={r.id}
                  className="rounded-full px-5 py-2.5 font-display text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none bg-card border border-border"
                >
                  {r.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {resumes.map((r) => (
              <TabsContent key={r.id} value={r.id}>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-xl md:text-2xl font-display font-bold">
                          {r.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-body max-w-xl">
                        {r.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                    {/* View in new tab */}
                    <a
                        href={r.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background font-display text-sm font-medium hover:bg-muted transition-colors"
                    >
                        <FileText className="w-4 h-4" />
                        View
                    </a>

                    {/* Download */}
                    <a
                        href={r.pdf}
                        download
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-display text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Key Highlights
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {r.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground font-body text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
