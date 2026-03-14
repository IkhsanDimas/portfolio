import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Award, X, ZoomIn, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import presentasi1 from "@/assets/Prensetasi1.jpeg";
import sertifikat from "@/assets/sertifikat.jpeg";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openCertificate = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, closeLightbox]);

  return (
    <>
      <section id="experience" className="py-28 px-6 relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card-elevated mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t("experience.label")}
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("experience.title")}{" "}
              <span className="gradient-text">{t("experience.subtitle")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              {t("experience.description")}
            </p>
          </motion.div>

          {/* Presentation Photo — Full Width Showcase */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src={presentasi1}
                  alt="Presenting DASKRIMTI project at Kejaksaan Tinggi Kepulauan Riau"
                  className="w-full h-auto object-contain"
                />

                {/* Subtle bottom gradient for caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-20 pb-6 px-6 md:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                      <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                        {t("experience.photoCaption1")}
                      </h3>
                      <div className="flex items-center gap-2 text-white/70">
                        <Building2 className="w-3.5 h-3.5" />
                        <span className="text-sm">Kejaksaan Tinggi Kepulauan Riau</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Kerja Praktik 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Grid — Description + Certificate side by side */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left — Description & Institution (3/5) */}
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Glass description card */}
              <div className="glass-card-elevated rounded-2xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {t("experience.institution")}
                    </p>
                    <p className="font-semibold">Kejaksaan Tinggi Kepulauan Riau</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

                <p className="text-muted-foreground leading-relaxed">
                  {t("experience.p1")}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("experience.p2")}
                </p>
              </div>
            </motion.div>

            {/* Right — Certificate (2/5) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="glass-card-elevated rounded-2xl p-5 space-y-4">
                {/* Certificate header */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/15 to-yellow-500/15 flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-semibold text-sm">{t("experience.certificateTitle")}</h3>
                </div>

                {/* Certificate image */}
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={openCertificate}
                >
                  {/* Golden glow */}
                  <div className="absolute -inset-[1.5px] bg-gradient-to-br from-amber-400/40 via-yellow-500/25 to-amber-600/40 rounded-xl animate-certificate-glow" />
                  <div className="relative rounded-xl overflow-hidden bg-background">
                    <img
                      src={sertifikat}
                      alt="Sertifikat Magang — Kejaksaan Tinggi Kepulauan Riau"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {/* Hover zoom indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/15">
                      <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Certificate caption */}
                <p className="text-center text-xs text-muted-foreground">
                  {t("experience.certificateDesc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/92 backdrop-blur-lg cursor-pointer"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200"
              onClick={closeLightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Hint */}
            <motion.p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("experience.pressEsc")}
            </motion.p>

            {/* Certificate image */}
            <motion.img
              src={sertifikat}
              alt="Sertifikat Magang"
              className="relative z-[1] max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceSection;
