import { Phone, RotateCcw, Truck } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden w-full bg-[#0a0a0a] text-white/80 md:block">
      <div className="container-page flex h-10 items-center justify-between text-xs font-medium tracking-wide">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-brand" />
          <span>Free Shipping on Orders Over $99</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="h-3.5 w-3.5 text-brand" />
          <span>30‑Day Easy Returns</span>
        </div>
        <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-white">
          <Phone className="h-3.5 w-3.5 text-brand" />
          <span>+1 (800) 555‑1234</span>
        </a>
      </div>
    </div>
  );
}
