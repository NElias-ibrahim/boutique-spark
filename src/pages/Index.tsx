import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Clock, Coffee, Gift, Heart, MapPin, MessageSquare, PackageCheck, Phone, ReceiptText, ShoppingBasket, Sparkles, Star, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const nav = [["/", "Accueil"], ["/selection", "Sélection"], ["/quartier", "Quartier"], ["/contact", "Contact"]];

const picks = [
  { title: "Le panier malin", price: "14€", tag: "Best-seller", desc: "Un mix prêt à emporter pour dépanner sans se ruiner." },
  { title: "Pause sucrée", price: "6€", tag: "Midi", desc: "Boisson, douceur maison et petit mot sympa au comptoir." },
  { title: "Coffret voisin", price: "28€", tag: "Cadeau", desc: "Un lot propre, emballé, parfait pour offrir vite et bien." },
  { title: "Commande perso", price: "Sur devis", tag: "Flexible", desc: "On prépare selon ton besoin, ton budget et ton timing." },
];

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen storefront-beam text-foreground">
    <header className="sticky top-0 z-40 border-b-2 border-foreground/10 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-3 font-black">
          <span className="grid size-11 rotate-[-3deg] place-items-center rounded-md bg-secondary text-secondary-foreground shadow-card"><Store className="size-5" /></span>
          <span className="text-xl">Chez Milo</span>
        </Link>
        <div className="hidden rounded-md border border-border bg-card p-1 shadow-card md:flex">
          {nav.map(([to, label]) => <NavLink key={to} to={to} className="rounded-sm px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" activeClassName="bg-primary text-primary-foreground" >{label}</NavLink>)}
        </div>
        <Button asChild variant="storefront" size="sm"><Link to="/contact">Réserver</Link></Button>
      </nav>
    </header>
    {children}
  </div>
);

const Home = () => (
  <Layout>
    <main>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="relative min-h-[610px] overflow-hidden rounded-lg border-2 border-foreground/10 bg-card p-6 shadow-lift lg:p-10">
          <div className="absolute right-[-70px] top-[-70px] size-56 rounded-full bg-secondary/60 motion-safe:animate-beam-drift" aria-hidden="true" />
          <div className="absolute bottom-8 right-8 hidden rotate-3 rounded-lg border-2 border-foreground/10 bg-background p-5 shadow-card md:block">
            <p className="text-sm font-black uppercase text-primary">Ouvert aujourd’hui</p>
            <p className="mt-1 text-3xl font-black">8h—19h</p>
          </div>
          <div className="relative flex h-full max-w-3xl flex-col justify-between">
            <div className="animate-soft-rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-black text-primary"><Sparkles className="size-4" /> Petite boutique, gros feeling</p>
              <h1 className="text-6xl leading-[0.92] md:text-8xl">La vitrine qui donne envie de passer.</h1>
              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">Un template pour boulangerie, épicerie, fleuriste, coffee shop ou vendeur local : humain, clair, pas trop corporate, avec assez de caractère pour sortir du lot.</p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="storefront" size="lg"><Link to="/selection">Voir la sélection <ArrowRight className="size-4" /></Link></Button>
              <Button asChild variant="market" size="lg"><Link to="/quartier">L’esprit boutique</Link></Button>
            </div>
          </div>
        </div>
        <aside className="grid gap-5">
          <div className="commerce-grid rounded-lg border-2 border-foreground/10 bg-hero p-6 shadow-card">
            <Coffee className="mb-16 size-10 text-primary" />
            <h2 className="text-4xl leading-none">Simple à lire, rapide à commander.</h2>
            <p className="mt-4 font-medium leading-7 text-muted-foreground">Prix visibles, produits du moment, horaires et contact direct.</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Badge icon={Star} label="Avis" value="4,9/5" />
            <Badge icon={MapPin} label="Local" value="Quartier" />
          </div>
          <div className="rounded-lg border-2 border-foreground/10 bg-primary p-6 text-primary-foreground shadow-card">
            <p className="text-sm font-black uppercase opacity-80">Message du jour</p>
            <p className="mt-3 text-2xl font-black leading-tight">“On garde votre commande de côté si vous appelez avant midi.”</p>
          </div>
        </aside>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 lg:grid-cols-4 lg:px-8">
        {picks.map((pick) => <PickCard key={pick.title} {...pick} />)}
      </section>
    </main>
  </Layout>
);

