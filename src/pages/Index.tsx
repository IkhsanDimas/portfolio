import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import profilePhoto from "@/assets/123.jpg";
import { ArrowUpRight, MapPin } from "lucide-react";
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

  // Rotating circular badge text
  const badgeText = "AVAILABLE FOR COLLABORATION  •  OPEN TO INTERNSHIP  •  ";

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
            className="mb-8 md:mb-10 flex flex-wrap items-center gap-x-6 gap-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">{t("hero.introEyebrow")}</p>
            <span className="h-px w-10 bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
              </span>
              <span className="uppercase tracking-[0.18em] font-medium">
                {t("hero.status")}
              </span>
            </div>
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
                  {t("hero.headline2")}
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
                  className="group inline-flex items-center gap-2 bg-foreground text-background pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                >
                  {t("hero.viewProjects")}
                  <span className="w-9 h-9 rounded-full bg-background text-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-[0.18em]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-semibold text-foreground">{t("hero.location")}</span>
                </div>
              </div>
            </motion.div>

            {/* Right — profile photo with rotating stamp (5 cols) */}
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

                {/* Rotating circular badge */}
                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 w-20 h-20 md:w-24 md:h-24 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full rotating-badge">
                    <defs>
                      <path
                        id="badge-path"
                        d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text fontSize="9" fontWeight="700" letterSpacing="1" fill="white">
                      <textPath href="#badge-path" startOffset="0">
                        {badgeText}
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-background text-foreground flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>

                {/* Role tag top-right */}
                <div className="absolute top-5 right-5 text-right text-background">
                  <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                    {t("hero.role")}
                  </p>
                  <p className="text-sm font-bold uppercase tracking-[0.12em]">
                    {t("hero.major")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="border-y border-border py-4 md:py-5 overflow-hidden bg-background w-full">
        <div className="marquee">
          <div className="marquee-track whitespace-nowrap display-lg text-2xl md:text-4xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 pr-8">
                <span>{t("marquee.build")}</span>
                <span className="opacity-40">✦</span>
                <span>{t("marquee.design")}</span>
                <span className="opacity-40">✦</span>
                <span>{t("marquee.learn")}</span>
                <span className="opacity-40">✦</span>
                <span>{t("marquee.collaborate")}</span>
                <span className="opacity-40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

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
