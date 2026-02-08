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
                Data Scientist · ML Engineer · Analytics Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              The{" "}
              <span className="text-gradient">Data Skeptic</span>            
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 font-body"
            >
              Hello there!
              I'm Nishtha. I stumbled into data science and discovered I'm weirdly good at the messy parts: unclear requirements, stakeholders who don't know what they need, and systems that actually ship to production.
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
    {/* Main anchor */}
    <div className="w-72 h-72 rounded-full bg-pastel-gradient animate-float" />

    {/* Systems Thinking — top left */}
    <div
      className="absolute top-[20px] left-[20px] px-4 py-2.5 rounded-2xl bg-cream border border-border animate-float"
      style={{ animationDelay: "0.8s" }}
    >
      <span className="font-display text-sm font-semibold text-foreground">
        Systems Thinking
      </span>
    </div>

    {/* Product Experimentation — top right */}
    <div
      className="absolute top-[20px] right-[20px] px-4 py-2.5 rounded-2xl bg-mint-light border border-border animate-float"
      style={{ animationDelay: "1.4s" }}
    >
      <span className="font-display text-sm font-semibold text-foreground">
        Product Experimentation
      </span>
    </div>

    {/* 4+ Years in Production — center right */}
    <div
      className="absolute top-1/2 -translate-y-1/2 right-[10px] px-4 py-2.5 rounded-2xl bg-coral-light border border-border animate-float"
      style={{ animationDelay: "2s" }}
    >
      <span className="font-display text-sm font-semibold text-foreground whitespace-nowrap">
        4+ Years in Production
      </span>
    </div>

    {/* LLM · Credit Risk — bottom right */}
    <div
      className="absolute bottom-[20px] right-[20px] px-4 py-2.5 rounded-2xl bg-peach-light border border-border animate-float"
      style={{ animationDelay: "2.6s" }}
    >
      <span className="font-display text-sm font-semibold text-foreground">
        LLM · Credit Risk
      </span>
    </div>

    {/* AWS · GCP · Azure — bottom left */}
    <div
      className="absolute bottom-[20px] left-[20px] px-4 py-2.5 rounded-2xl bg-lavender-light border border-border animate-float"
      style={{ animationDelay: "3.2s" }}
    >
      <span className="font-display text-sm font-semibold text-foreground">
        AWS · GCP · Azure
      </span>
    </div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;