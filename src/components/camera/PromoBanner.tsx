import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export function PromoBanner() {
  return (
    <section className="bg-background py-16">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] text-white"
        >
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand/30 blur-[120px]" />

          <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16 lg:p-20">
            <div>
              <p className="text-xs font-700 uppercase tracking-[0.2em] text-brand">Limited time</p>
              <h3 className="mt-4 font-display text-4xl font-800 leading-[1.05] sm:text-6xl">
                Save Up To <span className="text-brand">20%</span> on Season's Gear.
              </h3>
              <p className="mt-5 max-w-md text-white/70">
                Selected mirrorless bodies, prime lenses and studio accessories from the world's most
                trusted brands. Ends Sunday.
              </p>
              <Link to="/shop" className="">
              <a
                href=""
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-600 text-white transition hover:bg-[color:var(--brand-soft)]"
              > 
              
                Shop the sale <ArrowRight className="h-4 w-4" />
              </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
