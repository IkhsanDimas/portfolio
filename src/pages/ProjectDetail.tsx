import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/ProjectsSection";
import OptimizedImage from "@/components/OptimizedImage";
import ParallaxBackground from "@/components/ParallaxBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = project?.images || (project ? [project.image] : []);

  useEffect(() => {
    if (projectImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectImages.length]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container px-4 md:px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#projects">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Project header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Project images carousel */}
          <motion.div
            className="glass-card rounded-2xl overflow-hidden mb-12 aspect-video relative"
            initial={{ opacity: 0, y: 30 }}
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
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center hover:bg-background/90 transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Navigation dots */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImageIndex
                        ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                        : "bg-white/50 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            )}
          </motion.div>


          <div className="grid lg:grid-cols-3 gap-8">
            {/* Features */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Fitur Utama
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Tech stack */}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-display text-lg font-semibold mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm rounded-lg bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
