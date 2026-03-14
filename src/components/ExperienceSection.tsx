import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Calendar, Briefcase, Award, Presentation, X } from "lucide-react";
import { useState } from "react";
import presentasi1 from "@/assets/Prensetasi1.jpeg";
import presentasi2 from "@/assets/presentasi 2.jpeg";
import sertifikat from "@/assets/sertifikat.jpeg";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const infoBadges = [
    { icon: Building2, label: t("experience.institution"), value: "Kejaksaan Tinggi Kepulauan Riau" },
    { icon: Calendar, label: t("experience.duration"), value: "12 Jan — 13 Mar 2026" },
    { icon: Briefcase, label: t("experience.role"), value: "Web Developer Intern" },
  ];

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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left - Photo Gallery */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-2xl" />

              <div className="relative space-y-4">
                {/* Main presentation photo */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setLightboxImage(presentasi1)}
                >
                  <img
                    src={presentasi1}
                    alt="Project Presentation at Kejaksaan Tinggi"
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90">
                      <Presentation className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("experience.photoCaption1")}</span>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                      {t("experience.clickToZoom")}
                    </span>
                  </div>
                </motion.div>

                {/* Second presentation photo */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setLightboxImage(presentasi2)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={presentasi2}
                    alt="Presenting DASKRIMTI System Demo"
                    className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90">
                      <Presentation className="w-4 h-4" />
                      <span className="text-sm font-medium">{t("experience.photoCaption2")}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                      {t("experience.clickToZoom")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Info + Certificate */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("experience.p1")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t("experience.p2")}
                </p>
              </div>

              {/* Info Badges */}
              <div className="space-y-3">
                {infoBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card-elevated hover:border-primary/30 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <badge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{badge.label}</p>
                      <p className="text-sm font-semibold">{badge.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold text-lg">{t("experience.certificateTitle")}</h3>
                </div>
                <motion.div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group certificate-frame"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setLightboxImage(sertifikat)}
                >
                  {/* Golden glow border */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400/60 via-yellow-500/40 to-amber-600/60 rounded-2xl animate-certificate-glow" />
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={sertifikat}
                      alt="Sertifikat Magang - Kejaksaan Tinggi Kepulauan Riau"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                        {t("experience.clickToZoom")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </motion.button>
          <motion.img
            src={lightboxImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default ExperienceSection;
