import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/camera/TopBar";
import { Navbar } from "../components/camera/Navbar";
import { Footer } from "../components/camera/Footer";
import { type Brand } from "../data/brands";

const BRAND_TYPES = [
  "All",
  "Camera Manufacturer",
  "Lens Maker",
  "Accessory Brand",
  "Drone & Tech",
] as const;

export default function Brands() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<string>("All");
  const [selected, setSelected] = useState<Brand | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/brands`);
        if (!res.ok) throw new Error('Failed to fetch brands');
        const data = await res.json();
        setBrands(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const handleBrandClick = async (brand: Brand) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/brands/${brand.slug}`);
      if (res.ok) {
        const fullBrand = await res.json();
        setSelected(fullBrand);
      } else {
        setSelected(brand); // fallback to basic data
      }
    } catch (e) {
      setSelected(brand);
    }
  };
  const filtered = useMemo(() => {
    let list = [...brands];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.country.toLowerCase().includes(q)
      );
    }
    if (activeType !== "All") list = list.filter((b) => b.type === activeType);
    return list;
  }, [search, activeType]);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="container-page relative">
          <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">Brands</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-600 tracking-wide text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            10 World-Class Brands
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-5 font-display text-4xl font-800 tracking-tight sm:text-5xl lg:text-6xl"
          >
            The Brands{" "}
            <span className="text-brand">Behind the Art</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-lg text-base text-white/60 sm:text-lg"
          >
            From Leica's century-old German optics to DJI's boundary-pushing drone tech — meet the makers.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 border-b border-black/5 bg-background/90 backdrop-blur-xl">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {BRAND_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-600 transition ${
                  activeType === type
                    ? "bg-ink text-white"
                    : "bg-surface text-ink-soft hover:bg-secondary hover:text-ink"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search brands..."
              className="w-full rounded-xl border border-black/10 bg-surface py-2.5 pl-9 pr-4 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="bg-surface py-16">
        <div className="container-page">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-24 text-center">
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-secondary">
                <Search className="h-7 w-7 text-ink-soft" />
              </div>
              <h3 className="font-display text-xl font-700 text-ink">No brands found</h3>
              <p className="mt-2 text-sm text-ink-soft">Try a different search term.</p>
              <button
                onClick={() => { setSearch(""); setActiveType("All"); }}
                className="mt-5 rounded-full bg-brand px-6 py-3 text-sm font-600 text-white"
              >
                Show All Brands
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filtered.map((brand, i) => (
                <motion.button
                  key={brand.id}
                  onClick={() => handleBrandClick(brand)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white text-left transition hover:shadow-soft"
                >
                  {/* Cover image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-secondary">
                    <img
                      src={brand.coverImage}
                      alt={brand.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Logo badge */}
                    <div className="absolute left-4 bottom-4 grid h-12 w-12 place-items-center rounded-2xl bg-white font-display text-xl font-800 text-ink shadow-soft">
                      {brand.logo}
                    </div>
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-700 uppercase tracking-wider text-ink">
                      {brand.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-lg font-700 text-ink">{brand.name}</h3>
                        <p className="text-xs text-ink-soft/60">
                          Est. {brand.founded} · {brand.country}
                        </p>
                      </div>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-ink transition group-hover:bg-brand group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-ink-soft leading-relaxed">
                      {brand.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                      <span className="text-xs text-ink-soft">
                        <span className="font-700 text-ink">{brand.productCount}</span> products
                      </span>
                      <div className="flex gap-1">
                        {brand.featuredTech.slice(0, 1).map((tech) => (
                          <span key={tech} className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-600 text-brand">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-4 z-50 overflow-y-auto rounded-3xl bg-white shadow-2xl md:inset-8 lg:inset-16"
            >
              {/* Modal Header Image */}
              <div className="relative h-52 overflow-hidden rounded-t-3xl md:h-72">
                <img
                  src={selected.coverImage}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white font-display text-2xl font-800 text-ink shadow-soft">
                    {selected.logo}
                  </div>
                  <div className="text-white">
                    <h2 className="font-display text-3xl font-800">{selected.name}</h2>
                    <p className="text-sm text-white/70">Est. {selected.founded} · {selected.country}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:grid lg:grid-cols-3 lg:gap-10">
                {/* Left: Description & History */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand mb-3">About</p>
                    <p className="text-base text-ink-soft leading-relaxed">{selected.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand mb-3">History</p>
                    <p className="text-base text-ink-soft leading-relaxed">{selected.history}</p>
                  </div>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand mb-4">Popular Products</p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {selected.popularProducts?.map((prod) => (
                        <div key={prod.name} className="group overflow-hidden rounded-2xl border border-black/5 bg-surface p-3">
                          <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-display text-sm font-700 text-ink">{prod.name}</h4>
                            <p className="mt-0.5 text-sm font-600 text-brand">${prod.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technologies & Stats */}
                <div className="mt-8 lg:mt-0 space-y-6">
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand mb-4">Brand Stats</p>
                    <dl className="space-y-4">
                      {[
                        ["Founded", selected.founded],
                        ["Country", selected.country],
                        ["Category", selected.type],
                        ["Products", `${selected.productCount} items`],
                      ].map(([label, val]) => (
                        <div key={String(label)} className="flex justify-between border-b border-black/5 pb-3 last:border-0 last:pb-0">
                          <dt className="text-xs text-ink-soft">{label}</dt>
                          <dd className="text-xs font-700 text-ink">{val}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="rounded-2xl bg-[#0a0a0a] p-5">
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand mb-4">Featured Technologies</p>
                    <ul className="space-y-2">
                      {selected.featuredTech?.map((tech) => (
                        <li key={tech} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span className="text-sm text-white/80">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/shop`}
                    onClick={() => setSelected(null)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-brand py-3.5 text-sm font-600 text-white transition hover:bg-[color:var(--brand-soft)]"
                  >
                    Shop {selected.name} Products
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
