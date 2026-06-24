import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    try {
      setWindowHeight(window.innerHeight);
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } catch (error) {
      console.error('ParallaxBackground error:', error);
    }
  }, []);

  // Parallax transforms with error handling
  const y1 = useTransform(scrollY, [0, windowHeight * 3], [0, -400]);
  const y2 = useTransform(scrollY, [0, windowHeight * 3], [0, -600]);
  const y3 = useTransform(scrollY, [0, windowHeight * 3], [0, -200]);
  const opacity1 = useTransform(scrollY, [0, windowHeight], [0.4, 0.1]);
  const opacity2 = useTransform(scrollY, [0, windowHeight * 2], [0.3, 0.05]);

  if (windowHeight === 0) {
    return null; // Don't render until we have window height
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl"
        style={{ y: y1, opacity: opacity1 }}
      />

      {/* Accent orb - bottom left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl"
        style={{ y: y2, opacity: opacity1 }}
      />

      {/* Secondary orb - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"
        style={{ y: y3, opacity: opacity2 }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
