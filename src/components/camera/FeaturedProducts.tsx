import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";

const PRODUCTS = [
  {
    name: "Alpha A7 IV Body",
    price: 2499,
    old: 2799,
    rating: 4.9,
    tag: "Bestseller",
    image: "https://www.designinfo.in/wp-content/uploads/nc/p/5/5/2/7/0/55270-485x485.jpg",
  },
  {
    name: "EOS R5 Mirrorless",  
    price: 3899,
    rating: 4.8,
    tag: "New",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdSm4mnRhCUEKeAlurmNMHefeTAOFA2CAJdypJDr2SYZndEpdL",
  },
  {
    name: "Z 50mm f/1.2 Prime",
    price: 1299,
    old: 1499,
    rating: 4.9,
    tag: "-15%",
    image: "https://m.media-amazon.com/images/I/61XJ3Lo3kmL._SX522_.jpg",
  },
  {
    name: "X‑T5 Silver Kit",
    price: 1799,
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaQOQRKjjl6YD7dagoVzQJkv2mbS4L8qdRx3vF4Bf_w&s=10",
  },
];

export function FeaturedProducts() {
  return (
    <section id="deals" className="bg-surface py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand">Featured products</p>
            <h2 className="mt-3 font-display text-4xl font-700 text-ink sm:text-5xl">Picks of the season</h2>
          </div>
          <div className="flex gap-2 text-sm font-600 text-ink-soft">
            {["All", "Cameras", "Lenses", "Bundles"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-4 py-2 transition ${
                  i === 0 ? "bg-ink text-white" : "bg-white hover:bg-ink hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-4 transition hover:shadow-soft"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-700 uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                )}
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow-sm transition hover:bg-brand hover:text-white"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-600 text-ink">{p.rating}</span>
                  <span className="text-xs text-ink-soft/70">· 128 reviews</span>
                </div>
                <h3 className="mt-2 font-display text-base font-700 text-ink">{p.name}</h3>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg font-700 text-ink">
                      ${p.price.toLocaleString()}
                    </span>
                    {p.old && (
                      <span className="text-sm text-ink-soft/60 line-through">
                        ${p.old.toLocaleString()}
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
      </div>
    </section>
  );
}
