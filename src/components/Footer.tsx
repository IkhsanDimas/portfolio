import { Code, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/IkhsanDimas", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/ikhsan-dimastianto", label: "LinkedIn" },
    { icon: Mail, url: "mailto:ikhsandimastianto@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border/50">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold gradient-text">Ikhsan Dimastianto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Web Developer passionate about building creative digital solutions and impactful web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="w-4 h-4 text-primary" />
            <span>© {currentYear} Ikhsan Dimastianto</span>
          </div>
          <p className="text-xs text-muted-foreground/60">
            Crafted with passion & coffee ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
