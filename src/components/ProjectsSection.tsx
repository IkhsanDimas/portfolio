import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import projectChatbot from "@/assets/project-chatbot.jpeg";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Project image */}
              <div className="h-48 relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/60 transition-colors duration-300" />
                <motion.div 
                  className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"
                />
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("projects.liveDemo")}
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>

                <Link to={`/project/${project.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full mt-2 group/btn hover:bg-primary/10"
                  >
                    {t("projects.viewDetail")}
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
