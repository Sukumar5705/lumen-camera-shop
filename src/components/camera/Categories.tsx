import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

const CATS = [
  {
    title: "Cameras",
    copy: "DSLR, mirrorless and cinema bodies from the best in the industry.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4p69kNbD6gFM2-Yeff2npa3APVSHcxXi5jq5cqJNGg&s=10",
  },
  {
    title: "Lenses",
    copy: "Prime, zoom, wide and telephoto glass tuned for pin‑sharp results.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIunz-NchwrNKKLAph6y8sR6aMFTaArROBVVlwAfM-vw&s=10",
  },
  {
    title: "Tripods",
    copy: "Carbon and aluminium supports for the studio, trail and street.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2MzsbleCZZr9Hgx0ABXqc2ZEpabkm39wd7Y4GoxHfg&s=10",
  },
];

export function Categories() {
  return (
    <section id="shop" className="bg-background py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand">Shop by category</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-700 text-ink sm:text-5xl">
              Everything a photographer could want.
            </h2>
          </div>
          <a href="http://localhost:5173/shop" className="text-sm font-600 text-ink underline underline-offset-4">
            View all categories
          </a>
        </div>
<div className="mt-14 grid gap-6 md:grid-cols-3">
  {CATS.map((c, i) => (
    <motion.div
      key={c.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Link
        to="/shop"
        className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl bg-secondary"
      >
        <img
          src={c.image}
          alt={c.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="relative mt-auto p-7 text-white">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-3xl font-700">
              {c.title}
            </h3>

            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink transition group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-2 max-w-xs text-sm text-white/80">
            {c.copy}
          </p>
        </div>
      </Link>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
