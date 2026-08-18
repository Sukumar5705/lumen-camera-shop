import { AnimatePresence, motion } from "framer-motion";
import { Camera, Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", mega: false },
  { label: "Brands", href: "/brands" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const MEGA_COLUMNS = [
  {
    title: "Cameras",
    items: ["DSLR Cameras", "Mirrorless", "Compact", "Bundles"],
  },
  {
    title: "Lenses",
    items: ["Prime Lens", "Zoom Lens", "Wide Lens", "Telephoto"],
  },
  {
    title: "Accessories",
    items: ["Tripods", "Memory Cards", "Camera Bags", "Lighting"],
  },
  {
    title: "Essentials",
    items: ["Gift Cards", "Cleaning Kits", "Filters", "Batteries"],
  },
];

export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
            <Camera className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-800 tracking-tight text-ink">
            Lumen<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-secondary hover:text-ink">
                  {item.label}
                </button>
                <AnimatePresence>{megaOpen && <MegaMenu />}</AnimatePresence>
              </div>
            ) : (
             <Link
  key={item.label}
  to={item.href}
  className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-secondary hover:text-ink"
>
  {item.label}
</Link>
            ),
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <IconBtn label="Search"><Search className="h-5 w-5" /></IconBtn>
          <IconBtn label="Account" className="hidden sm:inline-flex"><User className="h-5 w-5" /></IconBtn>
          <IconBtn label="Wishlist" className="hidden sm:inline-flex"><Heart className="h-5 w-5" /></IconBtn>
          <div className="relative">
            <IconBtn label="Cart"><ShoppingBag className="h-5 w-5" /></IconBtn>
            <span className="pointer-events-none absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white ring-2 ring-background">
              3
            </span>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/5 bg-background lg:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {NAV.map((n) => (
               <Link
  key={n.label}
  to={n.href}
  onClick={() => setMobileOpen(false)}
  className="rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-secondary"
>
  {n.label}
</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconBtn({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <button
      aria-label={label}
      className={`grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
}

function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute m-30 top-full z-50 mt-3 w-[min(72rem,90vw)] -translate-x-1/2 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]"
    >
      <div className="grid gap-6 md:grid-cols-5">
        {MEGA_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-xs font-700 uppercase tracking-[0.14em] text-ink-soft/70">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.items.map((it) => (
                <li key={it}>
                  <a
                    href="#"
                    className="text-sm font-medium text-ink transition hover:text-brand"
                  >
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Promo card */}
        <a
          href="#"
          className="relative col-span-1 flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl bg-ink p-5 text-white"
        >
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962feaf3f2?w=600&q=80"
            alt="Featured camera"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="relative">
            <p className="text-xs font-600 uppercase tracking-widest text-brand">New arrival</p>
            <h5 className="mt-1 font-display text-lg font-700">Alpha Pro Mirrorless</h5>
            <span className="mt-3 inline-flex items-center rounded-full bg-brand px-3 py-1.5 text-xs font-600">
              Shop now →
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
