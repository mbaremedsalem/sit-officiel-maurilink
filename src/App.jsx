import { useState, useEffect } from "react";
import "./App.css";

const SOLUTIONS = [
  {
    id: "banque",
    cls: "item-a",
    accent: "gold",
    kicker: "Banque digitale — PoolPay",
    title: "PoolPay, votre banque en ligne",
    text: "Une banque digitale qui permet d'ouvrir un compte, d'envoyer et de recevoir de l'argent et de suivre ses transactions, entièrement en ligne et sans passer par une agence.",
    tags: ["Comptes en ligne", "Paiements & transferts", "Suivi des transactions"],
    href: "https://frontend-digital-banking.vercel.app/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    id: "agharina",
    cls: "item-b",
    accent: "teal",
    kicker: "Immobilier — Agharina",
    title: "Agharina, l'immobilier simplifié",
    text: "Location, achat et vente de duplex et de terrains. Chaque bien est lié à une adresse enregistrée dans un portefeuille numérique local, avec réservation entièrement en ligne.",
    tags: ["Location & vente", "Adresse liée à un wallet", "Réservation en ligne"],
    href: "https://agharina-frontend-client.vercel.app/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    id: "education",
    cls: "item-c",
    accent: "teal",
    kicker: "Éducation — Newat",
    title: "Newat, la plateforme éducative en ligne",
    text: "Cours en ligne et suivi de progression pour les étudiants, accessibles depuis n'importe où pour poursuivre sa formation à son rythme.",
    tags: ["Cours en ligne", "Suivi des étudiants"],
    href: "https://www.newat.ai/login",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 8l10-5 10 5-10 5-10-5z" />
        <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
        <path d="M22 8v6" />
      </svg>
    ),
  },
  {
    id: "appels",
    cls: "item-d",
    accent: "gold",
    kicker: "Appels d'offres & emploi",
    title: "Appels d'offres et offres d'emploi",
    text: "Les entreprises publient leurs appels d'offres et leurs offres d'emploi, les candidats postulent en ligne et suivent l'avancement de leur dossier jusqu'à la décision finale.",
    tags: ["Publication d'appels d'offres", "Candidature en ligne", "Suivi de dossier"],
    href: "https://www.maurilink.site/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4h16v16H4z" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
];

