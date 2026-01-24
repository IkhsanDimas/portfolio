import { Heart, Code } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code className="w-4 h-4 text-primary" />
            <span>© {currentYear} Ikhsan Dimastianto</span>
          </div>
          <p className="text-sm text-muted-foreground/70">
            Crafted with passion & coffee ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
