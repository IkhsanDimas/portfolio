import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    window.open("#", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6283165359785?text=Halo%20Ikhsan!%20Saya%20tertarik%20dengan%20portfolio%20Anda.", "_blank");
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/IkhsanDimas",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/ikhsan-dimastianto",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient card background */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                  radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                  radial-gradient(circle at 50% 80%, white 1px, transparent 1px)`,
                backgroundSize: '60px 60px, 80px 80px, 40px 40px',
              }}
            />

            {/* Floating decorations */}
            <motion.div
              className="absolute top-6 right-8 w-20 h-20 rounded-full border border-white/10"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-8 left-12 w-14 h-14 rounded-full border border-white/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 text-white/5 text-7xl font-bold font-mono select-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {'</>'}
            </motion.div>

            <div className="relative p-8 md:p-12 lg:p-16 text-center text-white">
              <motion.h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t("cta.title")}
              </motion.h2>

              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("cta.description")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={handleDownloadCV}
                    className="bg-white text-primary hover:bg-white/90 shadow-xl rounded-xl px-8 font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t("cta.downloadCV")}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl px-8 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t("cta.chatWhatsApp")}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-sm text-white/50">
                  {t("cta.connectOn")}
                </span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