const NAV = [
  { href: "#solutions", label: "Solutions" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <a className="logo" href="#top">
      <svg className="mark" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="13.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="8" r="2" fill="currentColor" />
        <circle cx="9" cy="19" r="2" fill="currentColor" />
        <circle cx="21" cy="19" r="2" fill="currentColor" />
        <path d="M15 8L9 19M15 8l6 11M9 19h12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      MauriLink
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCondensed(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="header-slot" id="top">
      <div className={"navpill" + (condensed ? " condensed" : "")}>
        <Logo />
        <nav className="navlinks">
          {NAV.map((n) => (
            <a key={n.href} className="link" href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className="navcta" href="#contact">
            Nous contacter
          </a>
          <button className="menubtn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={"mobilemenu" + (open ? " open" : "")}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Nous contacter
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <span className="orb orb-a"></span>
      <span className="orb orb-b"></span>
      <div className="wrap hero-inner stagger">
        <div className="eyebrow">
          <span className="dot"></span>
          Entreprise mauritanienne de solutions numériques
        </div>
        <h1>
          Nous relions la Mauritanie
          <span className="line2">à ses services numériques.</span>
        </h1>
        <p className="lede">
          Paiement, immobilier, éducation et emploi : MauriLink construit des plateformes pensées pour un usage réel, du
          transfert d'argent sécurisé par blockchain jusqu'au suivi de dossier de candidature.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#solutions">
            Voir nos solutions →
          </a>
          <a className="btn btn-ghost" href="#contact">
            Discuter d'un projet
          </a>
        </div>
        <div className="stat-strip">
          <div className="stat-cell">
            <strong>4</strong>
            <span>solutions en production</span>
          </div>
          <div className="stat-cell">
            <strong>1</strong>
            <span>infrastructure, quatre secteurs</span>
          </div>
          <div className="stat-cell">
            <strong>100%</strong>
            <span>pensées pour le marché local</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ s }) {
  const accentVar = s.accent === "gold" ? "var(--gold)" : "var(--teal)";
  const accentSoftVar = s.accent === "gold" ? "var(--gold-soft)" : "var(--teal-soft)";
  const style = { "--accent": accentVar, "--accent-soft": accentSoftVar };
  return (
    <div className={"bento-card " + s.cls} style={style}>
      <div className="bento-ico">{s.icon}</div>
      <span className="kicker">{s.kicker}</span>
      <h3>{s.title}</h3>
      <p className="desc">{s.text}</p>
      <ul className="chips">
        {s.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {s.href && (
        <a className="bento-link" href={s.href} target="_blank" rel="noopener noreferrer">
          Voir la démo →
        </a>
      )}
    </div>
  );
}

function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>
            Nos solutions
          </div>
          <h2>Quatre plateformes, un même savoir-faire</h2>
          <p>Chaque produit répond à un besoin concret du marché mauritanien, conçu et maintenu par la même équipe technique.</p>
        </div>
        <div className="bento">
          {SOLUTIONS.map((s) => (
            <BentoCard key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    { n: "01", t: "Ancrage local", d: "Chaque plateforme est pensée pour les usages, les langues et les contraintes du marché mauritanien." },
    { n: "02", t: "Sécurité des données", d: "Le transfert d'argent et l'immobilier reposent sur des registres vérifiables, dont la blockchain pour les paiements." },
    { n: "03", t: "Une seule équipe, quatre métiers", d: "Finance, immobilier, éducation et emploi partagent la même exigence technique et le même accompagnement." },
  ];
  return (
    <section className="section" id="apropos">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>
            À propos
          </div>
          <h2>Une équipe qui construit pour son propre marché</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              MauriLink est une entreprise mauritanienne spécialisée dans la conception de solutions informatiques. Nous
              développons des applications qui répondent à des besoins quotidiens : envoyer de l'argent, trouver un
              logement, se former, ou décrocher un emploi.
            </p>
            <p>
              Plutôt que de multiplier des produits isolés, nous construisons une même infrastructure technique capable de
              porter plusieurs plateformes à la fois : sécurité des transactions, gestion des utilisateurs et fiabilité du
              service restent constantes d'un produit à l'autre.
            </p>
            <p>
              Notre objectif : rendre les services numériques aussi fiables que ceux que nos utilisateurs connaissent déjà,
              mais plus rapides, plus transparents et mieux adaptés au contexte local.
            </p>
          </div>
          <div className="value-list">
            {values.map((v) => (
              <div key={v.n} className="value">
                <span className="num">{v.n}</span>
                <div>
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="form-success">Merci, votre message a bien été noté. Notre équipe vous répondra rapidement.</div>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div>
          <label htmlFor="nom">Nom complet</label>
          <input id="nom" name="nom" type="text" required placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
        </div>
      </div>
      <div>
        <label htmlFor="sujet">Solution concernée</label>
        <select id="sujet" name="sujet" defaultValue="banque">
          <option value="banque">PoolPay — Banque digitale</option>
          <option value="agharina">Agharina — immobilier</option>
          <option value="education">Plateforme éducative</option>
          <option value="appels">Appels d'offres & emploi</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="Décrivez votre besoin en quelques lignes..."></textarea>
      </div>
      <button type="submit" className="form-submit">
        Envoyer le message
      </button>
      <p className="form-note">Ce formulaire est une démonstration : aucune donnée n'est transmise pour le moment.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="eyebrow" style={{ borderColor: "rgba(243,241,234,0.25)", background: "transparent", color: "var(--on-dark-soft)" }}>
              <span className="dot"></span>
              Contact
            </div>
            <h2>Parlons de votre projet</h2>
            <p className="lede">Une question sur l'une de nos plateformes, un partenariat ou un nouveau projet ? Écrivez-nous.</p>
            <dl>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:contact@maurilink.mr">contact@maurilink.mr</a>
              </dd>
              <dt>Téléphone</dt>
              <dd>
                <a href="tel:+22200000000">+222 00 00 00 00</a>
              </dd>
              <dt>Adresse</dt>
              <dd>Nouakchott, Mauritanie</dd>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Solutions numériques pour le paiement, l'immobilier, l'éducation et l'emploi en Mauritanie.</p>
          </div>
          <div>
            <h5>Solutions</h5>
            {SOLUTIONS.map((s) => (
              <a key={s.id} href="#solutions">
                {s.kicker}
              </a>
            ))}
          </div>
          <div>
            <h5>Entreprise</h5>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="mailto:contact@maurilink.mr">contact@maurilink.mr</a>
            <a href="tel:+22200000000">+222 00 00 00 00</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MauriLink. Tous droits réservés.</span>
          <span>Nouakchott, Mauritanie</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
