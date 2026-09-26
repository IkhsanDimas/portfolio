import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Award, X, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import presentasi1 from "@/assets/Prensetasi1.jpeg";
import sertifikat from "@/assets/sertifikat.jpeg";
import googleCertificate from "@/assets/google-certificate.png";
import sprintcampCertificate from "@/assets/sprintcamp-certificate.png";
import microsoftCertificate from "@/assets/microsoft-certificate.png";
import webPratamaCertificate from "@/assets/pelatihan web pratama.png";

interface CertificateItem {
  id: string;
  titleKey: string;
  descKey: string;
  year: string;
  image: string;
}

const institutionalCertificates: CertificateItem[] = [
  {
    id: "internship",
    titleKey: "experience.certificateTitle",
    descKey: "experience.certificateDesc",
    year: "2026",
    image: sertifikat,
  },
  {
    id: "webpratama",
    titleKey: "experience.webPratamaCertTitle",
    descKey: "experience.webPratamaCertDesc",
    year: "2026",
    image: webPratamaCertificate,
  },
  {
    id: "sprintcamp",
    titleKey: "experience.sprintcampCertTitle",
    descKey: "experience.sprintcampCertDesc",
    year: "2026",
    image: sprintcampCertificate,
  },
];

const globalCertificates: CertificateItem[] = [
  {
    id: "microsoft",
    titleKey: "experience.microsoftCertTitle",
    descKey: "experience.microsoftCertDesc",
    year: "2026",
    image: microsoftCertificate,
  },
  {
    id: "google",
    titleKey: "experience.googleCertTitle",
    descKey: "experience.googleCertDesc",
    year: "2026",
    image: googleCertificate,
  },
];

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedCert(null);
  }, []);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedCert, closeLightbox]);

  const renderCertificateCard = (cert: CertificateItem, index: number) => (
    <motion.div
      key={cert.id}
      className="border border-border rounded-xl p-4 md:p-5 bg-card/60 space-y-3 hover:border-foreground/30 transition-all duration-200 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="space-y-3">
        {/* Header: Icon + Title + Year */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-foreground/80" />
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-bold">
              {t(cert.titleKey)}
            </h4>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">{cert.year}</span>
        </div>

        {/* Framed Certificate Preview */}
        <motion.div
          className="relative rounded-lg overflow-hidden cursor-pointer group border border-border bg-foreground/5"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          onClick={() => setSelectedCert(cert)}
        >
          <div className="absolute -inset-[1px] bg-foreground/5 rounded-lg animate-certificate-glow pointer-events-none" />
          <img
            src={cert.image}
            alt={t(cert.titleKey)}
            className="relative w-full h-auto object-contain photo-mono"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground/40">
            <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center shadow-lg">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
          {t(cert.descKey)}
        </p>
      </div>
    </motion.div>
  );

  return (
    <>
      <section id="experience" className="py-24 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {/* ===================== PART 1: INTERNSHIP EXPERIENCE ===================== */}
          <div>
            {/* Section header */}
            <motion.div
              className="mb-16 md:mb-20 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">{t("eyebrow.experience")}</p>
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
                          {t("experience.institutionName")}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 border border-background/20 text-[10px] font-bold uppercase tracking-[0.18em]">
                      <Award className="w-3 h-3" />
                      {t("experience.badge")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Details row: meta + narrative text */}
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
              {/* Meta table */}
              <motion.div
                className="lg:col-span-4 space-y-0 border-t border-border"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                {[
                  { label: t("experience.institution"), value: t("experience.institutionValue") },
                  { label: t("experience.duration"), value: t("experience.durationValue") },
                  { label: t("experience.role"), value: t("experience.roleValue") },
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

              {/* Description narrative */}
              <motion.div
                className="lg:col-span-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {t("experience.p1")}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t("experience.p2")}
                </p>
              </motion.div>
            </div>
          </div>

          {/* ===================== PART 2: INDIVIDUAL CERTIFICATES GRID ===================== */}
          <div id="certificates" className="pt-12 md:pt-16 border-t border-border">
            {/* Header for Certificates */}
            <motion.div
              className="mb-8 md:mb-12 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:col-span-8">
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  {t("experience.certSectionEyebrow")}
                </p>
                <h3 className="display-lg text-[clamp(1.75rem,5vw,3.5rem)]">
                  {t("experience.certSectionTitle")}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("experience.certSectionDesc")}
                </p>
              </div>
            </motion.div>

            {/* Certificates Showcase: 3 Institutional / Training (Top) + 2 Global (Bottom) */}
            <div className="space-y-5 md:space-y-6">
              {/* Row 1: Magang, Web Pratama, Sprint Camp */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {institutionalCertificates.map((cert, index) => renderCertificateCard(cert, index))}
              </div>

              {/* Row 2: Microsoft, Google AI (at the bottom) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {globalCertificates.map((cert, index) => renderCertificateCard(cert, index + 3))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
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
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-all duration-200"
                  onClick={closeLightbox}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <motion.p
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-[11px] uppercase tracking-[0.22em] z-10 hidden sm:block pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {t("experience.pressEsc")}
                </motion.p>

                <motion.div
                  className="relative z-[1] max-w-4xl w-full flex flex-col items-center gap-3"
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.88, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedCert.image}
                    alt={t(selectedCert.titleKey)}
                    className="max-w-[92vw] max-h-[82vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                  />
                  <div className="flex items-center justify-between w-full px-3 py-1 text-white/70 text-xs">
                    <span className="font-bold uppercase tracking-[0.18em]">
                      {t(selectedCert.titleKey)}
                    </span>
                    <span className="font-mono text-[11px] text-white/40">{selectedCert.year}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default ExperienceSection;


