import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Animated ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1"
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl">
            {/* Status badge */}
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Terbuka untuk kesempatan baru</span>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Halo, Saya{" "}
                <br className="hidden sm:block" />
                <span className="gradient-text">Ikhsan Dimastianto</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance">
                Mahasiswa Informatika yang passionate dalam membangun aplikasi web modern dan solusi teknologi inovatif
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect font-display"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Project Saya
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary font-display"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Saya
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
