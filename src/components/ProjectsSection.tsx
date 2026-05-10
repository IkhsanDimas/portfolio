import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github as GithubIcon } from "lucide-react";
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
  year?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "daskrimti",
    title: "DASKRIMTI",
    description: "Dashboard Kriminalitas Terpadu untuk Kejaksaan Tinggi Kepulauan Riau. Sistem terintegrasi yang mencakup CMS pengelolaan data perkara pidana umum (8 halaman), dashboard absensi pegawai berbasis mobile dengan admin panel untuk upload data Excel, serta portal login terpusat.",
    fullDescription:
      "DASKRIMTI (Dashboard Kriminalitas Terpadu) adalah sistem informasi terintegrasi yang dibangun khusus untuk Kejaksaan Tinggi Kepulauan Riau. Sistem ini terdiri dari 3 komponen utama: (1) CMS Dashboard Pidana Umum — mengelola data 8 tahap perkara mulai dari Pra-Penuntutan, Penuntutan, Upaya Hukum, Eksekusi, Barang Bukti, Tindak Pidana Umum, Tindak Pidana Khusus, hingga Perdata & Tata Usaha Negara, dengan fitur grafik interaktif, filter dinamis, dan sinkronisasi data ke Supabase. (2) Dashboard Absensi Mobile — menampilkan data kehadiran 9 bidang kerja dengan visualisasi treemap, bar chart, dan donut chart, dilengkapi Admin Panel yang mampu membaca file Excel secara cerdas (smart parsing) dengan pengenalan alias nama sheet dan deteksi format otomatis. (3) Portal Login Terpusat — sebagai gerbang akses ke seluruh modul. Seluruh data tersinkronisasi secara realtime dengan Supabase sebagai backend.",
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
    year: "2026",
    category: "Internal Dashboard",
  },
  {
    id: "nega-chatbot",
    title: "Nega Chatbot AI",
    description:
      "Asisten virtual AI yang membantu berbagai tugas melalui percakapan interaktif, analisis dokumen, kolaborasi grup, dan fitur produktivitas.",
    fullDescription:
      "Nega Chatbot AI adalah asisten virtual berbasis AI yang dibangun dengan teknologi modern. Powered by Gemini 2.5 Flash, chatbot ini dirancang untuk membantu pengguna dalam berbagai tugas melalui percakapan interaktif, analisis dokumen PDF & gambar, kolaborasi dalam grup chat, serta fitur produktivitas seperti voice input dan edit pesan.",
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
    year: "2025",
    category: "AI Product",
  },
  {
    id: "otaku-asah-otak",
    title: "Otaku Asah Otak",
    description:
      "Game puzzle asah otak berbasis web dengan 20+ level yang menantang logika dan kreativitas pemain. Setiap level memiliki tipe gameplay yang berbeda seperti pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, dan input teks.",
    fullDescription:
      "Otaku Asah Otak adalah game puzzle berbasis web yang dirancang untuk mengasah kemampuan berpikir logis dan kreativitas. Dengan lebih dari 20 level yang menantang, game ini menawarkan berbagai tipe gameplay mulai dari pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, hingga input teks. Game ini dilengkapi dengan sistem penyimpanan progres otomatis menggunakan LocalStorage, sistem rating bintang untuk setiap level, dan fitur hint untuk membantu pemain menyelesaikan level yang sulit. Dibangun sebagai Progressive Web App (PWA), game ini dapat diinstal di perangkat dan dimainkan secara offline.",
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
    year: "2025",
    category: "Web Game",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
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
    <section id="projects" className="py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="eyebrow mb-4">(04) &mdash; Selected Work</p>
            <h2 className="display-lg text-[clamp(2rem,7vw,5rem)]">
              {t("projects.title")} {t("projects.titleHighlight")}
            </h2>
          </div>
          <Link
            to="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("projects.requestProject")}
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="relative">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Featured large card spans 2 cols on md+ */}
            <motion.div
              className="md:col-span-2 md:row-span-2 relative z-20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to={`/project/${featuredProject.id}`} className="block group">
                <div className="relative aspect-[16/11] md:aspect-[4/3] rounded-xl overflow-hidden bg-foreground border border-border">
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
                        alt={`${featuredProject.title} - ${currentImageIndex + 1}`}
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

                  {/* Top-left number */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 text-background">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-80">
                      01 / {String(projects.length).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] bg-background text-foreground rounded-full">
                      Featured
                    </span>
                  </div>

                  {/* Image nav dots */}
                  {featuredImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-1.5 z-10">
                      {featuredImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? "bg-background w-6" : "bg-background/50 w-1.5"
                          }`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Bottom metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-background">
                    <p className="text-[10px] uppercase tracking-[0.22em] opacity-70 mb-2">
                      {featuredProject.category} &middot; {featuredProject.year}
                    </p>
                    <h3 className="display-lg text-2xl md:text-4xl mb-2 group-hover:underline underline-offset-4 decoration-2">
                      {featuredProject.title}
                    </h3>
                    <p className="text-xs md:text-sm text-background/70 max-w-md line-clamp-2">
                      {featuredProject.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Smaller cards */}
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                className="relative z-20"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <ProjectCard project={project} index={index + 1} />
                  </a>
                ) : (
                  <Link to={`/project/${project.id}`} className="block group">
                    <ProjectCard project={project} index={index + 1} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Below-grid action list */}
        <div className="mt-12 md:mt-16 border-t border-border">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="border-b border-border py-5 md:py-6 grid grid-cols-12 items-center gap-3 md:gap-6 hover:bg-secondary transition-colors px-3 md:px-4 -mx-3 md:-mx-4 rounded-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <span className="col-span-2 md:col-span-1 text-xs font-mono text-muted-foreground">
                0{idx + 1}
              </span>
              <div className="col-span-10 md:col-span-4">
                <p className="font-display font-bold uppercase text-sm md:text-base tracking-tight">
                  {project.title}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                  {project.category}
                </p>
              </div>
              <div className="col-span-7 md:col-span-4 hidden md:flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="col-span-3 md:col-span-1 text-xs text-muted-foreground text-right">
                {project.year}
              </p>
              <div className="col-span-12 md:col-span-2 flex md:justify-end gap-2 mt-2 md:mt-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] border border-border rounded-full px-3 py-1.5 hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                )}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] border border-border rounded-full px-3 py-1.5 hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                >
                  Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-foreground border border-border">
    <OptimizedImage src={project.image} alt={project.title} className="w-full h-full" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />

    <div className="absolute top-4 left-4 text-background">
      <p className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-80">
        0{index + 1} / 0{projects.length}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-background">
      <p className="text-[10px] uppercase tracking-[0.22em] opacity-70 mb-1">
        {project.category} &middot; {project.year}
      </p>
      <h3 className="display-lg text-xl md:text-2xl group-hover:underline underline-offset-4 decoration-2">
        {project.title}
      </h3>
    </div>
  </div>
);

export default ProjectsSection;
