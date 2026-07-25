import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-[#0a0a0a] py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-700 uppercase tracking-[0.2em] text-brand">Stay in the frame</p>
          <h3 className="mt-3 font-display text-3xl font-700 sm:text-4xl">
            Get first access to new drops and studio deals.
          </h3>
          <p className="mt-3 max-w-md text-white/60">
            Join 40,000+ photographers. One email a week, no filler.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="flex flex-col gap-3 rounded-full bg-white/5 p-2 ring-1 ring-white/10 sm:flex-row"
        >
          <div className="flex flex-1 items-center gap-3 px-4">
            <Mail className="h-4 w-4 text-white/50" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full bg-transparent py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-brand px-6 py-3 text-sm font-600 text-white transition hover:bg-[color:var(--brand-soft)]"
          >
            {sent ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
