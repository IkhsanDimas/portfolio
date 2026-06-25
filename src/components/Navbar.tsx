import { Menu, X, Github, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "skills", "projects", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = `#${section}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Monogram + name */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <span className="w-9 h-9 rounded-md border border-foreground flex items-center justify-center font-display font-bold text-sm tracking-tight group-hover:bg-foreground group-hover:text-background transition-colors">
              ID
            </span>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-[13px] font-bold uppercase tracking-[0.14em]">
                Ikhsan Dimastianto
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("nav.subtitle")}
              </span>
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-xs uppercase tracking-[0.2em] transition-colors font-semibold ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-foreground"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-1.5">
            <a
              href="https://github.com/IkhsanDimas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="icon" className="rounded-md h-9 w-9">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-2 inline-flex items-center gap-2 bg-foreground text-background text-xs font-bold uppercase tracking-[0.16em] pl-4 pr-1.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {t("nav.letsTalk")}
              <span className="w-7 h-7 rounded-full bg-background text-foreground flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-1.5 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-3 text-left rounded-md transition-colors uppercase tracking-[0.18em] text-xs font-semibold ${
                      activeSection === link.href
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://github.com/IkhsanDimas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md flex items-center gap-2 uppercase tracking-[0.18em] text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-2 inline-flex items-center justify-between bg-foreground text-background text-xs font-bold uppercase tracking-[0.16em] pl-4 pr-1.5 py-2 rounded-full"
                >
                  {t("nav.letsTalk")}
                  <span className="w-7 h-7 rounded-full bg-background text-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
