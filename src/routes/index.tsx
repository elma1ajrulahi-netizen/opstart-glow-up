import { createFileRoute } from "@tanstack/react-router";
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
  Phone,
  Mail,
  Flame,
} from "lucide-react";
import logoWordmark from "@/assets/logo-1-wordmark.png";

const PHONE = "+32491167881";
const PHONE_DISPLAY = "+32 491 16 78 81";
const WHATSAPP_URL = "https://wa.me/32491167881";
const EMAIL = "info@opstartdesk.be";
const CHECKLIST_URL = "/checklist.pdf";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OpstartDesk — Je besloten vennootschap opstarten, persoonlijk begeleid" },
      {
        name: "description",
        content:
          "Een vast contactpersoon, één duidelijke prijs en je besloten vennootschap in 8 tot 15 werkdagen opgericht. 100% digitaal vanuit heel België.",
      },
    ],
  }),
});

function Index() {
  // sections rendered below
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
      <Pricing />
      <ContactForm />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat met ons via WhatsApp op ${PHONE_DISPLAY}`}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-xl shadow-black/15 hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.99 1-3.66-.24-.38a9.86 9.86 0 1 1 18.29-5.26 9.86 9.86 0 0 1-9.9 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.45 0 1.45 1.05 2.85 1.2 3.04.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
      <span className="text-sm font-medium leading-tight">
        WhatsApp
        <span className="block text-[10px] opacity-90 font-normal">{PHONE_DISPLAY}</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoWordmark} alt="OpstartDesk" className="h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#stappen" className="hover:text-foreground transition-colors">Hoe het werkt</a>
          <a href="#guided-start" className="hover:text-foreground transition-colors">Vind je traject</a>
          <a href="#werkwijze" className="hover:text-foreground transition-colors">Werkwijze</a>
          <a href="#prijzen" className="hover:text-foreground transition-colors">Prijzen</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          <a href="#contact">Start je BV</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          15+ jaar ervaring · 500+ ondernemers begeleid
        </span>
        <h1 className="mt-6 font-serif font-semibold text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
          Je eigen onderneming starten,<br />
          <span className="italic font-medium text-primary">eenvoudig en goed begeleid.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Wij richten je besloten vennootschap op van A tot Z. Eén vast contactpersoon, een duidelijke prijs en alles geregeld in 8 tot 15 werkdagen — volledig online vanuit heel België.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 font-semibold">
            <a href="#guided-start">
              Start in 3 stappen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6 font-semibold border-border hover:bg-secondary">
            <a href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download checklist
            </a>
          </Button>
        </div>
        <ul className="mt-10 grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground max-w-xl mx-auto text-left">
          {["Transparante prijs, geen verrassingen", "100% digitaal, geen verplaatsing nodig", "Vast aanspreekpunt per e-mail & telefoon", "Begeleiding van A tot Z"].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScarcityStrip() {
  return (
    <section aria-label="Beschikbaarheid" className="py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Flame className="h-4 w-4" />
            </span>
            <div>
              <div className="font-serif font-semibold text-base text-foreground tracking-tight">
                Nog 2 plaatsen vrij deze week
              </div>
              <div className="text-sm text-muted-foreground">
                Laatste oprichting · 3 dagen geleden — boek tijdig je kennismaking.
              </div>
            </div>
          </div>
          <Button asChild size="sm" variant="outline" className="rounded-full border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
            <a href="#contact">Reserveer een gesprek</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { k: "15+", v: "jaar ervaring" },
    { k: "500+", v: "ondernemers begeleid" },
    { k: "100%", v: "digitaal traject" },
    { k: "8 dgn", v: "snelste oprichting" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.k} className="text-center md:text-left">
            <div className="font-serif font-semibold text-3xl text-primary">{i.k}</div>
            <div className="text-sm text-muted-foreground mt-1">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThreeSteps() {
  const steps = [
    { n: "01", title: "Vertel ons over je plan", desc: "Beantwoord een korte vragenlijst online. We weten meteen wat je nodig hebt." },
    { n: "02", title: "Wij regelen de administratie", desc: "Financieel plan, statuten en publicatie — alles digitaal in één traject geregeld." },
    { n: "03", title: "Je BV is klaar", desc: "Tussen 8 en 15 werkdagen later ben je officieel ondernemer. Klaar om te starten." },
  ];
  return (
    <section id="stappen" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Hoe het werkt</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            Drie stappen. <span className="italic font-semibold">Geen verrassingen.</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-shadow">
              <div className="font-serif font-semibold text-sm text-accent">{s.n}</div>
              <h3 className="mt-3 font-serif font-semibold text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 font-semibold">
            <a href="#guided-start">Start nu <ArrowRight className="ml-2 h-4 w-4" /></a>
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
  const [speed, setSpeed] = useState<Speed | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [partners, setPartners] = useState<Partners | null>(null);

  const recommendation = useMemo(() => {
    if (!speed || !activity || !partners) return null;
    const wantsUltimate =
      speed === "fast" || activity === "no" || partners === "partners";
    return wantsUltimate
      ? {
          name: "Ultimate",
          price: "€ 2.350 + btw",
          timing: "Klaar in max. 8 werkdagen",
          reason:
            "Op basis van je antwoorden raden we Ultimate aan: voorrangsbehandeling, UBO inbegrepen en de snelste doorlooptijd.",
        }
      : {
          name: "Premium",
          price: "€ 2.050 + btw",
          timing: "Klaar in max. 15 werkdagen",
          reason:
            "Op basis van je antwoorden volstaat Premium ruimschoots — correct starten zonder tijdsdruk, met alles erop en eraan.",
        };
  }, [speed, activity, partners]);

  const reset = () => {
    setSpeed(null);
    setActivity(null);
    setPartners(null);
  };

  return (
    <section id="guided-start" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Guided start</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            3 vragen, <span className="italic font-semibold">jouw ideale traject.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Beantwoord drie korte vragen — wij tonen direct welk pakket bij jouw situatie past en wat het kost.
          </p>
        </div>

        <div className="mt-10 bg-card border border-border rounded-3xl p-7 lg:p-10 space-y-8">
          <QuizStep
            n={1}
            question="Hoe snel wil je starten?"
            value={speed}
            onChange={setSpeed}
            options={[
              { key: "fast", label: "Zo snel mogelijk" },
              { key: "month", label: "Binnen 1 maand" },
              { key: "none", label: "Geen haast" },
            ]}
          />
          <QuizStep
            n={2}
            question="Ken je al je activiteit?"
            value={activity}
            onChange={setActivity}
            options={[
              { key: "yes", label: "Ja, ik weet exact wat" },
              { key: "maybe", label: "Ongeveer, nog vragen" },
              { key: "no", label: "Nee, ik wil begeleiding" },
            ]}
          />
          <QuizStep
            n={3}
            question="Richt je alleen op of met vennoten?"
            value={partners}
            onChange={setPartners}
            options={[
              { key: "alone", label: "Alleen" },
              { key: "partners", label: "Met vennoten" },
            ]}
          />

          {recommendation && (
            <div className="mt-2 rounded-2xl bg-primary text-primary-foreground p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Aanbevolen traject
                </span>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif font-semibold text-3xl">{recommendation.name}</h3>
                  <span className="font-serif font-semibold text-2xl text-accent">
                    {recommendation.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-primary-foreground/80">{recommendation.timing}</p>
                <p className="mt-4 text-primary-foreground/90 leading-relaxed">{recommendation.reason}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    <a href={`#contact?pakket=${recommendation.name}`}>
                      Vraag een vrijblijvend gesprek <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    onClick={reset}
                    variant="ghost"
                    className="rounded-full text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Opnieuw beginnen
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
        <span className="h-8 w-8 rounded-full bg-primary/10 text-primary font-serif font-semibold flex items-center justify-center text-sm">
          {n}
        </span>
        <h3 className="font-serif font-semibold text-lg text-foreground">{question}</h3>
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
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/50")
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
  const items = [
    { icon: Users, title: "Eén vast contactpersoon", desc: "Geen callcenters, geen wachtrijen. Iemand die je kent bij naam." },
    { icon: Shield, title: "15 jaar accountancy", desc: "Echte expertise, niet zomaar een online formulier." },
    { icon: Clock, title: "Klaar in 8–15 werkdagen", desc: "Wij bewaken het tempo, jij focust op ondernemen." },
    { icon: FileText, title: "Vaste prijs vooraf", desc: "Wat je ziet is wat je betaalt. Geen verborgen kosten." },
  ];
  return (
    <section id="waarom" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Waarom OpstartDesk</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            Mensen kiezen ons omdat we <span className="italic font-semibold">persoonlijk blijven.</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-xl text-foreground">{title}</h3>
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
  const stappen = [
    { n: "1", title: "Kennismaking", desc: "Gratis en vrijblijvend gesprek. We bespreken jouw plannen en beantwoorden al je vragen." },
    { n: "2", title: "Voorbereiding", desc: "Wij verzamelen alle documenten, stellen het financieel plan op en bereiden de oprichtingsakte voor." },
    { n: "3", title: "Oprichting", desc: "De notaris passeert de akte via volmacht — jij hoeft nergens naartoe. 100% digitaal." },
    { n: "4", title: "Jouw BV is actief", desc: "Publicatie in het Belgisch Staatsblad, KBO-registratie en activering. Officieel ondernemer." },
  ];
  return (
    <section id="werkwijze" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Werkwijze</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            Onze aanpak, <span className="italic font-semibold">van begin tot eind.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Een helder traject in vier stappen. Jij weet altijd waar je staat.</p>
        </div>
        <ol className="mt-12 space-y-4">
          {stappen.map((s) => (
            <li key={s.n} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground font-serif font-semibold flex items-center justify-center shrink-0">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif font-semibold text-xl text-foreground">{s.title}</h3>
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
  const reviews = [
    { name: "Pieter V.", role: "E-commerce ondernemer", stars: 5, text: "Ik had geen idee waar te beginnen met mijn besloten vennootschap. OpstartDesk heeft alles geregeld. Binnen 10 werkdagen had ik mijn BV. Top service!" },
    { name: "Sarah D.", role: "Freelance consultant", stars: 5, text: "Heel professioneel en persoonlijk. Elke vraag werd snel beantwoord. Ik raad het iedereen aan die een besloten vennootschap wil oprichten." },
    { name: "Mohamed B.", role: "Horeca-uitbater", stars: 5, text: "Het financieel plan was uitstekend opgesteld. Alles verliep vlot en digitaal. Geen gedoe met papieren of verplaatsingen." },
    { name: "Lisa M.", role: "IT-startup founder", stars: 5, text: "Ultimate pakket gekozen en binnen 6 werkdagen was alles in orde. Ongelooflijk snel en correct. Dankjewel OpstartDesk!" },
  ];
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Klantenervaring</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            Wat klanten <span className="italic font-semibold">over ons zeggen.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Echte ervaringen van ondernemers die we begeleidden bij hun oprichting.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-2xl p-7 flex flex-col">
              <Quote className="h-6 w-6 text-primary/40" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-serif font-semibold text-base text-foreground">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Premium",
      price: "€ 2.050",
      vat: "+ btw",
      timing: "Klaar in max. 15 werkdagen",
      tagline: "Correct starten zonder tijdsdruk.",
      features: [
        "Kennismaking + stappenplan",
        "Ontwerp statuten",
        "Financieel plan",
        "Afstemming met notaris + planning",
        "Aanvraag KBO",
        "Aanvraag btw-nummer",
        "Oprichting binnen 15 werkdagen (max)",
      ],
      highlight: false,
    },
    {
      name: "Ultimate",
      price: "€ 2.350",
      vat: "+ btw",
      timing: "Klaar in max. 8 werkdagen",
      tagline: "Snel starten, zonder vertraging.",
      features: [
        "Kennismaking + stappenplan",
        "Ontwerp statuten",
        "Financieel plan",
        "Afstemming met notaris + planning",
        "Aanvraag KBO",
        "Aanvraag btw-nummer",
        "UBO-registratie inbegrepen",
        "Oprichting binnen 8 werkdagen",
      ],
      highlight: true,
    },
  ];

  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  return (
    <section id="prijzen" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Trajecten</span>
          <h2 className="mt-3 font-serif font-bold text-4xl lg:text-5xl text-foreground tracking-tight">
            Twee duidelijke trajecten.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Klik op "Bekijk prijs" om de prijs en de inhoud van het traject te zien — geen verborgen kosten.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tiers.map((t) => {
            const isOpen = !!revealed[t.name];
            return (
              <div
                key={t.name}
                className={
                  "rounded-3xl p-8 border transition-shadow " +
                  (t.highlight
                    ? "bg-card border-accent/40 shadow-2xl shadow-accent/10"
                    : "bg-card border-border")
                }
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-3xl tracking-tight">
                    {t.highlight ? (
                      <span style={{ color: "var(--gold)" }}>{t.name}</span>
                    ) : (
                      <span className="text-foreground">{t.name}</span>
                    )}
                  </h3>
                  {t.highlight && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1"
                      style={{ background: "var(--gold)", color: "var(--accent-foreground)" }}
                    >
                      <Sparkles className="h-3 w-3" /> Snelst
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.timing} · {t.tagline}
                </p>

                {isOpen ? (
                  <>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span
                        className={"font-serif font-bold text-4xl " + (t.highlight ? "" : "text-primary")}
                        style={t.highlight ? { color: "var(--gold)" } : undefined}
                      >
                        {t.price}
                      </span>
                      <span className="text-sm text-muted-foreground">{t.vat}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check
                            className={"h-4 w-4 mt-0.5 shrink-0 " + (t.highlight ? "" : "text-primary")}
                            style={t.highlight ? { color: "var(--gold)" } : undefined}
                          />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="mt-6 rounded-2xl border border-dashed border-border bg-background/30 px-5 py-6 text-sm text-muted-foreground">
                    Prijs en inhoud van dit traject zijn verborgen. Klik op <span className="text-foreground font-semibold">Bekijk prijs</span> om alles te tonen.
                  </div>
                )}

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={`#contact?pakket=${t.name}`}>Vraag een vrijblijvend gesprek</a>
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={() => setRevealed((r) => ({ ...r, [t.name]: !r[t.name] }))}
                    className="rounded-full h-12 font-semibold border-border hover:bg-secondary"
                  >
                    {isOpen ? "Verberg prijs" : "Bekijk prijs"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
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
    "mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Contact</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">
            Start vandaag met <span className="italic">jouw BV</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vul het formulier in en wij nemen snel contact op voor een vrijblijvend gesprek.
          </p>

          <form onSubmit={onSubmit} className="mt-8 bg-card border border-border rounded-3xl p-7 lg:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                Voornaam *
                <input required maxLength={80} value={form.voornaam} onChange={update("voornaam")} placeholder="Jan" className={inputCls} />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Achternaam *
                <input required maxLength={80} value={form.achternaam} onChange={update("achternaam")} placeholder="Janssens" className={inputCls} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                E-mail *
                <input required type="email" maxLength={160} value={form.email} onChange={update("email")} placeholder="jan@bedrijf.be" className={inputCls} />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Gsm-nummer *
                <input required type="tel" maxLength={30} value={form.gsm} onChange={update("gsm")} placeholder="04xx xx xx xx" className={inputCls} />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-foreground">
                Wanneer wil je starten? *
                <select required value={form.wanneer} onChange={update("wanneer")} className={inputCls}>
                  <option value="">Selecteer</option>
                  <option>Zo snel mogelijk</option>
                  <option>Binnen 1 maand</option>
                  <option>Binnen 3 maanden</option>
                  <option>Geen haast</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-foreground">
                Oprichting alleen of met vennoten *
                <select required value={form.structuur} onChange={update("structuur")} className={inputCls}>
                  <option value="">Selecteer</option>
                  <option>Alleen</option>
                  <option>Met vennoten</option>
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              Welke activiteit start je? *
              <input required maxLength={200} value={form.activiteit} onChange={update("activiteit")} placeholder="bv. IT-consulting, horeca, e-commerce..." className={inputCls} />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Jouw vraag
              <textarea rows={4} maxLength={1500} value={form.vraag} onChange={update("vraag")} placeholder="Waarmee kunnen we je helpen?" className={inputCls} />
            </label>
            <p className="text-xs text-muted-foreground">
              Door dit formulier te versturen ga je akkoord met onze{" "}
              <a href="https://opstartdesk.be/privacy.html" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                privacyverklaring
              </a>.
            </p>
            <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 font-semibold">
              Verstuur bericht <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-serif font-semibold text-xl text-foreground tracking-tight">Snel contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">Wil je sneller schakelen? Stuur ons kort via WhatsApp of mail ons je vraag.</p>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="outline" className="rounded-full justify-start font-semibold">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" /> WhatsApp ons
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full justify-start font-semibold">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> Mail ons
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-serif font-semibold text-xl text-foreground tracking-tight">Gratis BV-checklist</h3>
            <p className="mt-2 text-sm text-muted-foreground">Download onze starters-checklist en start meteen met de juiste documenten.</p>
            <Button asChild className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
              <a href={CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download checklist
              </a>
            </Button>
          </div>
          <div className="bg-secondary/60 border border-border rounded-2xl p-6">
            <div className="text-sm font-semibold text-foreground">⚡ BV oprichting meestal binnen 5 werkdagen</div>
            <h4 className="mt-3 font-serif font-semibold text-lg text-foreground tracking-tight">Waarom kiezen voor een BV</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              {[
                "Bescherming van je privévermogen",
                "Fiscale optimalisatie mogelijk",
                "Professionele uitstraling",
                "Makkelijker samenwerken met partners",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {x}
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
  const qs = [
    { q: "Moet ik mij fysiek verplaatsen voor de oprichting?", a: "Nee. Het volledige traject is 100% digitaal. Documenten worden digitaal voorbereid en ondertekend." },
    { q: "Is OpstartDesk beschikbaar in heel België?", a: "Ja. We werken met ondernemers uit Vlaanderen, Brussel en Wallonië. Omdat alles digitaal verloopt, maakt je locatie niet uit." },
    { q: "Hoe lang duurt het om een BV op te richten?", a: "Premium: max. 15 werkdagen. Ultimate: max. 8 werkdagen. De exacte timing hangt af van hoe snel jij documenten aanlevert en de bank meewerkt." },
    { q: "Heb ik nog startkapitaal nodig?", a: "Er is geen vast minimum meer voor een BV. Je hebt wel een toereikend aanvangsvermogen nodig dat past bij je activiteit, onderbouwd in een financieel plan." },
    { q: "Wat is het verschil tussen Premium en Ultimate?", a: "Snelheid. Ultimate bevat ook prioritaire behandeling, snellere notarisafhandeling, versnelde publicatie in het Belgisch Staatsblad en UBO-aangifte." },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">FAQ</span>
          <h2 className="mt-3 font-serif font-semibold text-4xl lg:text-5xl text-foreground tracking-tight">Veelgestelde vragen</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Speciale situatie? Stuur gerust een{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp-bericht
            </a>.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {qs.map((item) => (
            <details key={item.q} className="group bg-card border border-border rounded-2xl p-6 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between font-serif font-semibold text-lg text-foreground">
                {item.q}
                <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
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
  return (
    <section id="start" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif font-semibold text-4xl lg:text-5xl text-primary-foreground tracking-tight">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
              Vandaag nog starten? Vraag een vrijblijvend gesprek — nog 2 plaatsen vrij deze week.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 font-semibold">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp ons <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 font-semibold border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={`tel:${PHONE}`}>
                  <Phone className="mr-2 h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> {EMAIL}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/60">Geen verplaatsing nodig · Vaste prijs · Vast contactpersoon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <img src={logoWordmark} alt="OpstartDesk" className="h-6 w-auto" />
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={`tel:${PHONE}`} className="hover:text-foreground">{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
          <a href="https://opstartdesk.be/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Privacy</a>
        </div>
        <div>© {new Date().getFullYear()} OpstartDesk</div>
      </div>
    </footer>
  );
}
