import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/components/ProjectsSection";
import OptimizedImage from "@/components/OptimizedImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const projectImages = project?.images || (project ? [project.image] : []);

  useEffect(() => {
    if (projectImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <main className="relative z-10 pt-28 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("projectDetail.back")}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-12 md:mb-16 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="md:col-span-8">
              <p className="eyebrow mb-4">
                {t(`project.${project.id}.category`) || t("projectDetail.category")} &middot; {project.year || ""}
              </p>
              <h1 className="display-lg text-[clamp(2rem,7vw,5rem)] mb-4">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t(`project.${project.id}.fullDescription`)}
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="rounded-xl overflow-hidden mb-12 md:mb-16 aspect-video relative bg-foreground border border-border"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <OptimizedImage
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full"
                  loading="eager"
                  priority
                  objectFit="contain"
                />
              </motion.div>
            </AnimatePresence>

            {projectImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + projectImages.length) % projectImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {projectImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-background w-6" : "bg-background/50 w-1.5"
                      }`}
                      aria-label={`Image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            {/* Features */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="eyebrow mb-6">{t("projectDetail.keyFeatures")}</p>
              <h2 className="display-lg text-3xl md:text-4xl mb-8">
                {t("projectDetail.whatsInside")}
              </h2>
              <div className="grid md:grid-cols-2 gap-0 border-t border-border">
                {project.features.map((_, idx) => (
                  <div
                    key={idx}
                    className="border-b border-border py-4 pr-4 flex items-start gap-3 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-6"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" strokeWidth={2} />
                    <span className="text-sm leading-relaxed">{t(`project.${project.id}.feature.${idx}`)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 h-fit"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Meta */}
              <div className="border border-border rounded-xl p-5 md:p-6 space-y-4">
                <p className="eyebrow">{t("projectDetail.meta")}</p>
                <div className="space-y-3">
                  {[
                    { label: t("projectDetail.year"), value: project.year || "—" },
                    { label: t("projectDetail.category"), value: t(`project.${project.id}.category`) || "—" },
                    { label: t("projectDetail.role"), value: t("projectDetail.role") },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm font-display font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="border border-border rounded-xl p-5 md:p-6 space-y-4">
                <p className="eyebrow">{t("projectDetail.techStack")}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border border-border rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-foreground text-background rounded-full pl-5 pr-1.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                    >
                      {t("projectDetail.visitLive")}
                      <span className="w-9 h-9 rounded-full bg-background text-foreground flex items-center justify-center">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-border rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                    >
                      {t("projectDetail.github")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
