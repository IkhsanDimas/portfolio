import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  icon: string;
  tint: string;
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tint: "skill-tint-cyan" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", tint: "skill-tint-blue" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", tint: "skill-tint-yellow" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", tint: "skill-tint-cyan" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", tint: "skill-tint-gray" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", tint: "skill-tint-orange" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", tint: "skill-tint-blue" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", tint: "skill-tint-green" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", tint: "skill-tint-green" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", tint: "skill-tint-blue" },
    ],
  },
  {
    title: "Tools & Platform",
    skills: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", tint: "skill-tint-gray" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", tint: "skill-tint-blue" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", tint: "skill-tint-gray" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
};

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative mesh-gradient-2">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("skills.title")} <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            {t("skills.description")}
          </p>
        </motion.div>

        {/* Categorized Skills */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 group cursor-default ${skill.tint}`}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
