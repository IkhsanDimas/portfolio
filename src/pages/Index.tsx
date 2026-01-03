import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/Profil-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-background">
                <img
                  src={profilePhoto}
                  alt="Ikhsan Dimastianto"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Siap Berkolaborasi & Berkontribusi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-3">Halo, Saya</span>
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Ikhsan Dimastianto
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Mahasiswa <span className="text-foreground font-medium">Teknik Informatika</span> yang passionate 
            dalam membangun solusi digital kreatif dan aplikasi web yang memberikan dampak positif.
          </p>

          {/* Tagline */}
          <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-8 italic">
            "Mengubah ide menjadi kode, dan kode menjadi pengalaman yang bermakna"
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Indonesia</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jelajahi Karya Saya
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Hubungi Saya
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
