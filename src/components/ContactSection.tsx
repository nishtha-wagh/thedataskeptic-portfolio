import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nishthawagh99/" },
  { icon: Github, label: "GitHub", href: "https://github.com/nishtha-wagh" },
  { icon: Mail, label: "Email", href: "mailto:nishtha.wagh.1999@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-pastel-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Got a <br></br><span className="text-gradient">skeptical</span> idea?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-lg mx-auto">
            Whether it's a collaboration, a question, or just a chat about data; I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-sm text-muted-foreground font-display"
        >
          © 2026 The Data Skeptic. Breaking patterns, one dataset at a time.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;