import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, Loader2, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactSection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "ikhsandimastianto@gmail.com",
      href: "mailto:ikhsandimastianto@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("hero.location"),
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6 relative">
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
            <p className="eyebrow mb-4">{t("eyebrow.contact")}</p>
            <h2 className="display-lg text-[clamp(2rem,7vw,5rem)]">
              {t("contact.title")} {t("contact.titleHighlight")}
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("contact.description")}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left — info */}
          <motion.div className="lg:col-span-5 space-y-10" variants={itemVariants}>
            <div>
              <h3 className="display-lg text-2xl md:text-3xl mb-4">
                {t("contact.connect")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                {t("contact.connectDesc")}
              </p>
            </div>

            <div className="space-y-0 border-t border-border">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group border-b border-border py-5 flex items-center justify-between gap-4 hover:px-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-display font-bold text-sm md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-6">
              <button
                onClick={() => window.open("https://wa.me/6283165359785?text=Halo%20Ikhsan!%20Saya%20tertarik%20dengan%20portfolio%20Anda.", "_blank")}
                className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
                style={{ background: 'hsl(var(--highlight))', color: 'hsl(var(--highlight-foreground))' }}
              >
                <MessageCircle className="w-4 h-4" />
                {t("cta.chatWhatsApp")}
                <span className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </div>

            {/* Fun note */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                {t("contact.responseTime")}
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-0">
              <InputRow
                id="name"
                label={t("contact.name")}
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                disabled={isLoading}
              />
              <InputRow
                id="email"
                type="email"
                label={t("contact.email")}
                placeholder={t("contact.emailPlaceholder")}
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                disabled={isLoading}
              />
              <TextareaRow
                id="message"
                label={t("contact.message")}
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
                disabled={isLoading}
              />

              <div className="pt-8">
                <Button
                  type="submit"
                  className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity h-auto"
                  style={{ background: 'hsl(var(--highlight))', color: 'hsl(var(--highlight-foreground))' }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.send")}
                      <span className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center">
                        <Send className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                      </span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/** ---------- Underline form primitives ---------- */
const InputRow = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  disabled?: boolean;
}) => (
  <div className="border-b border-border py-5 grid md:grid-cols-12 items-start md:items-center gap-2 md:gap-6">
    <label
      htmlFor={id}
      className="md:col-span-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="md:col-span-9 bg-transparent outline-none text-lg md:text-xl font-display placeholder:text-muted-foreground/50 disabled:opacity-50"
    />
  </div>
);

const TextareaRow = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) => (
  <div className="border-b border-border py-5 grid md:grid-cols-12 items-start gap-2 md:gap-6">
    <label
      htmlFor={id}
      className="md:col-span-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold"
    >
      {label}
    </label>
    <textarea
      id={id}
      required
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="md:col-span-9 bg-transparent outline-none text-base md:text-lg font-display placeholder:text-muted-foreground/50 resize-none disabled:opacity-50 leading-relaxed"
    />
  </div>
);

export default ContactSection;
