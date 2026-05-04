import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Shield,
  Clock,
  Users,
  FileText,
  Sparkles,
  Star,
  Quote,
  Download,
  Mail,
  Flame,
  Globe,
  Laptop,
  ChevronDown,
} from "lucide-react";
import logoWordmark from "@/assets/logo-opstartbv.png";
import { LANGS, useT, type Lang } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/32491167881";
const EMAIL = "info@opstartdesk.be";
const CHECKLIST_URL = "/checklist.pdf";
const CONTACT_HASH = "#contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Opstartdesk — BV oprichten in België | Company formation & startup services" },
      {
        name: "description",
        content:
          "Opstartdesk begeleidt je bij je business startup en company formation in België. Persoonlijke entrepreneur support en startup services — start a business met één vast contactpersoon, 100% digitaal, in 8 tot 15 werkdagen.",
      },
      {
        name: "keywords",
        content:
          "business startup, company formation, start a business, entrepreneur support, startup services, BV oprichten, vennootschap opstarten, Opstartdesk, België",
      },
      { property: "og:title", content: "Opstartdesk — BV oprichten in België | Company formation & startup services" },
      {
        property: "og:description",
        content:
          "Persoonlijke entrepreneur support voor je business startup. Company formation in België in 8 tot 15 werkdagen, 100% digitaal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Opstartdesk — Company formation & startup services in België" },
      {
        name: "twitter:description",
        content: "Start a business met één vast contactpersoon. 100% digitaal, in 8 tot 15 werkdagen.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <ThreeSteps />
      <GuidedStart />
      <ScarcityStrip />
      <WhyTrust />
      <Werkwijze />
      <Reviews />
      <ContactForm />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.99 1-3.66-.24-.38a9.86 9.86 0 1 1 18.29-5.26 9.86 9.86 0 0 1-9.9 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.45 0 1.45 1.05 2.85 1.2 3.04.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useT();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
        aria-label={t("lang.label")}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[7rem] rounded-xl border border-border bg-card shadow-xl overflow-hidden">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className={
                "flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-secondary transition-colors " +
                (l.code === lang ? "text-accent font-semibold" : "text-foreground")
              }
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const { t } = useT();
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-28 md:h-32 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="Opstartdesk — home">
          <img src={logoWordmark} alt="Opstartdesk — company formation & startup services" className="h-20 md:h-24 w-auto drop-shadow-sm" />
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#stappen" className="hover:text-foreground transition-colors">{t("nav.how")}</a>
          <a href="#guided-start" className="hover:text-foreground transition-colors">{t("nav.find")}</a>
          <a href="#werkwijze" className="hover:text-foreground transition-colors">{t("nav.method")}</a>
          <a href="#waarom" className="hover:text-foreground transition-colors">{t("nav.why")}</a>
          <a href="#faq" className="hover:text-foreground transition-colors">{t("nav.faq")}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <a href={CONTACT_HASH}>{t("nav.cta")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {t("hero.badge.exp")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Globe className="h-3.5 w-3.5 text-accent" /> {t("hero.badge.belgium")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Laptop className="h-3.5 w-3.5 text-accent" /> {t("hero.badge.digital")}
            </span>
          </div>
          <h1 className="mt-5 font-serif font-bold text-4xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
            {t("hero.title.1")}<br />
            <span className="text-accent">{t("hero.title.2")}</span>
          </h1>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t("hero.sub")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 font-semibold">
              <a href="#guided-start">
                {t("hero.cta.start")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6 font-semibold border-border bg-transparent text-foreground hover:bg-secondary">
              <a href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" /> {t("hero.cta.checklist")}
              </a>
            </Button>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-2.5 text-sm text-muted-foreground max-w-2xl text-left">
            {["hero.bullet.1", "hero.bullet.2", "hero.bullet.3", "hero.bullet.4"].map((k) => (
              <li key={k} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {t(k)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ScarcityStrip() {
  const { t } = useT();
  return (
    <section aria-label="Beschikbaarheid" className="py-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent">
              <Flame className="h-4 w-4" />
            </span>
            <div>
              <div className="font-serif font-bold text-base text-foreground tracking-tight">
                {t("scarcity.title")}
              </div>
              <div className="text-sm text-muted-foreground">{t("scarcity.sub")}</div>
            </div>
          </div>
          <Button asChild size="sm" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{t("scarcity.cta")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const { t } = useT();
  const items = [
    { k: "15+", v: t("trust.years") },
    { k: "500+", v: t("trust.entrepreneurs") },
    { k: "100%", v: t("trust.digital") },
    { k: `8 ${t("unit.days")}`, v: t("trust.fastest") },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.k} className="text-center md:text-left">
            <div className="font-serif font-bold text-3xl text-accent">{i.k}</div>
            <div className="text-sm text-muted-foreground mt-1">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThreeSteps() {
  const { t } = useT();
  const steps = [
    { n: "01", title: t("steps.1.title"), desc: t("steps.1.desc") },
    { n: "02", title: t("steps.2.title"), desc: t("steps.2.desc") },
    { n: "03", title: t("steps.3.title"), desc: t("steps.3.desc") },
  ];
  return (
    <section id="stappen" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("steps.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            {t("steps.title")}
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-accent/5 transition-shadow">
              <div className="font-serif font-bold text-sm text-accent">{s.n}</div>
              <h3 className="mt-3 font-serif font-bold text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 font-semibold">
            <a href="#guided-start">{t("steps.cta")} <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

type Speed = "fast" | "month" | "none";
type Activity = "yes" | "maybe" | "no";
type Partners = "alone" | "partners";

function GuidedStart() {
  const { t } = useT();
  const [speed, setSpeed] = useState<Speed | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [partners, setPartners] = useState<Partners | null>(null);

  const recommendation = useMemo(() => {
    if (!speed || !activity || !partners) return null;
    const wantsUltimate = speed === "fast" || activity === "no" || partners === "partners";
    const baseFeatures = [
      t("guided.feat.intro") || "Kennismaking + stappenplan",
    ];
    const common = [
      "Kennismaking + stappenplan",
      "Ontwerp statuten",
      "Financieel plan",
      "Afstemming met notaris + planning",
      "Aanvraag KBO",
      "Aanvraag btw-nummer",
    ];
    void baseFeatures;
    return wantsUltimate
      ? {
          name: "Ultimate" as const,
          timing: t("guided.timing.ultimate"),
          reason: t("guided.reason.ultimate"),
          features: [...common, "UBO", t("guided.timing.ultimate")],
        }
      : {
          name: "Premium" as const,
          timing: t("guided.timing.premium"),
          reason: t("guided.reason.premium"),
          features: [...common, t("guided.timing.premium")],
        };
  }, [speed, activity, partners, t]);

  const reset = () => {
    setSpeed(null);
    setActivity(null);
    setPartners(null);
  };

  const isUltimate = recommendation?.name === "Ultimate";

  return (
    <section id="guided-start" className="py-14 lg:py-20 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("guided.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            {t("guided.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("guided.intro")}</p>
        </div>

        <div className="mt-8 bg-card border border-border rounded-3xl p-7 lg:p-10 space-y-7">
          <QuizStep
            n={1}
            question={t("guided.q1")}
            value={speed}
            onChange={setSpeed}
            options={[
              { key: "fast", label: t("guided.q1.fast") },
              { key: "month", label: t("guided.q1.month") },
              { key: "none", label: t("guided.q1.none") },
            ]}
          />
          <QuizStep
            n={2}
            question={t("guided.q2")}
            value={activity}
            onChange={setActivity}
            options={[
              { key: "yes", label: t("guided.q2.yes") },
              { key: "maybe", label: t("guided.q2.maybe") },
              { key: "no", label: t("guided.q2.no") },
            ]}
          />
          <QuizStep
            n={3}
            question={t("guided.q3")}
            value={partners}
            onChange={setPartners}
            options={[
              { key: "alone", label: t("guided.q3.alone") },
              { key: "partners", label: t("guided.q3.partners") },
            ]}
          />

          {recommendation && (
            <div className="mt-2 rounded-2xl bg-background border border-border p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  {t("guided.recommended")}
                </span>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif font-bold text-3xl tracking-tight">
                    {isUltimate ? (
                      <span style={{ color: "var(--accent)" }}>{recommendation.name}</span>
                    ) : (
                      <span className="text-foreground">{recommendation.name}</span>
                    )}
                  </h3>
                  {isUltimate && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1"
                      style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      <Sparkles className="h-3 w-3" /> {t("guided.fastest")}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{recommendation.timing}</p>
                <p className="mt-4 text-foreground/90 leading-relaxed">{recommendation.reason}</p>

                <div className="mt-6">
                  <div className="font-serif font-bold text-sm text-foreground uppercase tracking-wide">
                    {t("guided.included")}
                  </div>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                    {recommendation.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="mr-2 h-4 w-4" /> {t("guided.cta.whatsapp")}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full font-semibold border-border bg-transparent text-foreground hover:bg-secondary">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Vrijblijvend gesprek — ${recommendation.name}`)}`}>
                      <Mail className="mr-2 h-4 w-4" /> {t("guided.cta.mail")}
                    </a>
                  </Button>
                  <Button onClick={reset} variant="ghost" className="rounded-full text-foreground hover:bg-secondary">
                    {t("guided.cta.reset")}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function QuizStep<T extends string>({
  n,
  question,
  value,
  onChange,
  options,
}: {
  n: number;
  question: string;
  value: T | null;
  onChange: (v: T) => void;
  options: { key: T; label: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-accent/15 text-accent font-serif font-bold flex items-center justify-center text-sm">
          {n}
        </span>
        <h3 className="font-serif font-bold text-lg text-foreground">{question}</h3>
      </div>
      <div className="mt-4 ml-11 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => onChange(o.key)}
              className={
                "rounded-full px-4 py-2 text-sm font-medium border transition-colors " +
                (active
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background text-foreground border-border hover:border-accent/60")
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WhyTrust() {
  const { t } = useT();
  const items = [
    { icon: Users, title: t("why.1.title"), desc: t("why.1.desc") },
    { icon: Shield, title: t("why.2.title"), desc: t("why.2.desc") },
    { icon: Clock, title: t("why.3.title"), desc: t("why.3.desc") },
    { icon: FileText, title: t("why.4.title"), desc: t("why.4.desc") },
  ];
  return (
    <section id="waarom" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("why.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl tracking-tight">
            <span style={{ color: "var(--accent)" }}>{t("why.title")}</span>
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground">{title}</h3>
                <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Werkwijze() {
  const { t } = useT();
  const stappen = [
    { n: "1", title: t("method.1.title"), desc: t("method.1.desc") },
    { n: "2", title: t("method.2.title"), desc: t("method.2.desc") },
    { n: "3", title: t("method.3.title"), desc: t("method.3.desc") },
    { n: "4", title: t("method.4.title"), desc: t("method.4.desc") },
  ];
  return (
    <section id="werkwijze" className="py-14 lg:py-20 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("method.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            {t("method.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("method.intro")}</p>
        </div>
        <ol className="mt-10 space-y-3">
          {stappen.map((s) => (
            <li key={s.n} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground font-serif font-bold flex items-center justify-center shrink-0">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground">{s.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useT();
  const reviews = [
    { name: "C. F.", stars: 5, text: t("review.1") },
    { name: "N. O.", stars: 5, text: t("review.2") },
    { name: "B. B.", stars: 5, text: t("review.3") },
    { name: "E. M.", stars: 5, text: t("review.4") },
  ];
  return (
    <section id="reviews" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("reviews.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            {t("reviews.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("reviews.intro")}</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-2xl p-7 flex flex-col">
              <Quote className="h-6 w-6 text-accent/60" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed flex-1 whitespace-pre-line">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-serif font-bold text-base text-foreground">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useT();
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    gsm: "",
    wanneer: "",
    activiteit: "",
    structuur: "",
    vraag: "",
  });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nieuwe aanvraag van ${form.voornaam} ${form.achternaam}`;
    const body = [
      `Voornaam: ${form.voornaam}`,
      `Achternaam: ${form.achternaam}`,
      `E-mail: ${form.email}`,
      `Gsm: ${form.gsm}`,
      `Wanneer wil je starten: ${form.wanneer}`,
      `Activiteit: ${form.activiteit}`,
      `Oprichting alleen of met vennoten: ${form.structuur}`,
      "",
      "Vraag:",
      form.vraag,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputCls =
    "mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <section id="contact" className="py-14 lg:py-20 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("contact.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="mt-3 text-muted-foreground">{t("contact.intro")}</p>

          <form onSubmit={onSubmit} className="mt-7 bg-card border border-border rounded-3xl p-7 lg:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                {t("contact.firstname")} *
                <input required maxLength={80} value={form.voornaam} onChange={update("voornaam")} className={inputCls} />
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.lastname")} *
                <input required maxLength={80} value={form.achternaam} onChange={update("achternaam")} className={inputCls} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                {t("contact.email")} *
                <input required type="email" maxLength={160} value={form.email} onChange={update("email")} className={inputCls} />
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.phone")} *
                <input required type="tel" maxLength={30} value={form.gsm} onChange={update("gsm")} className={inputCls} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                {t("contact.when")} *
                <select required value={form.wanneer} onChange={update("wanneer")} className={inputCls}>
                  <option value="">{t("contact.select")}</option>
                  <option>{t("contact.when.asap")}</option>
                  <option>{t("contact.when.month")}</option>
                  <option>{t("contact.when.3months")}</option>
                  <option>{t("contact.when.none")}</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.structure")} *
                <select required value={form.structuur} onChange={update("structuur")} className={inputCls}>
                  <option value="">{t("contact.select")}</option>
                  <option>{t("contact.structure.alone")}</option>
                  <option>{t("contact.structure.partners")}</option>
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              {t("contact.activity")} *
              <input required maxLength={200} value={form.activiteit} onChange={update("activiteit")} className={inputCls} />
            </label>
            <label className="block text-sm font-medium text-foreground">
              {t("contact.question")}
              <textarea rows={4} maxLength={1500} value={form.vraag} onChange={update("vraag")} placeholder={t("contact.question.placeholder")} className={inputCls} />
            </label>
            <p className="text-xs text-muted-foreground">
              {t("contact.privacy")}{" "}
              <Link to="/privacy" className="text-accent underline-offset-4 hover:underline">
                {t("contact.privacy.link")}
              </Link>.
            </p>
            <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 font-semibold">
              {t("contact.submit")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-serif font-bold text-xl text-foreground tracking-tight">{t("contact.quick.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("contact.quick.intro")}</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild className="rounded-full justify-start font-semibold bg-[#25D366] text-white hover:bg-[#1ebe5a]">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4" /> {t("contact.quick.whatsapp")}
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full justify-start font-semibold bg-transparent text-foreground hover:bg-secondary">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> {t("contact.quick.mail")}
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-serif font-bold text-xl text-foreground tracking-tight">{t("contact.checklist.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("contact.checklist.intro")}</p>
            <Button asChild className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
              <a href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-4" /> {t("contact.checklist.cta")}
              </a>
            </Button>
          </div>
          <div className="bg-secondary/60 border border-border rounded-2xl p-6">
            <div className="text-sm font-semibold text-foreground">{t("contact.bv.fast")}</div>
            <h4 className="mt-3 font-serif font-bold text-lg text-foreground tracking-tight">{t("contact.bv.title")}</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {["contact.bv.1", "contact.bv.2", "contact.bv.3", "contact.bv.4"].map((k) => (
                <li key={k} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {t(k)}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useT();
  const qs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];
  return (
    <section id="faq" className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{t("faq.eyebrow")}</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">{t("faq.title")}</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("faq.intro.1")}{" "}
            <a className="text-accent underline-offset-4 hover:underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {t("faq.intro.2")}
            </a>.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          {qs.map((item) => (
            <details key={item.q} className="group bg-card border border-border rounded-2xl p-6 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between font-serif font-bold text-lg text-foreground">
                {item.q}
                <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useT();
  return (
    <section id="start" className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] bg-card border border-border p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t("cta.intro")}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5a] h-14 px-8 font-semibold text-base">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={t("cta.whatsapp")}>
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> {t("cta.whatsapp")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-7 font-semibold border-border bg-transparent text-foreground hover:bg-secondary">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> {t("cta.mail")}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{t("cta.foot")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <img src={logoWordmark} alt="Opstartdesk — company formation in België" className="h-16 md:h-20 w-auto" />
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground inline-flex items-center gap-1.5">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
          <Link to="/privacy" className="hover:text-foreground">{t("footer.privacy")}</Link>
        </div>
        <div>© {new Date().getFullYear()} Opstartdesk</div>
      </div>
    </footer>
  );
}
