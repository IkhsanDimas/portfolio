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
  "nav.experience": { id: "Pengalaman", en: "Experience" },
  "nav.contact": { id: "Kontak", en: "Contact" },
  "nav.letsTalk": { id: "Mari Bicara", en: "Let's Talk" },

  // Hero
  "hero.greeting": { id: "Halo, Saya", en: "Hi, I'm" },
  "hero.name": { id: "Ikhsan Dimastianto", en: "Ikhsan Dimastianto" },
  "hero.status": { id: "Tersedia untuk Kolaborasi", en: "Available for Collaboration" },
  "hero.student": { id: "Mahasiswa", en: "Student of" },
  "hero.major": { id: "Teknik Informatika", en: "Informatics Engineering" },
  "hero.description": { id: "Mahasiswa Teknik Informatika yang membangun aplikasi web modern dengan React, TypeScript, dan Supabase. Fokus pada solusi yang bersih, terukur, dan memberikan dampak nyata.", en: "An Informatics Engineering student crafting modern web applications with React, TypeScript, and Supabase. Focused on clean, scalable solutions with real impact." },
  "hero.tagline": { id: "Belajar, Membangun, dan Terus Berkembang", en: "Learning, Building, and Growing" },
  "hero.location": { id: "Indonesia", en: "Indonesia" },
  "hero.basedIn": { id: "Berbasis di", en: "Based in" },
  "hero.viewProjects": { id: "Lihat Proyek", en: "View Projects" },
  "hero.contactMe": { id: "Hubungi Saya", en: "Contact Me" },
  "hero.introEyebrow": { id: "Saya Merancang & Membangun", en: "I Design & Build" },
  "hero.headline1": { id: "Solusi", en: "Digital" },
  "hero.headline2": { id: "Digital", en: "Solutions" },
  "hero.headline3": { id: "Yang Berguna", en: "That Matter" },
  "hero.role": { id: "Mahasiswa", en: "Student" },

  // Marquee
  "marquee.build": { id: "Build.", en: "Build." },
  "marquee.design": { id: "Design.", en: "Design." },
  "marquee.learn": { id: "Learn.", en: "Learn." },
  "marquee.collaborate": { id: "Collaborate.", en: "Collaborate." },

  // About
  "about.title": { id: "Tentang Saya", en: "About Me" },
  "about.lead": { id: "Sekilas tentang latar belakang, pendekatan, dan hal-hal yang saya kerjakan saat tidak sedang menulis kode.", en: "A glimpse into my background, approach, and what I focus on beyond writing code." },
  "about.p1": { id: "Saya menulis kode untuk menyelesaikan masalah, bukan sekadar membuat sesuatu bekerja.", en: "I write code to solve problems, not just to make things work." },
  "about.p2": { id: "Desain yang baik itu tidak terlihat — pengguna hanya merasakan alurnya yang mulus dan tujuannya tercapai.", en: "Good design is invisible — users simply feel the flow and reach their goal." },
  "about.p3": { id: "Saya tetap curious, selalu belajar teknologi baru, dan percaya konsistensi lebih penting daripada intensitas.", en: "I stay curious, keep learning new technologies, and believe consistency beats intensity." },
  
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
  "projects.title": { id: "Proyek", en: "Selected" },
  "projects.titleHighlight": { id: "Terbaru", en: "Work" },
  "projects.description": { id: "Beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan dan kreativitas", en: "A few projects I've built to sharpen my skills and creativity" },
  "projects.liveDemo": { id: "Live Demo", en: "Live Demo" },
  "projects.viewDetail": { id: "Lihat Detail", en: "View Detail" },
  "projects.requestProject": { id: "Punya Proyek?  Ayo Bicara", en: "Have a Project?  Let's Talk" },

  // Contact
  "contact.title": { id: "Hubungi", en: "Get In" },
  "contact.titleHighlight": { id: "Saya", en: "Touch" },
  "contact.description": { id: "Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.", en: "Interested in collaborating or have questions? Feel free to reach out." },
  "contact.connect": { id: "Mari Terhubung", en: "Let's Connect" },
  "contact.connectDesc": { id: "Saya terbuka untuk diskusi proyek baru, magang, atau kolaborasi riset. Pilih kanal yang paling nyaman untuk Anda.", en: "I'm open to new projects, internships, and research collaborations. Pick the channel that's most comfortable for you." },
  "contact.responseTime": { id: "Biasanya saya membalas dalam 24 jam kerja.", en: "Usually replies within 24 business hours." },
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
  "cta.eyebrow": { id: "Mari Bekerja Sama", en: "Let's Work Together" },
  "cta.title": { id: "Tertarik Bekerja Sama?", en: "Interested to Work Together?" },
  "cta.headline1": { id: "Mulai", en: "Start Your" },
  "cta.headline2": { id: "Proyek Anda", en: "Next Project" },
  "cta.description": { id: "Saya terbuka untuk peluang freelance, magang, atau kolaborasi proyek. Ceritakan ide Anda, kita diskusikan bersama.", en: "I'm open to freelance opportunities, internships, or project collaborations. Share your idea and let's discuss it together." },
  "cta.chatWhatsApp": { id: "Chat WhatsApp", en: "Chat on WhatsApp" },
  "cta.connectOn": { id: "Terhubung di", en: "Connect on" },

  // Experience
  "experience.label": { id: "Pengalaman", en: "Experience" },
  "experience.title": { id: "Pengalaman", en: "Internship" },
  "experience.subtitle": { id: "Magang", en: "Experience" },
  "experience.description": { id: "Pengalaman kerja praktik yang membentuk kemampuan teknis dan profesionalisme saya di dunia nyata", en: "Real-world internship experience that shaped my technical skills and professionalism" },
  "experience.p1": { id: "Selama 2 bulan menjalani Kerja Praktik di Kejaksaan Tinggi Kepulauan Riau, saya berkontribusi membangun sistem DASKRIMTI — Dashboard Kriminalitas Terpadu yang mencakup CMS data perkara, dashboard absensi, dan portal login terpusat.", en: "During my 2-month internship at Kejaksaan Tinggi Kepulauan Riau, I contributed to building DASKRIMTI — an integrated criminal dashboard system including case data CMS, attendance dashboard, and centralized login portal." },
  "experience.p2": { id: "Saya berkesempatan mempresentasikan hasil projek langsung kepada tim Kejaksaan, menunjukkan fitur-fitur sistem yang telah kami bangun dan implementasikan.", en: "I had the opportunity to present the project results directly to the Prosecution team, demonstrating the system features we built and implemented." },
  "experience.institution": { id: "Institusi", en: "Institution" },
  "experience.duration": { id: "Durasi", en: "Duration" },
  "experience.role": { id: "Posisi", en: "Role" },
  "experience.certificateTitle": { id: "Sertifikat Magang", en: "Internship Certificate" },
  "experience.photoCaption1": { id: "Presentasi Projek DASKRIMTI", en: "DASKRIMTI Project Presentation" },
  "experience.photoCaption2": { id: "Demo Sistem kepada Tim Kejaksaan", en: "System Demo to Prosecution Team" },
  "experience.clickToZoom": { id: "Klik untuk perbesar", en: "Click to zoom" },
  "experience.certificateDesc": { id: "Sertifikat penyelesaian Kerja Praktik selama 2 bulan (12 Jan — 13 Mar 2026)", en: "Internship completion certificate for 2 months (12 Jan — 13 Mar 2026)" },
  "experience.pressEsc": { id: "Tekan ESC atau klik di luar untuk menutup", en: "Press ESC or click outside to close" },

  // Navbar
  "nav.subtitle": { id: "Mahasiswa Informatika", en: "Informatics Student" },

  // About eyebrow & stats
  "about.eyebrow": { id: "(01) — Tentang", en: "(01) — About" },
  "about.stat.projects": { id: "Proyek Terselesaikan", en: "Projects Shipped" },
  "about.stat.technologies": { id: "Teknologi Dikuasai", en: "Technologies Mastered" },
  "about.stat.internship": { id: "Pengalaman Magang", en: "Internship Experience" },

  // Footer
  "footer.copyright": { id: `© ${new Date().getFullYear()} Ikhsan Dimastianto. Hak Cipta Dilindungi.`, en: `© ${new Date().getFullYear()} Ikhsan Dimastianto. All Rights Reserved.` },
  "footer.tagline": { id: "Dirancang & dikembangkan dengan dedikasi", en: "Designed & developed with dedication" },
  "footer.navigate": { id: "Navigasi", en: "Navigate" },
  "footer.connect": { id: "Terhubung", en: "Connect" },
  "footer.backToTop": { id: "Kembali ke Atas", en: "Back to Top" },
  "footer.description": { id: "Membangun aplikasi web yang bersih, terukur, dan bermanfaat. Saat ini fokus pada ekosistem React, TypeScript, dan Supabase.", en: "Building clean, scalable, and impactful web applications. Currently focused on the React, TypeScript, and Supabase ecosystem." },
  "footer.subtitle": { id: "Mahasiswa Teknik Informatika", en: "Informatics Engineering Student" },
  "footer.linkAbout": { id: "Tentang", en: "About" },
  "footer.linkExperience": { id: "Pengalaman", en: "Experience" },
  "footer.linkSkills": { id: "Keahlian", en: "Skills" },
  "footer.linkProjects": { id: "Proyek", en: "Projects" },
  "footer.linkContact": { id: "Kontak", en: "Contact" },

  // Not Found Page
  "notFound.eyebrow": { id: "Error — 404", en: "Error — 404" },
  "notFound.message": { id: "Halaman yang Anda cari tidak ada atau telah dipindahkan.", en: "The page you're looking for doesn't exist or has been moved." },
  "notFound.returnHome": { id: "Kembali ke Beranda", en: "Return Home" },

  // Project Detail Page
  "projectDetail.back": { id: "Kembali ke Portofolio", en: "Back to Portfolio" },
  "projectDetail.keyFeatures": { id: "Fitur Utama", en: "Key Features" },
  "projectDetail.whatsInside": { id: "Detail Implementasi", en: "What's Inside" },
  "projectDetail.meta": { id: "Meta Proyek", en: "Project Meta" },
  "projectDetail.year": { id: "Tahun", en: "Year" },
  "projectDetail.category": { id: "Kategori", en: "Category" },
  "projectDetail.role": { id: "Peran", en: "Role" },
  "projectDetail.roleValue": { id: "Fullstack Developer", en: "Fullstack Developer" },
  "projectDetail.techStack": { id: "Teknologi", en: "Tech Stack" },
  "projectDetail.visitLive": { id: "Kunjungi Situs", en: "Visit Live" },
  "projectDetail.github": { id: "GitHub", en: "GitHub" },

  // Section Eyebrows
  "eyebrow.experience": { id: "(02) — Pengalaman", en: "(02) — Experience" },
  "eyebrow.skills": { id: "(03) — Keahlian", en: "(03) — Skills" },
  "eyebrow.projects": { id: "(04) — Proyek Pilihan", en: "(04) — Selected Work" },
  "eyebrow.contact": { id: "(05) — Kontak", en: "(05) — Contact" },

  // Projects Section
  "projects.featured": { id: "Unggulan", en: "Featured" },
  "projects.live": { id: "Live", en: "Live" },
  "projects.detail": { id: "Detail", en: "Detail" },

  // Experience Section
  "experience.badge": { id: "Kerja Praktik 2026", en: "Internship 2026" },
  "experience.institutionName": { id: "Kejaksaan Tinggi Kepulauan Riau", en: "High Prosecution Office of Riau Islands" },

  // Contact Section
  "contact.sending": { id: "Mengirim...", en: "Sending..." },

  // Loading Screen
  "loading.subtitle": { id: "Teknik Informatika", en: "Informatics Engineering" },

  // Projects - DASKRIMTI
  "project.daskrimti.category": { id: "Dashboard Internal", en: "Internal Dashboard" },
  "project.daskrimti.description": { id: "Dashboard Kriminalitas Terpadu untuk Kejaksaan Tinggi Kepulauan Riau. Sistem terintegrasi yang mencakup CMS pengelolaan data perkara pidana umum (8 halaman), dashboard absensi pegawai berbasis mobile dengan admin panel untuk upload data Excel, serta portal login terpusat.", en: "Integrated Criminality Dashboard for the High Prosecution Office of Riau Islands. An integrated system featuring a case management CMS (8 pages), a mobile-based employee attendance dashboard with an Excel-parsing admin panel, and a centralized login portal." },
  "project.daskrimti.fullDescription": { id: "DASKRIMTI (Dashboard Kriminalitas Terpadu) adalah sistem informasi terintegrasi yang dibangun khusus untuk Kejaksaan Tinggi Kepulauan Riau. Sistem ini terdiri dari 3 komponen utama: (1) CMS Dashboard Pidana Umum — mengelola data 8 tahap perkara mulai dari Pra-Penuntutan, Penuntutan, Upaya Hukum, Eksekusi, Barang Bukti, Tindak Pidana Umum, Tindak Pidana Khusus, hingga Perdata & Tata Usaha Negara, dengan fitur grafik interaktif, filter dinamis, dan sinkronisasi data ke Supabase. (2) Dashboard Absensi Mobile — menampilkan data kehadiran 9 bidang kerja dengan visualisasi treemap, bar chart, dan donut chart, dilengkapi Admin Panel yang mampu membaca file Excel secara cerdas (smart parsing) dengan pengenalan alias nama sheet dan deteksi format otomatis. (3) Portal Login Terpusat — sebagai gerbang akses ke seluruh modul. Seluruh data tersinkronisasi secara realtime dengan Supabase sebagai backend.", en: "DASKRIMTI (Integrated Criminality Dashboard) is an integrated information system built specifically for the High Prosecution Office of Riau Islands. The system consists of 3 main components: (1) CMS Prosecution Dashboard — managing 8 stages of criminal cases (pre-prosecution, prosecution, appeals, execution, evidence, general crime, special crime, civil & state administration) with interactive charts, dynamic filters, and Supabase synchronization. (2) Mobile Attendance Dashboard — visualizing employee attendance for 9 departments using treemaps, bar charts, and donut charts, equipped with an Admin Panel that performs smart Excel parsing. (3) Centralized Login Portal — serving as the gateway to all modules. All data is synchronized in real-time with Supabase as the backend." },
  "project.daskrimti.feature.0": { id: "CMS 8 Halaman Perkara - Mengelola data Pra-Penuntutan, Penuntutan, Upaya Hukum, Eksekusi, Barang Bukti, dan lainnya", en: "8-Page Case CMS - Managing Pre-prosecution, Prosecution, Appeals, Execution, Evidence, and more" },
  "project.daskrimti.feature.1": { id: "Grafik Interaktif - Bar chart, line chart, treemap, dan donut chart menggunakan Chart.js", en: "Interactive Charts - Bar, line, treemap, and donut charts using Chart.js" },
  "project.daskrimti.feature.2": { id: "Smart Excel Parser - Admin panel yang membaca file Excel secara cerdas dengan deteksi format otomatis dan alias nama sheet", en: "Smart Excel Parser - Admin panel that intelligently parses Excel files with auto format detection and sheet name aliasing" },
  "project.daskrimti.feature.3": { id: "Sinkronisasi Realtime - Data tersimpan dan tersinkronisasi ke Supabase secara otomatis", en: "Real-time Sync - Data automatically saved and synchronized to Supabase" },
  "project.daskrimti.feature.4": { id: "Dashboard Absensi 9 Bidang - Visualisasi kehadiran untuk Pembinaan, Intelijen, Pidum, Pidsus, Datun, Pengawasan, TU, Koordinator, dan Pemulihan Aset", en: "9-Department Attendance Dashboard - Visualizing attendance for Development, Intelligence, Crime, Civil, Supervision, Administration, Coordinator, and Asset Recovery departments" },
  "project.daskrimti.feature.5": { id: "Filter Dinamis - Filter berdasarkan tahun, bulan, dan halaman dengan URL parameter", en: "Dynamic Filters - Filtering by year, month, and page via URL parameters" },
  "project.daskrimti.feature.6": { id: "Responsive Design - Tampilan optimal di desktop dan mobile untuk dashboard absensi", en: "Responsive Design - Optimized layout for desktop and mobile devices" },
  "project.daskrimti.feature.7": { id: "Portal Login Terpusat - Satu titik akses ke seluruh modul dashboard", en: "Centralized Login Portal - A single entry point for all dashboard modules" },
  "project.daskrimti.feature.8": { id: "Manajemen Data Upload - Mode Replace & Append untuk upload data absensi dengan validasi otomatis", en: "Upload Data Management - Replace & Append modes for attendance data upload with automatic validation" },
  "project.daskrimti.feature.9": { id: "Arsip File Excel - File Excel yang diunggah diarsipkan di Supabase Storage untuk referensi", en: "Excel Archive - Uploaded Excel files archived in Supabase Storage for reference" },

  // Projects - Sludge Monitor
  "project.sludge-monitor.category": { id: "Kecerdasan Buatan / Deep Learning", en: "AI / Deep Learning" },
  "project.sludge-monitor.description": { id: "Sistem deteksi tumpahan sludge oil berbasis AI menggunakan citra satelit SAR Sentinel-1. Dilengkapi dashboard web interaktif untuk analisis, estimasi luas pencemaran, dan penilaian tingkat ancaman lingkungan.", en: "AI-powered sludge oil spill detection system using Sentinel-1 SAR satellite imagery. Equipped with an interactive web dashboard for analysis, pollution area estimation, and environmental threat assessment." },
  "project.sludge-monitor.fullDescription": { id: "Sludge Monitor adalah sistem monitoring berbasis AI yang dirancang untuk mendeteksi tumpahan sludge oil di laut menggunakan citra satelit SAR (Synthetic Aperture Radar) dari Sentinel-1. Sistem ini menggunakan arsitektur Attention U-Net untuk segmentasi area tumpahan, kemudian menghitung estimasi luas pencemaran dan menilai tingkat ancaman lingkungan. Aplikasi ini dibangun dengan FastAPI sebagai backend API dan dashboard web modern menggunakan HTML, JavaScript, dan Tailwind CSS. Fitur utama meliputi drag-and-drop upload citra SAR, visualisasi overlay hasil deteksi, konfigurasi threshold dan resolusi spasial, serta riwayat log analisis. Seluruh sistem di-deploy menggunakan Docker di Hugging Face Spaces.", en: "Sludge Monitor is an AI-based monitoring system designed to detect sludge oil spills at sea using Sentinel-1 SAR (Synthetic Aperture Radar) satellite imagery. The system uses the Attention U-Net architecture for oil spill segmentation, calculates the estimated pollution area, and assesses the environmental threat level. The application is built with a FastAPI backend and a modern web dashboard using HTML, JavaScript, and Tailwind CSS. Key features include drag-and-drop SAR image uploads, visual overlay of detection results, configurable sigmoid threshold and spatial resolution, and analysis history logs. The entire system is dockerized and deployed on Hugging Face Spaces." },
  "project.sludge-monitor.feature.0": { id: "AI Segmentation - Deteksi otomatis area tumpahan oil menggunakan Attention U-Net", en: "AI Segmentation - Automated oil spill area detection using Attention U-Net" },
  "project.sludge-monitor.feature.1": { id: "SAR Image Processing - Analisis citra radar satelit Sentinel-1 dengan OpenCV", en: "SAR Image Processing - Analysis of Sentinel-1 radar satellite imagery using OpenCV" },
  "project.sludge-monitor.feature.2": { id: "Dashboard Interaktif - Web dashboard modern dengan KPI cards dan visualisasi hasil", en: "Interactive Dashboard - Modern web dashboard with KPI cards and results visualization" },
  "project.sludge-monitor.feature.3": { id: "Estimasi Pencemaran - Kalkulasi luas area tercemar dalam satuan meter persegi", en: "Pollution Estimation - Calculating polluted area size in square meters" },
  "project.sludge-monitor.feature.4": { id: "Threat Level Assessment - Penilaian tingkat ancaman lingkungan secara otomatis", en: "Threat Level Assessment - Automated environmental threat assessment" },
  "project.sludge-monitor.feature.5": { id: "Configurable Parameters - Pengaturan threshold sigmoid dan resolusi spasial", en: "Configurable Parameters - Sigmoid threshold and spatial resolution settings" },
  "project.sludge-monitor.feature.6": { id: "Analysis History - Riwayat log analisis dengan timestamp dan detail hasil", en: "Analysis History - History logs with timestamp and detailed results" },
  "project.sludge-monitor.feature.7": { id: "Dockerized Deployment - Deploy menggunakan Docker di Hugging Face Spaces", en: "Dockerized Deployment - Deployed using Docker on Hugging Face Spaces" },

  // Projects - Nega Chatbot AI
  "project.nega-chatbot.category": { id: "Produk Kecerdasan Buatan", en: "AI Product" },
  "project.nega-chatbot.description": { id: "Asisten virtual AI yang membantu berbagai tugas melalui percakapan interaktif, analisis dokumen, kolaborasi grup, dan fitur produktivitas.", en: "An AI virtual assistant that assists in various tasks through interactive conversations, document analysis, group collaboration, and productivity features." },
  "project.nega-chatbot.fullDescription": { id: "Nega Chatbot AI adalah asisten virtual berbasis AI yang dibangun dengan teknologi modern. Powered by Gemini 2.5 Flash, chatbot ini dirancang untuk membantu pengguna dalam berbagai tugas melalui percakapan interaktif, analisis dokumen PDF & gambar, kolaborasi dalam grup chat, serta fitur produktivitas seperti voice input dan edit pesan.", en: "Nega Chatbot AI is an AI-powered virtual assistant built with modern technologies. Powered by Gemini 2.5 Flash, this chatbot is designed to assist users in various tasks through interactive chat, PDF and image analysis, group chat collaboration, and productivity features like voice input and message editing." },
  "project.nega-chatbot.feature.0": { id: "Chat Realtime - Interaksi tanya jawab dengan AI yang cepat dan responsif", en: "Real-time Chat - Fast and responsive Q&A interaction with AI" },
  "project.nega-chatbot.feature.1": { id: "Voice Typing - Fitur dikte suara (Speech-to-Text) untuk mengetik tanpa keyboard", en: "Voice Typing - Speech-to-Text feature to type without a keyboard" },
  "project.nega-chatbot.feature.2": { id: "Upload Dokumen & Gambar - Mampu membaca dan menganalisis file PDF serta gambar", en: "Document & Image Upload - Reads and analyzes PDF files and images" },
  "project.nega-chatbot.feature.3": { id: "Smart Edit - Edit pesan yang sudah terkirim, AI akan regenerasi jawaban baru", en: "Smart Edit - Edit sent messages, AI will regenerate a new response" },
  "project.nega-chatbot.feature.4": { id: "Manajemen Chat - Sidebar dengan riwayat percakapan & fitur hapus chat", en: "Chat Management - Sidebar with chat history and delete chat feature" },
  "project.nega-chatbot.feature.5": { id: "Group Chat - Fitur grup diskusi dengan anggota lain", en: "Group Chat - Group discussion feature with other members" },
  "project.nega-chatbot.feature.6": { id: "Share Chat - Bagikan percakapan ke grup atau orang lain", en: "Share Chat - Share conversations with groups or other users" },
  "project.nega-chatbot.feature.7": { id: "Reply to Message - Fitur balas pesan tertentu dalam grup", en: "Reply to Message - Replying to specific messages within a group" },
  "project.nega-chatbot.feature.8": { id: "Status Akun - Indikator visual untuk pengguna Free vs Pro", en: "Account Status - Visual indicator for Free vs Pro users" },
  "project.nega-chatbot.feature.9": { id: "Autentikasi OTP - Login aman menggunakan OTP via Supabase", en: "OTP Authentication - Secure login using OTP via Supabase" },

  // Projects - Otaku Asah Otak
  "project.otaku-asah-otak.category": { id: "Game Web", en: "Web Game" },
  "project.otaku-asah-otak.description": { id: "Game puzzle asah otak berbasis web dengan 20+ level yang menantang logika dan kreativitas pemain. Setiap level memiliki tipe gameplay yang berbeda seperti pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, dan input teks.", en: "A web-based brain-teasing puzzle game with 20+ levels that challenge players' logic and creativity. Each level features a different gameplay type such as trick questions, visual puzzles, drag-and-drop, object tapping, and text inputs." },
  "project.otaku-asah-otak.fullDescription": { id: "Otaku Asah Otak adalah game puzzle berbasis web yang dirancang untuk mengasah kemampuan berpikir logis dan kreativitas. Dengan lebih dari 20 level yang menantang, game ini menawarkan berbagai tipe gameplay mulai dari pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, hingga input teks. Game ini dilengkapi dengan sistem penyimpanan progres otomatis menggunakan LocalStorage, sistem rating bintang untuk setiap level, dan fitur hint untuk membantu pemain menyelesaikan level yang sulit. Dibangun sebagai Progressive Web App (PWA), game ini dapat diinstal di perangkat dan dimainkan secara offline.", en: "Otaku Asah Otak is a web-based puzzle game designed to sharpen logical thinking and creativity. With over 20 challenging levels, the game offers various gameplay types from trick questions, visual puzzles, drag-and-drop, object tapping, to text inputs. The game features an automatic progress save system using LocalStorage, a star rating system for each completed level, and hints to assist players on difficult levels. Built as a Progressive Web App (PWA), it can be installed on devices and played offline." },
  "project.otaku-asah-otak.feature.0": { id: "20+ Level Puzzle - Berbagai tipe teka-teki yang menantang logika dan kreativitas", en: "20+ Puzzle Levels - Various types of puzzles that challenge logic and creativity" },
  "project.otaku-asah-otak.feature.1": { id: "Gameplay Beragam - Pertanyaan jebakan, teka-teki visual, drag & drop, tap objek, dan input teks", en: "Diverse Gameplay - Trick questions, visual puzzles, drag-and-drop, object tapping, and text input" },
  "project.otaku-asah-otak.feature.2": { id: "Auto Save Progress - Progres game tersimpan otomatis menggunakan LocalStorage", en: "Auto Save Progress - Game progress automatically saved using LocalStorage" },
  "project.otaku-asah-otak.feature.3": { id: "Star Rating System - Sistem penilaian bintang untuk setiap level yang diselesaikan", en: "Star Rating System - Star rating system for each completed level" },
  "project.otaku-asah-otak.feature.4": { id: "Hint System - Fitur bantuan untuk level yang sulit", en: "Hint System - Help feature for difficult levels" },
  "project.otaku-asah-otak.feature.5": { id: "Visual Effects - Efek konfeti menggunakan React Confetti untuk perayaan kemenangan", en: "Visual Effects - Confetti effects using React Confetti for victory celebration" },
  "project.otaku-asah-otak.feature.6": { id: "Responsive Design - Tampilan optimal di berbagai ukuran layar dengan Tailwind CSS", en: "Responsive Design - Optimized layout for various screen sizes using Tailwind CSS" },
  "project.otaku-asah-otak.feature.7": { id: "Progressive Web App - Dapat diinstal di perangkat dan dimainkan offline", en: "Progressive Web App - Can be installed on devices and played offline" },
  "project.otaku-asah-otak.feature.8": { id: "Icon Library - Menggunakan React Icons untuk UI yang menarik", en: "Icon Library - Uses React Icons for attractive UI" },
  "project.otaku-asah-otak.feature.9": { id: "Deployed on Netlify - Hosting cepat dan reliable", en: "Deployed on Netlify - Fast and reliable hosting" },

  // Projects - Es Teh Jumbo
  "project.esteh-jumbo.category": { id: "Aplikasi E-Commerce Web", en: "E-Commerce Web App" },
  "project.esteh-jumbo.description": { id: "Sistem e-commerce pemesanan minuman interaktif lengkap dengan kustomisasi rasa/topping, pelacakan pesanan berbasis peta (Leaflet.js), inventarisasi bahan baku dinamis, serta panel manajemen admin terpadu.", en: "An interactive e-commerce beverage ordering system complete with taste/topping customization, map-based order tracking (Leaflet.js), dynamic raw material inventory, and a unified admin management panel." },
  "project.esteh-jumbo.fullDescription": { id: "Es Teh Jumbo TNJ adalah platform e-commerce e-retail minuman modern yang dibangun menggunakan Laravel dan Tailwind CSS. Aplikasi ini menawarkan kustomisasi minuman yang kaya (seperti level es, level gula, dan pilihan topping), keranjang belanja interaktif berbasis Alpine.js, pelacakan pengiriman kurir real-time menggunakan peta Leaflet.js, integrasi checkout notifikasi WhatsApp, dan sistem manajemen inventaris bahan baku (es, teh, gula, cup, dll.) yang terintegrasi secara otomatis saat pesanan dibuat. Panel admin lengkap memungkinkan pengelolaan produk, pembaruan status pesanan real-time, grafik statistik, dan monitoring stok bahan baku secara aman.", en: "Es Teh Jumbo TNJ is a modern beverage e-commerce platform built using Laravel and Tailwind CSS. The application offers rich drink customization (such as ice level, sugar level, and topping options), an interactive Alpine.js-based shopping cart, real-time delivery tracking using Leaflet.js maps, WhatsApp notification checkout integration, and an automated raw material inventory management system (ice, tea, sugar, cups, etc.) that updates as orders are processed. The complete admin panel allows secure product management, real-time order status updates, statistical charts, and raw material stock monitoring." },
  "project.esteh-jumbo.feature.0": { id: "Kustomisasi Menu Interaktif - Sesuaikan rasa (gula/es) dan topping secara real-time sebelum memesan", en: "Interactive Menu Customization - Customize taste (sugar/ice) and toppings in real-time before ordering" },
  "project.esteh-jumbo.feature.1": { id: "Keranjang Belanja Dinamis - Manajemen keranjang interaktif dan instan yang didukung oleh Alpine.js", en: "Dynamic Shopping Cart - Interactive and instant cart management powered by Alpine.js" },
  "project.esteh-jumbo.feature.2": { id: "Lacak Pesanan Real-Time - Visualisasi pelacakan pengiriman kurir menggunakan peta interaktif Leaflet.js", en: "Real-Time Order Tracking - Delivery tracking visualization using interactive Leaflet.js maps" },
  "project.esteh-jumbo.feature.3": { id: "Checkout API WhatsApp - Kirim rincian pesanan dan status secara otomatis ke WhatsApp", en: "WhatsApp API Checkout - Automatically send order details and status updates to WhatsApp" },
  "project.esteh-jumbo.feature.4": { id: "Manajemen Inventaris Bahan Baku - Pengurangan stok bahan baku secara otomatis di setiap pesanan", en: "Raw Material Inventory Management - Automatic depletion of ingredient stock with each order" },
  "project.esteh-jumbo.feature.5": { id: "Panel Admin Terpadu - Dashboard statistik, CRUD produk, manajemen pesanan, dan kontrol inventaris", en: "Unified Admin Panel - Statistical dashboard, product CRUD, order management, and inventory controls" },
  "project.esteh-jumbo.feature.6": { id: "Desain UI Responsif - Tampilan modern, bersih, dan cepat yang dioptimalkan untuk mobile dan desktop", en: "Responsive UI Design - Modern, clean, and fast design optimized for mobile and desktop" },
  "project.esteh-jumbo.feature.7": { id: "Autentikasi & Otorisasi Aman - Batasan akses admin menggunakan Middleware kustom Laravel", en: "Secure Auth & Authorization - Admin access restrictions enforced using Laravel custom Middleware" },
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
