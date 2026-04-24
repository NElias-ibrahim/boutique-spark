import { Link } from "react-router-dom";
import { ArrowRight, Clock3, HeartHandshake, MapPin, Menu, Package, Phone, ShoppingBag, Star, Store, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const products = [
  { name: "Panier du matin", price: "12€", detail: "Viennoiseries, pain frais et petite douceur du jour." },
  { name: "Formule voisine", price: "8€", detail: "Sandwich maison, boisson fraîche et dessert simple." },
  { name: "Lot à offrir", price: "25€", detail: "Assortiment préparé avec emballage soigné." },
];

const navItems = [
  ["/", "Accueil"],
  ["/catalogue", "Produits"],
  ["/histoire", "La boutique"],
  ["/contact", "Contact"],
];

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen storefront-beam">
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-3 font-semibold text-foreground">
          <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground shadow-card"><Wheat className="size-5" /></span>
          <span className="text-lg">Maison Lorette</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([to, label]) => (
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
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
        <div className="flex min-h-[560px] flex-col justify-between rounded-lg border border-border bg-card p-7 shadow-lift lg:p-10">
          <div className="animate-soft-rise">
            <p className="mb-6 inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-semibold text-primary"><Store className="size-4" /> Boutique de quartier</p>
            <h1 className="text-5xl font-bold leading-none md:text-7xl">Du frais, du simple, du proche.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Un template vitrine chaleureux pour une boulangerie, épicerie, fleuriste, coffee shop ou petite boutique qui veut inspirer confiance sans en faire trop.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="storefront" size="lg"><Link to="/catalogue">Voir les produits <ArrowRight className="size-4" /></Link></Button>
            <Button asChild variant="market" size="lg"><Link to="/histoire">Découvrir la boutique</Link></Button>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-rows-[1fr_auto]">
          <div className="commerce-grid relative overflow-hidden rounded-lg border border-border bg-hero p-6 shadow-lift">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-primary/25 motion-safe:animate-beam-drift" aria-hidden="true" />
            <div className="relative flex h-full min-h-[380px] flex-col justify-end">
              <div className="max-w-md rounded-lg bg-card/90 p-6 shadow-card backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-normal text-primary">Aujourd'hui</p>
                <h2 className="mt-3 text-3xl font-bold">Pains chauds, paniers prêts et accueil comme à la maison.</h2>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MiniStat icon={Clock3} label="Ouvert" value="7h — 19h" />
            <MiniStat icon={MapPin} label="Quartier" value="Centre-ville" />
            <MiniStat icon={Star} label="Avis" value="4,9/5" />
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-card/70 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {products.map((item) => <ProductCard key={item.name} {...item} />)}
        </div>
      </section>
    </main>
  </Layout>
);

const Catalogue = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <PageTitle eyebrow="Produits" title="Une sélection courte, claire et facile à commander." text="Des cartes sobres pour mettre en avant les offres du moment, les prix, les lots et les produits phares." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">{products.map((item) => <ProductCard key={item.name} {...item} />)}</div>
    </main>
  </Layout>
);

const Story = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <PageTitle eyebrow="La boutique" title="Un endroit simple, pensé pour les habitués." text="Cette page peut raconter l'origine du commerce, les horaires, les valeurs et ce qui rend l'accueil différent." />
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoBlock icon={HeartHandshake} title="Proche client" text="Des messages directs, un ton humain et des infos pratiques visibles." />
          <InfoBlock icon={Package} title="Commandes faciles" text="Retrait, réservation, livraison locale ou demande personnalisée." />
          <InfoBlock icon={ShoppingBag} title="Offres du jour" text="Met en avant les produits frais ou les petits lots à écouler." />
          <InfoBlock icon={Menu} title="Pages flexibles" text="Accueil, produits, histoire et contact prêts à adapter." />
        </div>
      </section>
    </main>
  </Layout>
);

const Contact = () => (
  <Layout>
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <section className="rounded-lg border border-border bg-card p-7 shadow-lift lg:p-10">
        <PageTitle eyebrow="Contact" title="Réserver, demander un lot ou passer dire bonjour." text="Une page contact directe avec téléphone, adresse, horaires et bouton de commande." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <InfoBlock icon={Phone} title="Téléphone" text="01 23 45 67 89" />
          <InfoBlock icon={MapPin} title="Adresse" text="12 rue des Halles, centre-ville" />
          <InfoBlock icon={Clock3} title="Horaires" text="Lundi — samedi, 7h à 19h" />
        </div>
        <Button asChild variant="storefront" size="lg" className="mt-8"><a href="tel:0123456789">Appeler la boutique</a></Button>
      </section>
    </main>
  </Layout>
);

const MiniStat = ({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-card p-4 shadow-card transition-transform hover:-translate-y-1">
    <Icon className="mb-3 size-5 text-primary" />
    <p className="text-xs font-bold uppercase tracking-normal text-muted-foreground">{label}</p>
    <p className="mt-1 font-semibold">{value}</p>
  </div>
);

const ProductCard = ({ name, price, detail }: { name: string; price: string; detail: string }) => (
  <article className="rounded-lg border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
    <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-muted text-primary"><ShoppingBag className="size-6" /></div>
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{detail}</p>
    <div className="mt-6 flex items-center justify-between border-t border-border pt-5"><strong className="text-2xl">{price}</strong><Button variant="market" size="sm">Choisir</Button></div>
  </article>
);

const InfoBlock = ({ icon: Icon, title, text }: { icon: typeof HeartHandshake; title: string; text: string }) => (
  <div className="rounded-lg border border-border bg-card p-6 shadow-card">
    <Icon className="mb-4 size-6 text-primary" />
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
  </div>
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
  if (path === "/histoire") return <Story />;
  if (path === "/contact") return <Contact />;
  return <Home />;
};

export default Index;