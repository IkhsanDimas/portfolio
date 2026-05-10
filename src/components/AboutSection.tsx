import { Code2, Palette, Database, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 3, suffix: "+", label: "Projects Shipped" },
    { value: 6, suffix: "+", label: "Technologies Mastered" },
    { value: 2, suffix: "mo", label: "Internship Experience" },
  ];

  const skills = [
    { icon: Code2, title: t("about.webDev"), description: t("about.webDevDesc") },
    { icon: Palette, title: t("about.uiux"), description: t("about.uiuxDesc") },
    { icon: Database, title: t("about.backend"), description: t("about.backendDesc") },
    { icon: Lightbulb, title: t("about.problemSolving"), description: t("about.problemSolvingDesc") },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-20 grid md:grid-cols-12 gap-6 md:gap-8 items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">(01) &mdash; About</p>
            <h2 className="display-lg text-4xl md:text-6xl lg:text-7xl">
              {t("about.title")}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.lead")}
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-16 md:mb-20 border-y border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 md:py-10 px-4 md:px-6 ${
                index !== 0 ? "md:border-l border-border" : ""
              } ${index === 2 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-border" : ""}`}
            >
              <div className="display-lg text-4xl md:text-6xl mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bio + skill grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5 space-y-5 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-0 border border-border rounded-xl overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-6 md:p-8 relative group transition-colors hover:bg-secondary ${
                  index % 2 === 0 ? "sm:border-r border-border" : ""
                } ${index < 2 ? "border-b border-border" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <skill.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-[11px] font-mono text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base md:text-lg mb-2 uppercase tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
