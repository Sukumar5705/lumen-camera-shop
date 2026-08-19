import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingBag,
  Star,
  ChevronRight,
  ChevronLeft,
  X,
  Eye,
  
} from "lucide-react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/camera/TopBar";
import { Navbar } from "../components/camera/Navbar";
import { Footer } from "../components/camera/Footer";
import { CATEGORIES, BRANDS, type Product } from "../data/products";

const PRODUCTS_PER_PAGE = 12;

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "best-selling", label: "Best Selling" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const RATING_OPTIONS = [5, 4, 3];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/products`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleWishlist = (id: number) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleBrand = (b: string) =>
    setSelectedBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategories.length) list = list.filter((p) => selectedCategories.includes(p.category));
    if (selectedBrands.length) list = list.filter((p) => selectedBrands.includes(p.brand));
    list = list.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    if (minRating) list = list.filter((p) => p.rating >= minRating);
    if (inStockOnly) list = list.filter((p) => p.stockStatus !== "Out of Stock");

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "best-selling":
        list.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    return list;
  }, [search, selectedCategories, selectedBrands, minPrice, maxPrice, minRating, inStockOnly, sort]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice(0);
    setMaxPrice(15000);
    setMinRating(0);
    setInStockOnly(false);
    setSearch("");
    setPage(1);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    minPrice > 0 ||
    maxPrice < 15000 ||
    minRating > 0 ||
    inStockOnly;

  const Sidebar = (
    <aside className="w-full space-y-8 lg:w-64 xl:w-72 shrink-0">
      {/* Search */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search products..."
            className="w-full rounded-xl border border-black/10 bg-surface py-2.5 pl-9 pr-4 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Category</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-2.5 group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => { toggleCategory(cat); setPage(1); }}
                className="h-4 w-4 rounded border-black/20 accent-brand"
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition">{cat}</span>
              <span className="ml-auto text-xs text-ink-soft/50">
                {products.filter((p) => p.category === cat).length}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Brand</h3>
        <div className="space-y-2">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex cursor-pointer items-center gap-2.5 group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => { toggleBrand(brand); setPage(1); }}
                className="h-4 w-4 rounded border-black/20 accent-brand"
              />
              <span className="text-sm text-ink-soft group-hover:text-ink transition">{brand}</span>
              <span className="ml-auto text-xs text-ink-soft/50">
                {products.filter((p) => p.brand === brand).length}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-ink-soft">
            <span>${minPrice.toLocaleString()}</span>
            <span>${maxPrice.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={0}
            max={15000}
            step={50}
            value={maxPrice}
            onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
            className="w-full accent-brand"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Min Rating</h3>
        <div className="space-y-2">
          {RATING_OPTIONS.map((r) => (
            <label key={r} className="flex cursor-pointer items-center gap-2.5 group">
              <input
                type="radio"
                name="rating"
                checked={minRating === r}
                onChange={() => { setMinRating(r); setPage(1); }}
                className="h-4 w-4 accent-brand"
              />
              <span className="flex items-center gap-1 text-sm text-ink-soft group-hover:text-ink transition">
                {Array.from({ length: r }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
                <span>& up</span>
              </span>
            </label>
          ))}
          {minRating > 0 && (
            <button onClick={() => setMinRating(0)} className="text-xs text-brand hover:underline">
              Clear rating
            </button>
          )}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="mb-3 font-display text-sm font-700 text-ink">Availability</h3>
        <label className="flex cursor-pointer items-center gap-2.5 group">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => { setInStockOnly(e.target.checked); setPage(1); }}
            className="h-4 w-4 rounded border-black/20 accent-brand"
          />
          <span className="text-sm text-ink-soft group-hover:text-ink transition">In Stock Only</span>
        </label>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full rounded-xl border border-brand/30 bg-brand/5 py-2.5 text-sm font-600 text-brand transition hover:bg-brand hover:text-white"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );

  if (loading) {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-ink-soft">Loading products...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
        <Footer />
      </>
    );
  }

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
            <span className="text-white/80">Shop</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-600 tracking-wide text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            100+ Premium Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-5 font-display text-4xl font-800 tracking-tight sm:text-5xl lg:text-6xl"
          >
            Shop the Full{" "}
            <span className="text-brand">Collection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-lg text-base text-white/60 sm:text-lg"
          >
            Browse cameras, lenses, and accessories from the world's finest photography brands.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface py-12">
        <div className="container-page">
          {/* Top Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-ink-soft">
              Showing <span className="font-600 text-ink">{filtered.length}</span> results
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-600 text-ink transition hover:border-brand hover:text-brand lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
                {hasActiveFilters && (
                  <span className="ml-1 h-5 w-5 rounded-full bg-brand text-[10px] font-700 text-white grid place-items-center">
                    {selectedCategories.length + selectedBrands.length + (minRating > 0 ? 1 : 0) + (inStockOnly ? 1 : 0)}
                  </span>
                )}
              </button>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-600 text-ink focus:border-brand focus:outline-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              {Sidebar}
            </div>

            {/* Mobile Sidebar Drawer */}
            <AnimatePresence>
              {sidebarOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                  />
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="font-display text-lg font-700 text-ink">Filters</h2>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary text-ink"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    {Sidebar}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {paginated.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-secondary">
                    <Search className="h-7 w-7 text-ink-soft" />
                  </div>
                  <h3 className="font-display text-xl font-700 text-ink">No products found</h3>
                  <p className="mt-2 text-sm text-ink-soft">Try adjusting your filters or search terms.</p>
                  <button onClick={clearFilters} className="mt-5 rounded-full bg-brand px-6 py-3 text-sm font-600 text-white transition hover:bg-[color:var(--brand-soft)]">
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {paginated.map((p, i) => (
                    <motion.article
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      whileHover={{ y: -5 }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-4 transition hover:shadow-soft"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        {p.badge && (
                          <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-700 uppercase tracking-wider text-white">
                            {p.badge}
                          </span>
                        )}
                        {p.stockStatus === "Low Stock" && (
                          <span className="absolute left-3 bottom-3 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-700 uppercase tracking-wider text-white">
                            Low Stock
                          </span>
                        )}
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          aria-label="Wishlist"
                          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full shadow-sm transition ${
                            wishlist.includes(p.id)
                              ? "bg-brand text-white"
                              : "bg-white/95 text-ink hover:bg-brand hover:text-white"
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${wishlist.includes(p.id) ? "fill-current" : ""}`} />
                        </button>

                        {/* Quick actions overlay */}
                        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                          {p.stockStatus !== "Low Stock" && (
                            <button className="w-full rounded-xl bg-white/95 py-2 text-xs font-600 text-ink backdrop-blur-sm transition hover:bg-brand hover:text-white flex items-center justify-center gap-1.5">
                              <Eye className="h-3.5 w-3.5" /> Quick View
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-1 flex-col">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span className="text-xs font-600 text-ink">{p.rating}</span>
                          <span className="text-xs text-ink-soft/60">· {p.reviewCount.toLocaleString()}</span>
                        </div>
                        <p className="mt-0.5 text-[10px] uppercase tracking-widest text-ink-soft/50">{p.brand}</p>
                        <h3 className="mt-1 font-display text-sm font-700 text-ink leading-snug">{p.name}</h3>

                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-lg font-700 text-ink">
                              ${p.price.toLocaleString()}
                            </span>
                            {p.oldPrice && (
                              <span className="text-xs text-ink-soft/50 line-through">
                                ${p.oldPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <button
                            aria-label="Add to cart"
                            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:bg-brand"
                          >
                            <ShoppingBag className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-ink transition hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                    <button
                      key={pg}
                      onClick={() => setPage(pg)}
                      className={`grid h-10 w-10 place-items-center rounded-full text-sm font-600 transition ${
                        pg === page
                          ? "bg-ink text-white"
                          : "border border-black/10 bg-white text-ink hover:border-brand hover:text-brand"
                      }`}
                    >
                      {pg}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-ink transition hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
