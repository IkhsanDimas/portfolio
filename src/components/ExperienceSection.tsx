import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Award, X, ZoomIn } from "lucide-react";
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
      <section id="experience" className="py-24 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-16 md:mb-20 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:col-span-8">
              <p className="eyebrow mb-4">(02) &mdash; Experience</p>
              <h2 className="display-lg text-[clamp(2rem,7vw,5rem)]">
                {t("experience.title")} {t("experience.subtitle")}
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("experience.description")}
              </p>
            </div>
          </motion.div>

          {/* Presentation photo — full width */}
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-foreground">
              <img
                src={presentasi1}
                alt="Presenting DASKRIMTI project at Kejaksaan Tinggi Kepulauan Riau"
                className="w-full h-auto object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent pt-24 pb-5 md:pb-7 px-5 md:px-8 text-background">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] opacity-70 mb-1">
                      {t("experience.photoCaption1")}
                    </p>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="text-sm font-semibold">
                        Kejaksaan Tinggi Kepulauan Riau
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 border border-background/20 text-[10px] font-bold uppercase tracking-[0.18em]">
                    <Award className="w-3 h-3" />
                    Kerja Praktik 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details row: meta + text + certificate */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Meta table */}
            <motion.div
              className="lg:col-span-3 space-y-0 border-t border-border"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {[
                { label: t("experience.institution"), value: "Kejaksaan Tinggi Kepri" },
                { label: t("experience.duration"), value: "Jan 2026 — Mar 2026" },
                { label: t("experience.role"), value: "Web Developer Intern" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border py-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-display font-bold uppercase text-sm tracking-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              className="lg:col-span-5 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed">{t("experience.p1")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("experience.p2")}
              </p>
            </motion.div>

            {/* Certificate */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="border border-border rounded-xl p-4 md:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <h3 className="text-[11px] uppercase tracking-[0.22em] font-bold">
                      {t("experience.certificateTitle")}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">2026</span>
                </div>

                <motion.div
                  className="relative rounded-lg overflow-hidden cursor-pointer group border border-border"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={openCertificate}
                >
                  <div className="absolute -inset-[1px] bg-foreground/5 rounded-lg animate-certificate-glow pointer-events-none" />
                  <img
                    src={sertifikat}
                    alt="Sertifikat Magang"
                    className="relative w-full h-auto object-contain photo-mono"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground/40">
                    <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {t("experience.certificateDesc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/92 backdrop-blur-lg cursor-pointer"
              onClick={closeLightbox}
            />

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

            <motion.p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-[11px] uppercase tracking-[0.22em] z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t("experience.pressEsc")}
            </motion.p>

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
