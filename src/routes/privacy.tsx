import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageContext";

const EMAIL = "info@opstartbv.be";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — OpstartBV" },
      { name: "description", content: "Privacyverklaring van OpstartBV." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t("privacy.back")}
        </Link>
        <h1 className="mt-8 font-serif font-bold text-4xl lg:text-5xl tracking-tight">
          {t("privacy.title")}
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">{t("privacy.intro")}</p>

        <div className="mt-10 bg-card border border-border rounded-2xl p-7">
          <h2 className="font-serif font-bold text-xl">{t("privacy.contact.title")}</h2>
          <p className="mt-3 text-muted-foreground">
            {t("privacy.contact.body")}{" "}
            <a href={`mailto:${EMAIL}`} className="text-accent underline-offset-4 hover:underline">
              {EMAIL}
            </a>
            .
          </p>
          <Button asChild className="mt-5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" /> {EMAIL}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
