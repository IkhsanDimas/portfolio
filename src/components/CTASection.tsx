import { motion } from "framer-motion";
import { MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6283165359785?text=Halo%20Ikhsan!%20Saya%20tertarik%20dengan%20portfolio%20Anda.",
      "_blank"
    );
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/IkhsanDimas" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ikhsan-dimastianto" },
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-foreground text-background p-8 md:p-16 lg:p-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Grid overlay pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--background)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--background)) 1px, transparent 1px)
              `,
              backgroundSize: "56px 56px",
            }}
          />

          {/* Label */}
          <div className="relative flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-background" />
            </span>
            <p className="text-[11px] uppercase tracking-[0.22em] font-semibold opacity-80">
              {t("cta.eyebrow")}
            </p>
          </div>

          {/* Headline */}
          <motion.h2
            className="relative display-xl text-[clamp(3rem,10vw,8rem)] leading-[0.92] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("cta.headline1")}
            <br />
            <span className="italic font-light" style={{ fontFamily: "serif" }}>
              {t("cta.headline2")}
            </span>
          </motion.h2>

          <motion.p
            className="relative max-w-xl text-background/70 text-sm md:text-base leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("cta.description")}
          </motion.p>

          {/* Actions */}
          <motion.div
            className="relative flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={handleWhatsApp}
              className="group inline-flex items-center gap-2 bg-background text-foreground pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              {t("cta.chatWhatsApp")}
              <span className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </span>
            </button>

            <div className="flex items-center gap-2 sm:ml-auto">
              <span className="text-[10px] uppercase tracking-[0.22em] opacity-60">
                {t("cta.connectOn")}
              </span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground hover:border-background transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
