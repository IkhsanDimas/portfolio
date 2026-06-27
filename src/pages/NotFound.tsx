import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <p className="eyebrow mb-6">{t("notFound.eyebrow")}</p>
        <h1 className="display-xl text-[clamp(5rem,25vw,12rem)] mb-6 leading-none">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {t("notFound.message")}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
          style={{ background: 'hsl(var(--highlight))', color: 'hsl(var(--highlight-foreground))' }}
        >
          {t("notFound.returnHome")}
          <span className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
