import { motion } from "framer-motion";
import { Headphones, RotateCcw, ShieldCheck } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, title: "100% Authentic", copy: "Sourced directly from authorised brand partners." },
  { icon: RotateCcw, title: "Easy Returns", copy: "30 days, no questions asked, free return shipping." },
  { icon: Headphones, title: "Expert Support", copy: "Talk to real photographers seven days a week." },
];

export function SEOSection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
        >
          <img
            src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?w=1000&q=80"
            alt="Photographer at work"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="glass-panel absolute bottom-6 left-6 right-6 rounded-2xl p-5 text-amber-900">
            <div className="font-display text-lg font-700">"Lumen is where I equip every shoot."</div>
            <div className="mt-1 text-xs text-amber-900">— Amelia Reyes, editorial photographer</div>
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand">Why Lumen</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-700 text-ink sm:text-5xl">
            Gear built to outlast the moment you were waiting for.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Lumen is a curated destination for photographers, filmmakers and creative studios who
            demand more from their tools. Every camera, lens and accessory we carry is hand‑picked
            and stress‑tested by our team of working image‑makers, so nothing hits our shelves that
            we would not personally take on assignment. From full‑frame mirrorless bodies and cinema
            primes to carbon tripods, cages and studio lighting, our collection spans the
            world‑class brands that professional creators trust — Sony, Canon, Nikon, Fujifilm,
            Leica, Panasonic and more. We back every purchase with authorised warranties, thirty‑day
            returns and expert advice from real photographers, not scripted call‑centre staff. Free
            shipping on orders over $99, financing available, and next‑day delivery in most metros.
            Shop with confidence and focus on what actually matters: making pictures you're proud of.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-black/5 bg-white p-5 transition hover:shadow-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <b.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-display text-sm font-700 text-ink">{b.title}</h4>
                <p className="mt-1 text-xs text-ink-soft">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
