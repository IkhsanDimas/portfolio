import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Award, X, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import presentasi1 from "@/assets/Prensetasi1.jpeg";
import sertifikat from "@/assets/sertifikat.jpeg";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage, closeLightbox]);

  return (
    <>
      <section id="experience" className="py-24 px-6 mesh-gradient-2 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t("experience.label")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t("experience.title")} <span className="gradient-text">{t("experience.subtitle")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {t("experience.description")}
            </p>
          </motion.div>

          {/* Main Content — 2 column layout */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Left Column (3/5) — Presentation Photo + Description */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Presentation Photo */}
              <div className="relative group">
                {/* Subtle glow behind image */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={() => setLightboxImage(presentasi1)}
                >
                  <img
                    src={presentasi1}
                    alt="Project Presentation at Kejaksaan Tinggi Kepulauan Riau"
                    className="w-full h-72 sm:h-80 md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-white/90 font-semibold text-base md:text-lg">
                      {t("experience.photoCaption1")}
                    </p>
                    <p className="text-white/60 text-sm mt-1">
                      Kejaksaan Tinggi Kepulauan Riau
                    </p>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Description text */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("experience.p1")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("experience.p2")}
                </p>
              </div>

              {/* Institution badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass-card-elevated hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{t("experience.institution")}</p>
                  <p className="text-sm font-semibold">Kejaksaan Tinggi Kepulauan Riau</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column (2/5) — Certificate */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="lg:sticky lg:top-24 space-y-4">
                {/* Certificate heading */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/15 to-yellow-500/15 flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-semibold">{t("experience.certificateTitle")}</h3>
                </div>

                {/* Certificate image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setLightboxImage(sertifikat)}
                >
                  {/* Golden border glow */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400/50 via-yellow-500/30 to-amber-600/50 rounded-2xl animate-certificate-glow" />
                  <div className="relative rounded-2xl overflow-hidden bg-background">
                    <img
                      src={sertifikat}
                      alt="Sertifikat Magang — Kejaksaan Tinggi Kepulauan Riau"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Hover overlay with zoom icon */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Certificate details */}
                <div className="text-center px-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("experience.certificateDesc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/92 backdrop-blur-lg"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Close button — always visible */}
            <motion.button
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200 group"
              onClick={closeLightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Hint text */}
            <motion.p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("experience.pressEsc")}
            </motion.p>

            {/* Image */}
            <motion.img
              src={lightboxImage}
              alt="Zoomed view"
              className="relative z-[1] max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl cursor-default"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
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
