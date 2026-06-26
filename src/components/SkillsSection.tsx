import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platform",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6 relative">
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
            <p className="eyebrow mb-4">{t("eyebrow.skills")}</p>
            <h2 className="display-lg text-[clamp(2rem,7vw,5rem)]">
              {t("skills.title")} {t("skills.titleHighlight")}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("skills.description")}
            </p>
          </div>
        </motion.div>

        {/* Skills — 3 numbered rows */}
        <div className="border-t border-border">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="border-b border-border py-8 md:py-10 grid md:grid-cols-12 gap-6 md:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="text-xs font-mono text-muted-foreground">
                  0{catIndex + 1}
                </span>
                <h3 className="display-lg text-2xl md:text-3xl">
                  {category.title}
                </h3>
              </div>

              <motion.div
                className="md:col-span-8 flex flex-wrap gap-2 md:gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-card hover:border-foreground transition-colors duration-200 cursor-default"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider">
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
