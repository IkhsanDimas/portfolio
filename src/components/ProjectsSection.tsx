import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ExternalLink, Github as GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import OptimizedImage from "@/components/OptimizedImage";
import projectChatbot from "@/assets/project-chatbot.jpeg";
import projectOtaku from "@/assets/project-otaku.png";
import projectPortal from "@/assets/portal.jpeg";
import projectPanel from "@/assets/panel.jpeg";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "daskrimti",
    title: "DASKRIMTI",
    description: "Dashboard Kriminalitas Terpadu untuk Kejaksaan Tinggi Kepulauan Riau. Sistem terintegrasi yang mencakup CMS pengelolaan data perkara pidana umum (8 halaman), dashboard absensi pegawai berbasis mobile dengan admin panel untuk upload data Excel, serta portal login terpusat.",
    fullDescription: "DASKRIMTI (Dashboard Kriminalitas Terpadu) adalah sistem informasi terintegrasi yang dibangun khusus untuk Kejaksaan Tinggi Kepulauan Riau. Sistem ini terdiri dari 3 komponen utama: (1) CMS Dashboard Pidana Umum — mengelola data 8 tahap perkara mulai dari Pra-Penuntutan, Penuntutan, Upaya Hukum, Eksekusi, Barang Bukti, Tindak Pidana Umum, Tindak Pidana Khusus, hingga Perdata & Tata Usaha Negara, dengan fitur grafik interaktif, filter dinamis, dan sinkronisasi data ke Supabase. (2) Dashboard Absensi Mobile — menampilkan data kehadiran 9 bidang kerja dengan visualisasi treemap, bar chart, dan donut chart, dilengkapi Admin Panel yang mampu membaca file Excel secara cerdas (smart parsing) dengan pengenalan alias nama sheet dan deteksi format otomatis. (3) Portal Login Terpusat — sebagai gerbang akses ke seluruh modul. Seluruh data tersinkronisasi secara realtime dengan Supabase sebagai backend.",
    tags: ["HTML", "CSS", "JavaScript", "Supabase", "Chart.js", "SheetJS"],
    features: [
      "CMS 8 Halaman Perkara - Mengelola data Pra-Penuntutan, Penuntutan, Upaya Hukum, Eksekusi, Barang Bukti, dan lainnya",
      "Grafik Interaktif - Bar chart, line chart, treemap, dan donut chart menggunakan Chart.js",
      "Smart Excel Parser - Admin panel yang membaca file Excel secara cerdas dengan deteksi format otomatis dan alias nama sheet",
      "Sinkronisasi Realtime - Data tersimpan dan tersinkronisasi ke Supabase secara otomatis",
      "Dashboard Absensi 9 Bidang - Visualisasi kehadiran untuk Pembinaan, Intelijen, Pidum, Pidsus, Datun, Pengawasan, TU, Koordinator, dan Pemulihan Aset",
      "Filter Dinamis - Filter berdasarkan tahun, bulan, dan halaman dengan URL parameter",
      "Responsive Design - Tampilan optimal di desktop dan mobile untuk dashboard absensi",
      "Portal Login Terpusat - Satu titik akses ke seluruh modul dashboard",
      "Manajemen Data Upload - Mode Replace & Append untuk upload data absensi dengan validasi otomatis",
      "Arsip File Excel - File Excel yang diunggah diarsipkan di Supabase Storage untuk referensi",
    ],
    image: projectPortal,
    images: [projectPortal, projectPanel],
  },
  {
    id: "nega-chatbot",
    title: "Nega Chatbot AI",
    description: "Asisten virtual AI yang membantu berbagai tugas melalui percakapan interaktif, analisis dokumen, kolaborasi grup, dan fitur produktivitas.",
    fullDescription: "Nega Chatbot AI adalah asisten virtual berbasis AI yang dibangun dengan teknologi modern. Powered by Gemini 2.5 Flash, chatbot ini dirancang untuk membantu pengguna dalam berbagai tugas melalui percakapan interaktif, analisis dokumen PDF & gambar, kolaborasi dalam grup chat, serta fitur produktivitas seperti voice input dan edit pesan.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Gemini AI"],
    features: [
      "Chat Realtime - Interaksi tanya jawab dengan AI yang cepat dan responsif",
      "Voice Typing - Fitur dikte suara (Speech-to-Text) untuk mengetik tanpa keyboard",
      "Upload Dokumen & Gambar - Mampu membaca dan menganalisis file PDF serta gambar",
      "Smart Edit - Edit pesan yang sudah terkirim, AI akan regenerasi jawaban baru",
      "Manajemen Chat - Sidebar dengan riwayat percakapan & fitur hapus chat",
      "Group Chat - Fitur grup diskusi dengan anggota lain",
      "Share Chat - Bagikan percakapan ke grup atau orang lain",
      "Reply to Message - Fitur balas pesan tertentu dalam grup",
      "Status Akun - Indikator visual untuk pengguna Free vs Pro",
      "Autentikasi OTP - Login aman menggunakan OTP via Supabase",
    ],
    image: projectChatbot,
    liveUrl: "https://nega-chatbot.vercel.app",
  },
  {
    id: "otaku-asah-otak",
    title: "Otaku Asah Otak",
    description: "Game puzzle asah otak berbasis web dengan 20+ level yang menantang logika dan kreativitas pemain. Setiap level memiliki tipe gameplay yang berbeda seperti pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, dan input teks.",
    fullDescription: "Otaku Asah Otak adalah game puzzle berbasis web yang dirancang untuk mengasah kemampuan berpikir logis dan kreativitas. Dengan lebih dari 20 level yang menantang, game ini menawarkan berbagai tipe gameplay mulai dari pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, hingga input teks. Game ini dilengkapi dengan sistem penyimpanan progres otomatis menggunakan LocalStorage, sistem rating bintang untuk setiap level, dan fitur hint untuk membantu pemain menyelesaikan level yang sulit. Dibangun sebagai Progressive Web App (PWA), game ini dapat diinstal di perangkat dan dimainkan secara offline.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "PWA"],
    features: [
      "20+ Level Puzzle - Berbagai tipe teka-teki yang menantang logika dan kreativitas",
      "Gameplay Beragam - Pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, dan input teks",
      "Auto Save Progress - Progres game tersimpan otomatis menggunakan LocalStorage",
      "Star Rating System - Sistem penilaian bintang untuk setiap level yang diselesaikan",
      "Hint System - Fitur bantuan untuk level yang sulit",
      "Visual Effects - Efek konfeti menggunakan React Confetti untuk perayaan kemenangan",
      "Responsive Design - Tampilan optimal di berbagai ukuran layar dengan Tailwind CSS",
      "Progressive Web App - Dapat diinstal di perangkat dan dimainkan offline",
      "Icon Library - Menggunakan React Icons untuk UI yang menarik",
      "Deployed on Netlify - Hosting cepat dan reliable",
    ],
    image: projectOtaku,
    liveUrl: "https://otaku-asah-otak.netlify.app",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredProject = projects[0];
  const featuredImages = featuredProject?.images || [featuredProject?.image];

  useEffect(() => {
    if (featuredImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredImages.length]);

  return (
    <section id="projects" className="py-24 relative mesh-gradient-1">
      <div className="container px-4 md:px-6">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t("projects.description")}
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured project (first) - full width */}
          {projects.slice(0, 1).map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card-elevated rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="grid md:grid-cols-2">
                {/* Project image - left side */}
                <div className="h-64 md:h-full relative overflow-hidden">
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
                        src={featuredImages[currentImageIndex]}
                        alt={`${project.title} - ${currentImageIndex + 1}`}
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />

                  {/* Project number + Featured badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-5xl font-bold text-white/10 font-mono select-none">01</span>
                  </div>
                  <div className="absolute top-4 right-4 md:right-auto md:left-20 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold shadow-lg">
                    Featured
                  </div>

                  {/* Image navigation dots */}
                  {featuredImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {featuredImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                              ? "bg-white scale-125 shadow-lg"
                              : "bg-white/40 hover:bg-white/70"
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project content - right side */}
                <div className="p-8 space-y-4 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Dashboard Kriminalitas Terpadu — Kejaksaan Tinggi Kepulauan Riau
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Link to={`/project/${project.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {t("projects.viewDetail")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other projects - 2 column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card-elevated rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Project image */}
                <div className="h-48 relative overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Project number */}
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl font-bold text-white/10 font-mono select-none">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl text-sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("projects.liveDemo")}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full rounded-xl text-sm">
                          <GithubIcon className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>

                  <Link to={`/project/${project.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full mt-2 group/btn hover:bg-primary/5 rounded-xl"
                    >
                      {t("projects.viewDetail")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
