import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import profilePhoto from "@/assets/Profil-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, MapPin, Sparkles, Github, Linkedin, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const Index = () => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative z-10 px-6 pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card-elevated"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">{t("hero.status")}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t("hero.greeting")}
                </motion.p>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="gradient-text">{t("hero.name")}</span>
                </motion.h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t("hero.student")} <span className="text-foreground font-semibold">{t("hero.major")}</span> {t("hero.description")}
              </motion.p>

              {/* Tagline */}
              <motion.p
                className="text-sm text-muted-foreground/60 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                "{t("hero.tagline")}"
              </motion.p>

              {/* Location */}
              <motion.div
                className="flex items-center gap-2 text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t("hero.location")}</span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/20 transition-all duration-300 rounded-xl px-8"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t("hero.viewProjects")}
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl px-8"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("hero.contactMe")}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">Follow</span>
                <div className="w-8 h-[1px] bg-border" />
                {[
                  { icon: Github, url: "https://github.com/IkhsanDimas", label: "GitHub" },
                  { icon: Linkedin, url: "https://linkedin.com/in/ikhsan-dimastianto", label: "LinkedIn" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right - Profile Photo */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-4 text-primary/15 font-mono text-6xl font-bold select-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {'</>'}
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-accent/10 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Floating code snippet */}
              <motion.div
                className="absolute -top-4 -left-8 lg:-left-12 hidden md:block glass-card-elevated rounded-xl px-4 py-3 text-xs font-mono text-muted-foreground"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-primary">const</span> developer <span className="text-primary">=</span> <span className="text-accent">"passionate"</span>;
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-4 lg:-right-8 hidden md:block glass-card-elevated rounded-xl px-4 py-3 text-xs font-mono text-muted-foreground"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-green-500">✓</span> Build. Deploy. Repeat.
              </motion.div>

              {/* Photo container */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-xl opacity-60 animate-pulse-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-2 ring-white/20 dark:ring-white/10 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Ikhsan Dimastianto"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 25%' }}
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <CTASection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
