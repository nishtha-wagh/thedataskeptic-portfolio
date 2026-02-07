import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract data visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-coral-light text-coral font-display text-sm font-medium mb-6">
                Data Scientist · ML Engineer · Storyteller
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              The{" "}
              <span className="text-gradient">Mis.fit</span>
              <br />
              Data Scientist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 font-body"
            >
              Turning unconventional thinking into data-driven impact. 
              3+ years of breaking patterns, building models, and making 
              sense of the beautiful chaos in data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card text-foreground font-display font-medium text-sm hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-pastel-gradient animate-float" />
              <div className="absolute top-8 -right-8 w-32 h-32 rounded-2xl bg-mint-light border border-border flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="font-display text-3xl font-bold text-foreground">3+</span>
                <span className="text-xs text-muted-foreground ml-1">yrs</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-2xl bg-lavender-light border border-border flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <span className="font-display text-2xl font-bold text-foreground">ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;