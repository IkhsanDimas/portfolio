import { Code2, Palette, Database, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

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
            <p className="eyebrow mb-4">{t("about.eyebrow")}</p>
            <h2 className="display-lg text-[clamp(2rem,7vw,5rem)]">
              {t("about.title")}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.lead")}
            </p>
          </div>
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

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 md:p-8 relative group rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-foreground/20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background border border-transparent group-hover:border-foreground">
                    <skill.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/40 group-hover:text-muted-foreground transition-all">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base md:text-lg mb-2.5 tracking-tight">
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
