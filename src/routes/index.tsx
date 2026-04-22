import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Star, Plus } from "lucide-react";
import logoWordmark from "@/assets/logo-3-monogram.png";

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
      <Marquee />
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
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
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
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:pt-20 pb-16 lg:pb-24">
        {/* Editorial masthead */}
        <div className="flex items-center justify-between border-b border-foreground/20 pb-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>N° 01 — Editie 2025</span>
          <span className="hidden sm:inline">Ondernemen in België</span>
          <span>Brussel · Antwerpen · Gent</span>
        </div>

        <div className="mt-10 lg:mt-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[15vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.9] tracking-tight text-foreground">
              Start je <span className="italic text-primary">besloten</span><br />
              vennootschap.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed border-l-2 border-accent pl-5">
              Eén vast contactpersoon. Eén duidelijke prijs. Je besloten vennootschap opgericht in 8 tot 15 werkdagen — volledig online, vanuit heel België.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
                <a href="#start">
                  Start in 3 stappen <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 px-2 text-foreground hover:bg-transparent hover:text-primary underline underline-offset-4 decoration-foreground/30 hover:decoration-primary">
                <a href="#stappen">Bekijk hoe het werkt</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-foreground/20">
          {[
            { k: "15+", v: "jaar ervaring" },
            { k: "500+", v: "ondernemers begeleid" },
            { k: "100%", v: "digitaal traject" },
            { k: "8 dgn", v: "snelste oprichting" },
          ].map((i, idx) => (
            <div key={i.k} className={"py-6 lg:py-8 px-4 lg:px-6 " + (idx > 0 ? "lg:border-l border-foreground/20" : "")}>
              <div className="font-serif text-5xl lg:text-6xl text-foreground">{i.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{i.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Vaste prijs", "Vast contactpersoon", "100% digitaal", "Geen verplaatsing", "8 tot 15 werkdagen", "Begeleiding A tot Z"];
  return (
    <section className="border-y border-foreground/20 bg-primary text-primary-foreground overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-serif italic text-2xl flex items-center gap-12">
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </section>
  );
}

function ThreeSteps() {
  const steps = [
    { n: "01", title: "Vertel ons over je plan", desc: "Beantwoord een korte vragenlijst online. We weten meteen wat je nodig hebt." },
    { n: "02", title: "Wij regelen het papierwerk", desc: "Financieel plan, statuten en publicatie — alles digitaal in één traject geregeld." },
    { n: "03", title: "Je besloten vennootschap is klaar", desc: "Tussen 8 en 15 werkdagen later ben je officieel ondernemer. Klaar om te starten." },
  ];
  return (
    <section id="stappen" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Hoe het werkt</span>
            <h2 className="mt-4 font-serif text-5xl lg:text-7xl text-foreground leading-[0.95]">
              Drie stappen.<br /><span className="italic">Geen verrassingen.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-muted-foreground leading-relaxed">
              Een rechttoe-rechtaan traject zonder verborgen kosten. Wij doen het werk; jij houdt het overzicht.
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/20">
          {steps.map((s) => (
            <div key={s.n} className="grid lg:grid-cols-12 gap-6 py-10 border-b border-foreground/20 group hover:bg-secondary/50 transition-colors px-2 -mx-2">
              <div className="lg:col-span-2 font-serif text-6xl lg:text-7xl text-accent leading-none">{s.n}</div>
              <h3 className="lg:col-span-4 font-serif text-3xl lg:text-4xl text-foreground leading-tight">{s.title}</h3>
              <p className="lg:col-span-5 text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
              <div className="lg:col-span-1 flex lg:justify-end items-start">
                <ArrowUpRight className="h-6 w-6 text-foreground/40 group-hover:text-primary group-hover:rotate-45 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
    { title: "Eén vast contactpersoon", desc: "Geen callcenters, geen wachtrijen. Iemand die je kent bij naam." },
    { title: "15 jaar accountancy", desc: "Echte expertise, niet zomaar een online formulier." },
    { title: "Klaar in 8–15 werkdagen", desc: "Wij bewaken het tempo, jij focust op ondernemen." },
    { title: "Vaste prijs vooraf", desc: "Wat je ziet is wat je betaalt. Geen verborgen kosten." },
  ];
  return (
    <section id="waarom" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Waarom OpstartDesk</span>
            <h2 className="mt-4 font-serif text-5xl lg:text-7xl leading-[0.95]">
              Mensen kiezen ons<br />
              omdat we <span className="italic text-accent">persoonlijk</span> blijven.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {items.map((it, idx) => (
            <div key={it.title} className="bg-foreground p-8 lg:p-10 min-h-[260px] flex flex-col">
              <div className="font-serif text-2xl text-accent">— 0{idx + 1}</div>
              <h3 className="mt-6 font-serif text-2xl lg:text-3xl">{it.title}</h3>
              <p className="mt-4 text-background/70 leading-relaxed text-sm flex-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Werkwijze() {
  const stappen = [
    { n: "I", title: "Intakegesprek", desc: "We bespreken je plannen, doelen en situatie. Zo weten we precies wat je nodig hebt." },
    { n: "II", title: "Documenten verzamelen", desc: "Je krijgt een duidelijke checklist. Wij begeleiden je stap voor stap bij het aanleveren." },
    { n: "III", title: "Financieel plan opstellen", desc: "Onze experts maken een gedegen financieel plan dat voldoet aan alle wettelijke vereisten." },
    { n: "IV", title: "Statuten & oprichting", desc: "We stellen de statuten op en regelen de officiële oprichting volledig digitaal." },
    { n: "V", title: "Publicatie & afronding", desc: "Publicatie in het Belgisch Staatsblad. Je besloten vennootschap is officieel actief." },
  ];
  return (
    <section id="werkwijze" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Werkwijze</span>
              <h2 className="mt-4 font-serif text-5xl lg:text-6xl text-foreground leading-[0.95]">
                Onze aanpak,<br /><span className="italic">van begin tot eind.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Een helder traject in vijf stappen. Jij weet altijd waar je staat — en wat de volgende stap is.
              </p>
              <Button asChild size="lg" variant="ghost" className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary underline underline-offset-4">
                <a href="#start">Plan een intake <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </aside>
          <ol className="lg:col-span-8 space-y-px bg-foreground/15">
            {stappen.map((s) => (
              <li key={s.n} className="bg-background p-8 lg:p-10 grid grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start">
                <div className="font-serif text-4xl lg:text-5xl text-primary italic w-16">{s.n}</div>
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
    <section id="reviews" className="py-24 lg:py-32 bg-secondary border-y border-foreground/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Klantenervaring</span>
            <h2 className="mt-4 font-serif text-5xl lg:text-7xl text-foreground leading-[0.95]">
              Wat klanten<br /><span className="italic">over ons zeggen.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed">
              Echte ervaringen van ondernemers die we begeleidden bij hun oprichting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-background p-8 lg:p-10 flex flex-col">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl lg:text-3xl text-foreground leading-snug flex-1">
                <span className="text-accent">"</span>{r.text}<span className="text-accent">"</span>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-foreground/15 flex items-baseline justify-between">
                <span className="font-serif text-lg text-foreground">{r.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.role}</span>
              </figcaption>
            </figure>
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
    <section id="prijzen" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Trajecten</span>
            <h2 className="mt-4 font-serif text-5xl lg:text-7xl text-foreground leading-[0.95]">
              Twee duidelijke<br /><span className="italic">trajecten.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">Kies wat past bij jouw timing. Geen verborgen kosten.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "rounded-[2rem] p-10 lg:p-12 flex flex-col " +
                (t.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground border border-foreground/15")
              }
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-5xl lg:text-6xl">{t.name}</h3>
                {t.highlight && (
                  <span className="font-serif italic text-sm text-accent">— Snelst</span>
                )}
              </div>
              <p className={"mt-3 text-sm uppercase tracking-[0.2em] " + (t.highlight ? "text-primary-foreground/70" : "text-muted-foreground")}>
                {t.timing}
              </p>
              <ul className={"mt-10 space-y-4 flex-1 " + (t.highlight ? "border-t border-primary-foreground/20 pt-6" : "border-t border-foreground/15 pt-6")}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={"h-4 w-4 mt-1 shrink-0 " + (t.highlight ? "text-accent" : "text-primary")} />
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={
                  "mt-10 rounded-full h-12 self-start px-7 " +
                  (t.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-foreground text-background hover:bg-foreground/90")
                }
              >
                <a href="#start">{t.cta} <ArrowRight className="ml-2 h-4 w-4" /></a>
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
    { q: "Hoe lang duurt de oprichting echt?", a: "Tussen 8 en 15 werkdagen, afhankelijk van het traject dat je kiest en hoe snel jij de gevraagde info aanlevert." },
    { q: "Moet ik mij verplaatsen?", a: "Nee. Alles verloopt 100% digitaal vanuit heel België — geen verplaatsing nodig." },
    { q: "Wat zit er in de prijs?", a: "Volledig oprichtingstraject, financieel plan, statuten en publicatie in het Belgisch Staatsblad. Geen verborgen kosten." },
    { q: "Wat als ik nog vragen heb tijdens het traject?", a: "Je hebt één vast contactpersoon die je kent bij naam. Bereikbaar per e-mail en telefoon." },
  ];
  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-foreground/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ FAQ</span>
            <h2 className="mt-4 font-serif text-5xl lg:text-6xl text-foreground leading-[0.95]">
              Veelgestelde<br /><span className="italic">vragen.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 border-t border-foreground/20">
            {qs.map((item) => (
              <details key={item.q} className="group border-b border-foreground/20 py-6">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-serif text-2xl lg:text-3xl text-foreground hover:text-primary transition-colors">
                  {item.q}
                  <Plus className="h-6 w-6 mt-2 shrink-0 text-primary transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="start" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">§ Aan de slag</span>
          <h2 className="mt-4 font-serif text-6xl lg:text-8xl leading-[0.9]">
            Klaar om te<br /><span className="italic text-accent">starten?</span>
          </h2>
          <p className="mt-8 text-background/70 text-lg max-w-md">
            Begin met 3 korte vragen. Binnen één werkdag horen we van elkaar.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base">
            <a href="/start">Start nu <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">
            Geen verplaatsing · Vaste prijs · Vast contactpersoon
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/20 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <img src={logoWordmark} alt="OpstartDesk" className="h-6 w-auto" />
        <div>© {new Date().getFullYear()} OpstartDesk · Besloten vennootschap oprichten in België</div>
      </div>
    </footer>
  );
}
