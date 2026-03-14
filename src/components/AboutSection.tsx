import { Code2, Palette, Database, Lightbulb, TrendingUp, Award } from "lucide-react";
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
    const duration = 1500;
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
    { value: 3, suffix: "+", label: "Projects Built", icon: Award },
    { value: 6, suffix: "+", label: "Technologies", icon: TrendingUp },
  ];

  const skills = [
    {
      icon: Code2,
      title: t("about.webDev"),
      description: t("about.webDevDesc"),
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Palette,
      title: t("about.uiux"),
      description: t("about.uiuxDesc"),
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: Database,
      title: t("about.backend"),
      description: t("about.backendDesc"),
      gradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: Lightbulb,
      title: t("about.problemSolving"),
      description: t("about.problemSolvingDesc"),
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 mesh-gradient-1 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left aligned */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{t("about.title")}</h2>
        </motion.div>

        {/* Stats Counter Row */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card-elevated rounded-2xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${skill.gradient} border border-border/50 hover:border-primary/30 transition-all duration-300 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${skill.iconColor}`}>
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{skill.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
