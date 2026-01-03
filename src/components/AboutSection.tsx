import { Code2, Palette, Database, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code2,
      title: t("about.webDev"),
      description: t("about.webDevDesc"),
    },
    {
      icon: Palette,
      title: t("about.uiux"),
      description: t("about.uiuxDesc"),
    },
    {
      icon: Database,
      title: t("about.backend"),
      description: t("about.backendDesc"),
    },
    {
      icon: Lightbulb,
      title: t("about.problemSolving"),
      description: t("about.problemSolvingDesc"),
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
