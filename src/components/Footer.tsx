import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Github, url: "https://github.com/IkhsanDimas", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/ikhsan-dimastianto", label: "LinkedIn" },
    { icon: Mail, url: "mailto:ikhsandimastianto@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: t("footer.linkAbout"), href: "#about" },
    { label: t("footer.linkExperience"), href: "#experience" },
    { label: t("footer.linkSkills"), href: "#skills" },
    { label: t("footer.linkProjects"), href: "#projects" },
    { label: t("footer.linkContact"), href: "#contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top row */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-border">
          {/* Brand */}
          <motion.div
            className="md:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-md border border-foreground flex items-center justify-center font-display font-bold text-sm">
                ID
              </span>
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-[0.14em]">
                  Ikhsan Dimastianto
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t("footer.subtitle")}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {t("footer.navigate")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    } else {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-display font-semibold hover:italic hover:underline underline-offset-4 decoration-2 w-fit transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="md:col-span-4 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {t("footer.connect")}
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              {t("footer.backToTop")}
            </button>
          </motion.div>
        </div>

        {/* Signature line */}
        <div className="py-8 md:py-12 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>

        <div
          className="display-xl text-[clamp(1.5rem,8vw,12rem)] leading-[0.8] border-t border-border pt-8 text-center select-none overflow-hidden opacity-10"
          style={{ WebkitTextStroke: "1px hsl(var(--foreground))", color: "transparent" }}
          aria-hidden
        >
          IKHSAN DIMASTIANTO
        </div>
      </div>
    </footer>
  );
};

export default Footer;
