import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageContext";

const EMAIL = "info@opstartdesk.be";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Opstartdesk" },
      { name: "description", content: "Privacy policy van Opstartdesk." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-serif font-bold text-xl text-foreground">{title}</h2>
      <div className="mt-3 text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  const { t, lang } = useT();

  const content = {
    nl: {
      eyebrow: "PRIVACY POLICY",
      title: "Privacy policy – OpstartDesk",
      contactLine: "Contact:",
      sections: [
        {
          title: "Wie verwerkt je gegevens?",
          body: ["OpstartDesk verwerkt persoonsgegevens wanneer je contact opneemt via de website (bv. via het contactformulier) of wanneer je ons mailt/WhatsAppt."],
        },
        {
          title: "Welke gegevens verwerken we?",
          list: [
            "Naam, voornaam, e-mailadres en gsm-nummer",
            "Inhoud van je vraag/bericht",
            "Technische gegevens die je browser standaard meestuurt (bv. IP-adres in serverlogs)",
          ],
        },
        {
          title: "Waarom verwerken we je gegevens?",
          list: [
            "Om je aanvraag te behandelen en je te contacteren over BV-oprichting",
            "Om een dossier voor te bereiden (indien je verdergaat)",
            "Om de website veilig en correct te laten werken",
          ],
        },
        {
          title: "Met wie delen we je gegevens?",
          body: ["We verkopen je gegevens nooit. We delen enkel wat nodig is om je aanvraag te behandelen of wanneer dit nodig is in het oprichtingstraject (bv. notaris/bank), in de mate dat dit noodzakelijk is."],
        },
        {
          title: "Bewaartermijnen",
          body: ["We bewaren gegevens zolang nodig om je aanvraag af te handelen en, wanneer er een dossier ontstaat, volgens de toepasselijke wettelijke bewaartermijnen."],
        },
        {
          title: "Jouw rechten",
          body: ["Je kan je gegevens inkijken, verbeteren, laten verwijderen of bezwaar maken. Mail naar ", "MAIL", "."],
        },
        {
          title: "Cookies",
          body: ["We gebruiken enkel functionele cookies die nodig zijn voor de werking van de site (tenzij later anders vermeld)."],
        },
      ],
      footer: "Praktische uitleg in klare taal.",
      back: "← Terug naar de website",
    },
    fr: {
      eyebrow: "PRIVACY POLICY",
      title: "Politique de confidentialité – OpstartDesk",
      contactLine: "Contact :",
      sections: [
        {
          title: "Qui traite vos données ?",
          body: ["OpstartDesk traite des données personnelles lorsque vous nous contactez via le site web (par ex. via le formulaire de contact) ou par e-mail/WhatsApp."],
        },
        {
          title: "Quelles données traitons-nous ?",
          list: [
            "Nom, prénom, adresse e-mail et numéro de gsm",
            "Contenu de votre question/message",
            "Données techniques envoyées par défaut par votre navigateur (par ex. adresse IP dans les logs)",
          ],
        },
        {
          title: "Pourquoi traitons-nous vos données ?",
          list: [
            "Pour traiter votre demande et vous contacter au sujet de la constitution d'une SRL",
            "Pour préparer un dossier (si vous poursuivez)",
            "Pour assurer le bon fonctionnement et la sécurité du site",
          ],
        },
        {
          title: "Avec qui partageons-nous vos données ?",
          body: ["Nous ne vendons jamais vos données. Nous ne partageons que ce qui est nécessaire au traitement de votre demande ou au processus de constitution (par ex. notaire/banque), dans la mesure du nécessaire."],
        },
        {
          title: "Durées de conservation",
          body: ["Nous conservons les données aussi longtemps que nécessaire au traitement de votre demande et, lorsqu'un dossier est constitué, conformément aux délais légaux applicables."],
        },
        {
          title: "Vos droits",
          body: ["Vous pouvez consulter, corriger, faire supprimer vos données ou vous y opposer. Écrivez à ", "MAIL", "."],
        },
        {
          title: "Cookies",
          body: ["Nous utilisons uniquement des cookies fonctionnels nécessaires au fonctionnement du site (sauf mention contraire ultérieure)."],
        },
      ],
      footer: "Explication pratique dans un langage clair.",
      back: "← Retour au site",
    },
    en: {
      eyebrow: "PRIVACY POLICY",
      title: "Privacy policy – OpstartDesk",
      contactLine: "Contact:",
      sections: [
        {
          title: "Who processes your data?",
          body: ["OpstartDesk processes personal data when you contact us via the website (e.g. through the contact form) or by email/WhatsApp."],
        },
        {
          title: "Which data do we process?",
          list: [
            "First name, last name, email address and mobile number",
            "Content of your question/message",
            "Technical data that your browser sends by default (e.g. IP address in server logs)",
          ],
        },
        {
          title: "Why do we process your data?",
          list: [
            "To handle your request and contact you about setting up your BV",
            "To prepare a file (if you proceed)",
            "To keep the website running securely and correctly",
          ],
        },
        {
          title: "With whom do we share your data?",
          body: ["We never sell your data. We only share what is necessary to process your request or what is required during the incorporation process (e.g. notary/bank), to the extent necessary."],
        },
        {
          title: "Retention periods",
          body: ["We keep data for as long as needed to handle your request and, when a file is created, in accordance with the applicable legal retention periods."],
        },
        {
          title: "Your rights",
          body: ["You can view, correct, have your data deleted or object to processing. Email ", "MAIL", "."],
        },
        {
          title: "Cookies",
          body: ["We only use functional cookies necessary for the operation of the site (unless stated otherwise later)."],
        },
      ],
      footer: "Practical explanation in plain language.",
      back: "← Back to the website",
    },
  }[lang];

  const renderBody = (parts: string[]) =>
    parts.map((p, i) =>
      p === "MAIL" ? (
        <a key={i} href={`mailto:${EMAIL}`} className="text-accent underline-offset-4 hover:underline">
          {EMAIL}
        </a>
      ) : (
        <span key={i}>{p}</span>
      ),
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t("privacy.back")}
        </Link>

        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-accent">{content.eyebrow}</p>
        <h1 className="mt-2 font-serif font-bold text-4xl lg:text-5xl tracking-tight">
          {content.title}
        </h1>

        <p className="mt-6 text-muted-foreground">
          {content.contactLine}{" "}
          <a href={`mailto:${EMAIL}`} className="text-accent underline-offset-4 hover:underline">
            {EMAIL}
          </a>
        </p>

        {content.sections.map((s, idx) => (
          <Section key={idx} title={s.title}>
            {"list" in s && s.list ? (
              <ul className="list-disc pl-6 space-y-1">
                {s.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{renderBody(s.body!)}</p>
            )}
          </Section>
        ))}

        <p className="mt-10 text-sm italic text-muted-foreground">{content.footer}</p>

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

        <div className="mt-10">
          <Link to="/" className="text-sm text-accent hover:underline">
            {content.back}
          </Link>
        </div>
      </div>
    </div>
  );
}
