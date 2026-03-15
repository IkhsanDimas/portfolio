import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ContactSection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "ikhsandimastianto@gmail.com",
      href: "mailto:ikhsandimastianto@gmail.com",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Indonesia",
      href: "#",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4698293d-4688-4b07-ae0d-18273a1cf89d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Portfolio dari ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t("contact.success"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative mesh-gradient-2">
      <div className="container px-4 md:px-6">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="glass-card-elevated p-5 sm:p-6 md:p-8 rounded-2xl space-y-4 sm:space-y-6">
              <h3 className="font-display text-xl font-semibold">
                {t("contact.connect")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("contact.connectDesc")}
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.color} border border-border/50 hover:border-primary/30 transition-all duration-300`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-background/80 flex items-center justify-center shadow-sm">
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card-elevated p-5 sm:p-6 md:p-8 rounded-2xl space-y-4 sm:space-y-5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block text-muted-foreground">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    placeholder={t("contact.namePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl h-11 transition-colors"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block text-muted-foreground">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl h-11 transition-colors"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block text-muted-foreground">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl resize-none transition-colors"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl h-12 font-semibold transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.send")}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
