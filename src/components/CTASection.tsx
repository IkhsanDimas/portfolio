import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { language } = useLanguage();

  const handleDownloadCV = () => {
    // Link ke CV Anda (bisa Google Drive atau file lokal)
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
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/ikhsan-dimastianto",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === "id" ? "Mari Bekerja Sama!" : "Let's Work Together!"}
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === "id"
              ? "Saya terbuka untuk peluang freelance, magang, atau kolaborasi proyek. Mari diskusikan ide Anda!"
              : "I'm open to freelance opportunities, internships, or project collaborations. Let's discuss your ideas!"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {language === "id" ? "Download CV" : "Download Resume"}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === "id" ? "Chat via WhatsApp" : "Chat on WhatsApp"}
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
            <span className="text-sm text-muted-foreground">
              {language === "id" ? "Atau hubungi saya di:" : "Or connect with me on:"}
            </span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
