import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Boxes, MessageCircle, PackageCheck, ShieldCheck, Sparkles, Store, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const products = [
  { name: "Starter Pack boutique", price: "29€", detail: "Identité, salon Discord, 12 fiches produit." },
  { name: "Cartes premium", price: "à partir de 7€", detail: "Codes, gift cards, boosts et lots vérifiés." },
  { name: "Réassort express", price: "48h", detail: "Commande groupée, suivi clair, preuve d'achat." },
];

const steps = ["Choix du lot", "Vérification vendeur", "Paiement sécurisé", "Livraison Discord"];

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen storefront-beam">
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-3 font-semibold text-foreground">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground shadow-card"><Store className="size-5" /></span>
          <span className="text-lg">Comptoir Nova</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {[
            ["/", "Accueil"],
            ["/catalogue", "Catalogue"],
            ["/process", "Process"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <NavLink key={to} to={to} className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" activeClassName="bg-card text-foreground shadow-card">
              {label}
            </NavLink>
          ))}
        </div>
        <Button asChild variant="storefront" size="sm"><Link to="/contact">Commander</Link></Button>
      </nav>
    </header>
    {children}
  </div>
);

const Home = () => (
  <Layout>
    <main>
      <section className="relative overflow-hidden px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-8 top-20 h-64 rounded-full bg-hero opacity-40 blur-3xl motion-safe:animate-beam-drift" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-soft-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-card px-3 py-2 text-sm font-semibold text-primary shadow-card"><Sparkles className="size-4" /> Template vitrine petit commerce</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] text-foreground md:text-7xl">Une boutique claire pour vendre local, en ligne ou sur Discord.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Un template multi-pages pour présenter des produits physiques, des cartes, des lots numériques ou des services de petit vendeur avec une ambiance sérieuse, chaleureuse et mémorable.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="storefront" size="lg"><Link to="/catalogue">Voir le catalogue <ArrowRight className="size-4" /></Link></Button>
              <Button asChild variant="market" size="lg"><Link to="/process">Comment ça marche</Link></Button>
            </div>
          </div>
          <div className="commerce-grid rounded-lg border border-border bg-card/80 p-4 shadow-lift backdrop-blur animate-soft-rise [animation-delay:120ms]">
            <div className="rounded-md bg-background p-5 shadow-card">
              <div className="mb-5 flex items-center justify-between"><span className="text-sm font-bold text-primary">Stock du jour</span><BadgeCheck className="size-5 text-primary" /></div>
              <div className="space-y-3">
                {products.map((item) => <ProductRow key={item.name} {...item} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border/70 bg-card/65 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <Feature icon={ShieldCheck} title="Confiance d'abord" text="Preuves, avis, conditions et délais visibles sans blabla." />
          <Feature icon={MessageCircle} title="Pensé Discord" text="Boutons d'appel, process DM et livraison de codes intégrés." />
          <Feature icon={Boxes} title="Adaptable" text="Convient aux cartes, snacks, accessoires, services et reventes." />
        </div>
      </section>
    </main>
  </Layout>
);

const Catalogue = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <PageTitle eyebrow="Catalogue" title="Des offres lisibles, prêtes à convertir." text="Chaque carte produit peut servir pour une carte cadeau, un pack Discord, un produit local ou une prestation rapide." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {products.map((item, index) => <OfferCard key={item.name} {...item} index={index} />)}
      </div>
    </main>
  </Layout>
);

const Process = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <PageTitle eyebrow="Process" title="Un parcours simple pour rassurer avant l'achat." text="Le template met en avant la disponibilité, les garanties et les étapes de commande sans surcharger le visiteur." />
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => <div key={step} className="rounded-lg border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"><span className="text-sm font-bold text-accent">0{index + 1}</span><h2 className="mt-5 text-2xl font-bold">{step}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Une étape courte, visible et facile à remplacer selon ton activité.</p></div>)}
      </div>
    </main>
  </Layout>
);

const Contact = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <section className="grid gap-8 rounded-lg border border-border bg-card p-6 shadow-lift lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div><PageTitle eyebrow="Contact" title="Commande par message, sans friction." text="Remplace les liens par ton Discord, WhatsApp, Instagram ou formulaire." /></div>
        <div className="rounded-md bg-background p-6 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [MessageCircle, "Discord", "@comptoirnova"],
              [PackageCheck, "Livraison", "Codes ou retrait local"],
              [TicketPercent, "Promos", "Lots hebdomadaires"],
              [ShieldCheck, "Garantie", "Vendeur vérifié"],
            ].map(([Icon, title, text]) => <Feature key={String(title)} icon={Icon as typeof MessageCircle} title={String(title)} text={String(text)} compact />)}
          </div>
          <Button asChild variant="storefront" size="lg" className="mt-6 w-full"><a href="https://discord.com" target="_blank" rel="noreferrer">Ouvrir Discord <ArrowRight className="size-4" /></a></Button>
        </div>
      </section>
    </main>
  </Layout>
);

const ProductRow = ({ name, price, detail }: { name: string; price: string; detail: string }) => (
  <div className="rounded-md border border-border bg-card p-4 transition-transform hover:-translate-y-0.5">
    <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold">{name}</h3><span className="rounded-md bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">{price}</span></div>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
  </div>
);

const Feature = ({ icon: Icon, title, text, compact = false }: { icon: typeof ShieldCheck; title: string; text: string; compact?: boolean }) => (
  <div className={`rounded-lg border border-border bg-card shadow-card ${compact ? "p-4" : "p-6"}`}>
    <Icon className="mb-4 size-6 text-primary" />
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
  </div>
);

const OfferCard = ({ name, price, detail, index }: { name: string; price: string; detail: string; index: number }) => (
  <article className="rounded-lg border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
    <span className="text-sm font-bold text-accent">Lot 0{index + 1}</span>
    <h2 className="mt-5 text-3xl font-bold">{name}</h2>
    <p className="mt-4 text-muted-foreground">{detail}</p>
    <div className="mt-8 flex items-center justify-between border-t border-border pt-5"><strong className="text-2xl">{price}</strong><Button variant="market" size="sm">Détails</Button></div>
  </article>
);

const PageTitle = ({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) => (
  <div className="max-w-3xl animate-soft-rise">
    <p className="text-sm font-bold uppercase tracking-normal text-primary">{eyebrow}</p>
    <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
    <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
  </div>
);

const Index = () => {
  const path = window.location.pathname;
  if (path === "/catalogue") return <Catalogue />;
  if (path === "/process") return <Process />;
  if (path === "/contact") return <Contact />;
  return <Home />;
};

export default Index;
