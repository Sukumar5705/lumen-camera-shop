import {
  FaCamera,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const COLUMNS = [
  {
    title: "Shop",
    items: ["Cameras", "Lenses", "Tripods", "Accessories", "Deals"],
  },
  {
    title: "Help",
    items: ["Shipping", "Returns", "Warranty", "FAQ", "Track order"],
  },
  {
    title: "Company",
    items: ["About", "Journal", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Customer Service",
    items: ["Contact", "Trade‑in", "Financing", "Studio rentals", "Gift cards"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background pt-20">
      <div className="container-page">
        <div className="grid gap-12 border-b border-black/10 pb-14 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white">
                <FaCamera className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-xl font-800 text-ink">
                Lumen<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-ink-soft">
              A premium photography destination for creators who care about their tools. Cameras,
              lenses, tripods and everything between.
            </p>
            <div className="mt-6 flex gap-2">
              {[FaInstagram, FaTwitter, FaYoutube, FaFacebook].map((I, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-ink transition hover:bg-ink hover:text-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-700 text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-ink-soft transition hover:text-brand">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Lumen Camera Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
