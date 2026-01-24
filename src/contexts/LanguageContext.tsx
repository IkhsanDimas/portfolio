import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navbar
  "nav.about": { id: "Tentang", en: "About" },
  "nav.skills": { id: "Keahlian", en: "Skills" },
  "nav.projects": { id: "Proyek", en: "Projects" },
  "nav.contact": { id: "Kontak", en: "Contact" },
  "nav.letsTalk": { id: "Mari Bicara", en: "Let's Talk" },

  // Hero
  "hero.greeting": { id: "Halo, Saya", en: "Hi, I'm" },
  "hero.name": { id: "Ikhsan Dimastianto", en: "Ikhsan Dimastianto" },
  "hero.status": { id: "Siap Berkolaborasi & Berkontribusi", en: "Ready to Collaborate & Contribute" },
  "hero.student": { id: "Mahasiswa", en: "Student of" },
  "hero.major": { id: "Teknik Informatika", en: "Informatics Engineering" },
  "hero.description": { id: "yang passionate dalam membangun solusi digital kreatif dan aplikasi web yang memberikan dampak positif.", en: "passionate about building creative digital solutions and impactful web applications." },
  "hero.tagline": { id: "Belajar, Membangun, dan Terus Berkembang", en: "Learning, Building, and Growing" },
  "hero.location": { id: "Indonesia", en: "Indonesia" },
  "hero.viewProjects": { id: "Lihat Proyek Saya", en: "View My Projects" },
  "hero.contactMe": { id: "Hubungi Saya", en: "Contact Me" },

  // About
  "about.title": { id: "Tentang Saya", en: "About Me" },
  "about.p1": { id: "Kode adalah cara saya bercerita. Setiap baris adalah langkah menuju solusi yang lebih baik.", en: "Code is how I tell stories. Every line is a step towards a better solution." },
  "about.p2": { id: "Saya percaya desain yang baik adalah desain yang tidak terlihat — pengguna hanya merasakan kemudahannya.", en: "I believe good design is invisible — users only feel its ease." },
  "about.p3": { id: "Selalu belajar, selalu berkembang. Dunia teknologi tidak pernah berhenti, begitu juga saya.", en: "Always learning, always growing. Technology never stops, neither do I." },
  
  // About Skills
  "about.webDev": { id: "Web Development", en: "Web Development" },
  "about.webDevDesc": { id: "React, TypeScript, dan teknologi modern untuk web yang responsif", en: "React, TypeScript, and modern tech for responsive web" },
  "about.uiux": { id: "UI/UX Design", en: "UI/UX Design" },
  "about.uiuxDesc": { id: "Desain intuitif yang mengutamakan kenyamanan pengguna", en: "Intuitive design that prioritizes user comfort" },
  "about.backend": { id: "Backend Development", en: "Backend Development" },
  "about.backendDesc": { id: "API dan sistem backend yang cepat dan handal", en: "Fast and reliable API and backend systems" },
  "about.problemSolving": { id: "Problem Solving", en: "Problem Solving" },
  "about.problemSolvingDesc": { id: "Solusi kreatif untuk tantangan teknis yang kompleks", en: "Creative solutions for complex technical challenges" },

  // Skills
  "skills.title": { id: "Keahlian", en: "Skills" },
  "skills.titleHighlight": { id: "Teknis", en: "Technical" },
  "skills.description": { id: "Teknologi dan tools yang saya gunakan untuk membangun solusi digital", en: "Technologies and tools I use to build digital solutions" },

  // Projects
  "projects.title": { id: "Project", en: "Project" },
  "projects.titleHighlight": { id: "Terbaru", en: "Latest" },
  "projects.description": { id: "Beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan dan kreativitas", en: "Some projects I've worked on to sharpen my skills and creativity" },
  "projects.liveDemo": { id: "Live Demo", en: "Live Demo" },
  "projects.viewDetail": { id: "Lihat Detail", en: "View Detail" },

  // Contact
  "contact.title": { id: "Hubungi", en: "Contact" },
  "contact.titleHighlight": { id: "Saya", en: "Me" },
  "contact.description": { id: "Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya", en: "Interested in collaborating or have questions? Feel free to reach out" },
  "contact.connect": { id: "Mari Terhubung", en: "Let's Connect" },
  "contact.connectDesc": { id: "Saya selalu terbuka untuk diskusi tentang proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.", en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." },
  "contact.email": { id: "Email", en: "Email" },
  "contact.location": { id: "Lokasi", en: "Location" },
  "contact.name": { id: "Nama", en: "Name" },
  "contact.namePlaceholder": { id: "Nama lengkap Anda", en: "Your full name" },
  "contact.emailPlaceholder": { id: "email@example.com", en: "email@example.com" },
  "contact.message": { id: "Pesan", en: "Message" },
  "contact.messagePlaceholder": { id: "Tuliskan pesan Anda...", en: "Write your message..." },
  "contact.send": { id: "Kirim Pesan", en: "Send Message" },
  "contact.success": { id: "Pesan terkirim! Saya akan segera menghubungi Anda.", en: "Message sent! I'll get back to you soon." },

  // CTA Section
  "cta.title": { id: "Tertarik Bekerja Sama?", en: "Interested to Work Together?" },
  "cta.description": { id: "Saya terbuka untuk peluang freelance, magang, atau kolaborasi proyek. Yuk diskusikan ide kamu!", en: "I'm open to freelance opportunities, internships, or project collaborations. Let's discuss your ideas!" },
  "cta.downloadCV": { id: "Download CV", en: "Download Resume" },
  "cta.chatWhatsApp": { id: "Chat via WhatsApp", en: "Chat on WhatsApp" },
  "cta.connectOn": { id: "Atau hubungi saya di:", en: "Or connect with me on:" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
