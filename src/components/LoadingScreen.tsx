import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LoadingScreen = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Monogram */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="w-16 h-16 mx-auto rounded-md border-2 border-foreground flex items-center justify-center">
            <span className="font-display font-bold text-xl tracking-tight">ID</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="display-lg text-xl md:text-2xl mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Ikhsan Dimastianto
        </motion.h1>

        <motion.p
          className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t("loading.subtitle")}
        </motion.p>

        {/* Dots */}
        <div className="flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-foreground"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
