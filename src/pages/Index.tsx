import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import profilePhoto from "@/assets/profil.jpeg";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const Index = () => {
  const { t, language } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = "Ikhsan Dimastianto | Portfolio";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t("footer.description"));
  }, [language, t]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar />

      {/* ========================== HERO ========================== */}
      <section className="relative z-10 pt-28 md:pt-32 pb-10 md:pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top row: eyebrow */}
          <motion.div
            className="mb-8 md:mb-10 flex flex-wrap items-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">{t("hero.introEyebrow")}</p>
            <span className="accent-chip">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "hsl(var(--highlight))" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "hsl(var(--highlight))" }} />
              </span>
              {t("hero.status")}
            </span>
          </motion.div>

          {/* Main editorial grid */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Left — huge headline (7 cols) */}
            <motion.div
              className="md:col-span-7 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div>
                <h1 className="display-xl text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] mb-6 md:mb-8">
                  {t("hero.headline1")}
                  <br />
                  <span style={{ WebkitTextStroke: "1px hsl(var(--foreground))", color: "transparent" }}>
                    {t("hero.headline2")}
                  </span>
                  <br />
                  {t("hero.headline3")}
                </h1>

                <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t("hero.description")}
                </p>
              </div>

              {/* Bottom CTA row */}
              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6">
                <button
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                  style={{ background: 'hsl(var(--highlight))', color: 'hsl(var(--highlight-foreground))' }}
                >
                  {t("hero.viewProjects")}
                  <span className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right — profile photo (5 cols) */}
            <motion.div
              className="md:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[380px] rounded-2xl overflow-hidden bg-foreground">
                <img
                  src={profilePhoto}
                  alt="Ikhsan Dimastianto"
                  className="absolute inset-0 w-full h-full object-cover photo-mono"
                  style={{ objectPosition: "50% 25%" }}
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />

                {/* Role tag top-right */}
                <div className="absolute top-5 right-5 text-right text-white">
                  <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                    {t("hero.basedIn")}
                  </p>
                  <p className="text-sm font-bold uppercase tracking-[0.12em]">
                    Tanjungpinang, ID
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="relative z-10">
        <AboutSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
