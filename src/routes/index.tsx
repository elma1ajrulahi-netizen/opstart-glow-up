import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Clock, Users, FileText, Sparkles, MessageCircle, Star, Quote } from "lucide-react";
import logoWordmark from "@/assets/logo-1-wordmark.png";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <ThreeSteps />
      <WhyTrust />
      <Werkwijze />
      <Reviews />
      <Pricing />
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
      href="https://wa.me/32000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat met ons via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-xl shadow-black/15 hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" />
      <span className="text-sm font-medium">WhatsApp</span>
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
          <a href="#werkwijze" className="hover:text-foreground transition-colors">Werkwijze</a>
          <a href="#waarom" className="hover:text-foreground transition-colors">Waarom ons</a>
          <a href="#prijzen" className="hover:text-foreground transition-colors">Prijzen</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="#start">Start je besloten vennootschap</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          15+ jaar ervaring · 500+ ondernemers begeleid
        </span>
        <h1 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
          Je eigen onderneming starten,<br />
          <span className="italic text-primary">eenvoudig en goed begeleid.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Wij richten je besloten vennootschap op van A tot Z. Eén vast contactpersoon, een duidelijke prijs en alles geregeld in 8 tot 15 werkdagen — volledig online vanuit heel België.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
            <a href="#start">
              Start in 3 stappen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-12 px-6 text-foreground hover:bg-transparent hover:text-primary">
            <a href="#stappen">Bekijk hoe het werkt</a>
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
            <div className="font-serif text-3xl text-primary">{i.k}</div>
            <div className="text-sm text-muted-foreground mt-1">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThreeSteps() {
  const steps = [
    {
      n: "01",
      title: "Vertel ons over je plan",
      desc: "Beantwoord een korte vragenlijst online. We weten meteen wat je nodig hebt.",
    },
    {
      n: "02",
      title: "Wij regelen het papierwerk",
      desc: "Financieel plan, statuten en publicatie — alles digitaal in één traject geregeld.",
    },
    {
      n: "03",
      title: "Je BV is klaar",
      desc: "Tussen 8 en 15 werkdagen later ben je officieel ondernemer. Klaar om te starten.",
    },
  ];
  return (
    <section id="stappen" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Hoe het werkt</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">
            Drie stappen. <span className="italic">Geen verrassingen.</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 transition-shadow">
              <div className="font-serif text-sm text-accent">{s.n}</div>
              <h3 className="mt-3 font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7">
            <a href="#start">Start nu <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
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
    <section id="waarom" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Waarom OpstartDesk</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">
            Mensen kiezen ons omdat we <span className="italic">persoonlijk blijven.</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">{title}</h3>
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
    { n: "1", title: "Intakegesprek", desc: "We bespreken je plannen, doelen en situatie. Zo weten we precies wat je nodig hebt." },
    { n: "2", title: "Documenten verzamelen", desc: "Je krijgt een duidelijke checklist. Wij begeleiden je stap voor stap bij het aanleveren." },
    { n: "3", title: "Financieel plan opstellen", desc: "Onze experts maken een gedegen financieel plan dat voldoet aan alle wettelijke vereisten." },
    { n: "4", title: "Statuten & oprichting", desc: "We stellen de statuten op en regelen de officiële oprichting volledig digitaal." },
    { n: "5", title: "Publicatie & afronding", desc: "Publicatie in het Belgisch Staatsblad. Je besloten vennootschap is officieel actief." },
  ];
  return (
    <section id="werkwijze" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Werkwijze</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">
            Onze aanpak, <span className="italic">van begin tot eind.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Een helder traject in vijf stappen. Jij weet altijd waar je staat.</p>
        </div>
        <ol className="mt-12 space-y-4">
          {stappen.map((s) => (
            <li key={s.n} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground font-serif flex items-center justify-center shrink-0">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
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
    {
      name: "Lien D.",
      role: "Oprichter, marketingbureau",
      stars: 5,
      text: "Alles geregeld zonder dat ik mij moest verplaatsen. Mijn vast contactpersoon was telkens snel bereikbaar — echt een verschil met andere kantoren.",
    },
    {
      name: "Mathieu V.",
      role: "Zelfstandig consultant",
      stars: 5,
      text: "Op 9 werkdagen stond mijn besloten vennootschap op poten. Vaste prijs vooraf, geen verrassingen achteraf. Aanrader.",
    },
    {
      name: "Sofie B.",
      role: "Eigenaar webshop",
      stars: 5,
      text: "Ik wist niets van statuten of een financieel plan. Ze legden alles rustig uit en namen het volledige papierwerk over.",
    },
  ];
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Reviews</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">
            Wat ondernemers <span className="italic">over ons zeggen.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Echte ervaringen van mensen die we begeleidden bij de oprichting.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
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
                <div className="font-serif text-base text-foreground">{r.name}</div>
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
      timing: "Klaar in max. 15 werkdagen",
      features: ["Volledig oprichtingstraject", "100% digitaal afgehandeld", "Financieel plan", "Persoonlijke begeleiding"],
      cta: "Kies Premium",
      highlight: false,
    },
    {
      name: "Ultimate",
      timing: "Klaar in max. 8 werkdagen",
      features: ["Alles uit Premium", "Voorrangsbehandeling", "Snellere doorlooptijd", "Directe lijn met je adviseur"],
      cta: "Kies Ultimate",
      highlight: true,
    },
  ];
  return (
    <section id="prijzen" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Trajecten</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">
            Twee duidelijke trajecten.
          </h2>
          <p className="mt-4 text-muted-foreground">Kies wat past bij jouw timing. Geen verborgen kosten.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "rounded-3xl p-8 border " +
                (t.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20"
                  : "bg-card border-border")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className={"font-serif text-3xl " + (t.highlight ? "text-primary-foreground" : "text-foreground")}>
                  {t.name}
                </h3>
                {t.highlight && (
                  <span className="inline-flex items-center gap-1 text-xs bg-accent text-accent-foreground rounded-full px-2.5 py-1">
                    <Sparkles className="h-3 w-3" /> Snelst
                  </span>
                )}
              </div>
              <p className={"mt-2 text-sm " + (t.highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {t.timing}
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={"h-4 w-4 mt-0.5 shrink-0 " + (t.highlight ? "text-accent" : "text-primary")} />
                    <span className={t.highlight ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={
                  "mt-8 w-full rounded-full h-12 " +
                  (t.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90")
                }
              >
                <a href="#start">{t.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    {
      q: "Hoe lang duurt de oprichting echt?",
      a: "Tussen 8 en 15 werkdagen, afhankelijk van het traject dat je kiest en hoe snel jij de gevraagde info aanlevert.",
    },
    {
      q: "Moet ik mij verplaatsen?",
      a: "Nee. Alles verloopt 100% digitaal vanuit heel België — geen verplaatsing nodig.",
    },
    {
      q: "Wat zit er in de prijs?",
      a: "Volledig oprichtingstraject, financieel plan, statuten en publicatie in het Belgisch Staatsblad. Geen verborgen kosten.",
    },
    {
      q: "Wat als ik nog vragen heb tijdens het traject?",
      a: "Je hebt één vast contactpersoon die je kent bij naam. Bereikbaar per e-mail en telefoon.",
    },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">FAQ</span>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl text-foreground">Veelgestelde vragen</h2>
        </div>
        <div className="mt-10 space-y-3">
          {qs.map((item) => (
            <details key={item.q} className="group bg-card border border-border rounded-2xl p-6 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between font-serif text-lg text-foreground">
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
    <section id="start" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif text-4xl lg:text-5xl text-primary-foreground">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
              Begin met 3 korte vragen. Binnen één werkdag horen we van elkaar.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-13 px-8">
              <a href="/start">
                Start je BV in 3 stappen <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
        <div>© {new Date().getFullYear()} OpstartDesk · BV oprichten in België</div>
      </div>
    </footer>
  );
}