const Selection = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <PageIntro kicker="Sélection" title="Des offres courtes, propres, faciles à remplacer." text="Ici tu peux mettre pains, fleurs, snacks, cartes cadeaux, accessoires, menus ou petits lots." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{picks.map((pick) => <PickCard key={pick.title} {...pick} />)}</div>
    </main>
  </Layout>
);

const Quartier = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <PageIntro kicker="Quartier" title="Une boutique qui parle comme ses clients." text="Pas besoin d’un site froid : on montre l’ambiance, les habitudes, les services et les petites attentions." />
        <div className="grid gap-5 sm:grid-cols-2">
          <Info icon={Heart} title="Accueil humain" text="Ton direct, rassurant, proche des habitués." />
          <Info icon={PackageCheck} title="Réservation" text="On prépare à l’avance, on évite les allers-retours." />
          <Info icon={ReceiptText} title="Prix clairs" text="Pas de tunnel compliqué, l’essentiel est visible." />
          <Info icon={Gift} title="Lots du moment" text="Parfait pour offres saisonnières et paniers rapides." />
        </div>
      </div>
    </main>
  </Layout>
);

const Contact = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <section className="grid gap-6 rounded-lg border-2 border-foreground/10 bg-card p-6 shadow-lift lg:grid-cols-[1fr_1fr] lg:p-10">
        <PageIntro kicker="Contact" title="On commande, on réserve, on passe." text="Une page simple pour téléphone, adresse, horaires, réseaux ou formulaire selon la boutique." />
        <div className="grid gap-5">
          <Info icon={Phone} title="Téléphone" text="01 23 45 67 89" />
          <Info icon={Clock} title="Horaires" text="Lundi au samedi — 8h à 19h" />
          <Info icon={MessageSquare} title="Message" text="Réponse rapide pour réserver ou demander un lot." />
          <Button asChild variant="storefront" size="lg"><a href="tel:0123456789">Appeler maintenant</a></Button>
        </div>
      </section>
    </main>
  </Layout>
);

const Badge = ({ icon: Icon, label, value }: { icon: typeof Star; label: string; value: string }) => (
  <div className="rounded-lg border-2 border-foreground/10 bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
    <Icon className="mb-5 size-6 text-accent" />
    <p className="text-xs font-black uppercase text-muted-foreground">{label}</p>
    <p className="mt-1 text-xl font-black">{value}</p>
  </div>
);

const PickCard = ({ title, price, tag, desc }: { title: string; price: string; tag: string; desc: string }) => (
  <article className="group rounded-lg border-2 border-foreground/10 bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
    <div className="mb-8 flex items-start justify-between gap-4"><span className="rounded-md bg-secondary px-3 py-1 text-xs font-black text-secondary-foreground">{tag}</span><ShoppingBasket className="size-6 text-primary transition-transform group-hover:rotate-[-8deg]" /></div>
    <h2 className="text-2xl leading-tight">{title}</h2>
    <p className="mt-3 min-h-20 text-sm font-medium leading-6 text-muted-foreground">{desc}</p>
    <div className="mt-5 flex items-center justify-between border-t-2 border-foreground/10 pt-4"><strong className="text-2xl">{price}</strong><Button variant="market" size="sm">Choisir</Button></div>
  </article>
);

const Info = ({ icon: Icon, title, text }: { icon: typeof Heart; title: string; text: string }) => (
  <div className="rounded-lg border-2 border-foreground/10 bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
    <Icon className="mb-6 size-7 text-primary" />
    <h2 className="text-3xl leading-none">{title}</h2>
    <p className="mt-4 font-medium leading-7 text-muted-foreground">{text}</p>
  </div>
);

const PageIntro = ({ kicker, title, text }: { kicker: string; title: string; text: string }) => (
  <div className="max-w-3xl animate-soft-rise">
    <p className="text-sm font-black uppercase text-accent">{kicker}</p>
    <h1 className="mt-4 text-5xl leading-none md:text-7xl">{title}</h1>
    <p className="mt-6 text-lg font-medium leading-8 text-muted-foreground">{text}</p>
  </div>
);

const Index = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/^\/boutique-spark/, "") || "/";
  if (path === "/selection") return <Selection />;
  if (path === "/quartier") return <Quartier />;
  if (path === "/contact") return <Contact />;
  return <Home />;
};

export default Index;