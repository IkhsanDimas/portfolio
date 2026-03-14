import { Menu, X, Github } from "lucide-react";
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
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["about", "skills", "projects", "contact"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = `#${section}`;
          }
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
        : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Portofolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm transition-colors rounded-lg ${activeSection === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="ml-3 flex items-center gap-1.5">
              <a
                href="https://github.com/IkhsanDimas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <LanguageToggle />
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl px-5 ml-1"
              >
                {t("nav.letsTalk")}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-border/50"
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
                    className={`px-4 py-3 text-left rounded-xl transition-colors ${activeSection === link.href
                        ? "text-primary bg-primary/5 font-medium"
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
                  className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <Button
                  className="mt-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl"
                  onClick={() => scrollToSection("#contact")}
                >
                  {t("nav.letsTalk")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
