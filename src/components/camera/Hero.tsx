import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    tag: "New Season · 2026",
    title: "Capture Life in Stunning Detail",
    copy: "Studio‑grade cameras, cinema lenses, and precision accessories — engineered for photographers who refuse to compromise.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7pM0LRzvb2mPpaduGhpnRoV05E0dYR5M8BFoTUC7Yg&s=10",
  },
  {
    tag: "Mirrorless · Full Frame",
    title: "Every Frame, Effortlessly Sharp",
    copy: "Discover the new Alpha Pro series with 61MP sensors and 8K cinema recording built for the road.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEPM-DEusaj_59NTsyqXozBahavfngylUKM6iXGT3Tg&s=10",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const slide = SLIDES[i];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[640px] w-[640px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]" />

      <div className="container-page relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          <motion.p
            key={slide.tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-600 tracking-wide text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {slide.tag}
          </motion.p>

          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-6 text-balance font-display text-[44px] font-800 leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]"
          >
            {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-brand">{slide.title.split(" ").slice(-2).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {slide.copy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-600 text-white shadow-glow transition hover:bg-[color:var(--brand-soft)]"
            >
              Shop the collection
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-600 text-white/90 transition hover:bg-white/5">
              <Play className="h-4 w-4 fill-current" /> Watch film
            </button>
          </motion.div>

          {/* Stats */}
          <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["120+", "Premium brands"],
              ["4.9★", "Rated by pros"],
              ["25y", "Serving creators"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-2xl font-700">{k}</div>
                <div className="mt-1 text-xs text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="animate-float relative mx-auto aspect-[5/4] w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
            <img
              src={slide.image}
              alt="Featured camera"
              className="relative h-full w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            />
            {/* floating price chip */}
            
          </motion.div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-brand" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="relative border-t border-white/10 py-6">
        <div className="flex gap-16 overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-16 whitespace-nowrap px-8 text-white/50">
            {["SONY", "CANON", "NIKON", "FUJIFILM", "LEICA", "PANASONIC", "HASSELBLAD", "SIGMA"]
              .concat(["SONY", "CANON", "NIKON", "FUJIFILM", "LEICA", "PANASONIC", "HASSELBLAD", "SIGMA"])
              .map((b, k) => (
                <span key={k} className="font-display text-lg font-700 tracking-[0.3em]">
                  {b}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
