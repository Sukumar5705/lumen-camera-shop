import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/camera/TopBar";
import { Navbar } from "../components/camera/Navbar";
import { Footer } from "../components/camera/Footer";
import { blogs, BLOG_CATEGORIES, type Blog, type BlogCategory } from "../data/blogs";

const PAGE_SIZE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-700 uppercase tracking-[0.28em] ${
        light ? "text-white/60" : "text-ink-soft/70"
      }`}
    >
      <span className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1 — Full-screen editorial hero                              */
/* ------------------------------------------------------------------ */
function EditorialHero({ post }: { post: Blog }) {
  return (
    <section className="relative bg-[#0a0a0a] text-white">
      <div className="flex min-h-[92vh] flex-col lg:flex-row">
        {/* Image — 70% */}
        <div className="relative min-h-[52vh] overflow-hidden lg:min-h-0 lg:w-[68%]">
          <motion.img
            initial={{ scale: 1.08, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]" />
          <div className="absolute bottom-6 left-6 hidden items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/70 md:flex">
            <span className="h-px w-10 bg-white/40" />
            Issue 07 — The Lumen Journal
          </div>
        </div>

        {/* Content — 30% */}
        <div className="relative flex flex-1 flex-col justify-center px-5 py-14 sm:px-10 lg:px-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow light>{post.category}</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 lg:text-base">
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <p className="text-sm font-600">{post.author.name}</p>
                <p className="mt-0.5 text-xs text-white/50">
                  {formatDate(post.publishDate)} · {post.readingTime} min read
                </p>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-600 tracking-wide"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand transition group-hover:bg-[color:var(--brand-soft)]">
                <ArrowRight className="h-4 w-4 text-white transition group-hover:translate-x-0.5" />
              </span>
              Read the story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Editorial photography collage                           */
/* ------------------------------------------------------------------ */
function CollageImage({
  post,
  className,
  delay = 0,
}: {
  post: Blog;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${className}`}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full w-full overflow-hidden bg-secondary">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <p className="mt-3 text-[11px] font-600 uppercase tracking-[0.2em] text-ink-soft/60">
        {post.category}
      </p>
    </motion.div>
  );
}

function EditorialCollage({ posts }: { posts: Blog[] }) {
  const [a, b, c, d, e] = posts;
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <motion.div {...fadeUp} className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <Eyebrow>Field Notes</Eyebrow>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Dispatches from the edge of the frame
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Five stories. Five continents. Photographs made in fjords, medinas, and neon-lit alleys
            around the world.
          </p>
        </motion.div>

        {/* Overlapping collage */}
        <div className="relative grid grid-cols-12 gap-y-10 md:gap-y-0">
          <CollageImage post={a} className="col-span-12 aspect-[4/5] md:col-span-5 md:row-start-1" />
          <CollageImage
            post={b}
            delay={0.1}
            className="col-span-12 aspect-[16/10] md:z-10 md:col-span-6 md:col-start-6 md:row-start-1 md:-ml-8 md:mt-20"
          />
          <CollageImage
            post={c}
            delay={0.15}
            className="col-span-12 aspect-square md:z-20 md:col-span-3 md:col-start-3 md:row-start-2 md:-mt-16"
          />
          <CollageImage
            post={d}
            delay={0.2}
            className="col-span-12 aspect-[3/4] md:col-span-4 md:col-start-7 md:row-start-2 md:mt-16"
          />
          <CollageImage
            post={e}
            delay={0.25}
            className="col-span-12 aspect-[5/4] md:col-span-3 md:col-start-11 md:row-start-2 md:-mt-24"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Alternating article layouts                             */
/* ------------------------------------------------------------------ */
function SplitFeature({ post, reversed = false }: { post: Blog; reversed?: boolean }) {
  return (
    <motion.article {...fadeUp} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <Link
        to={`/blog/${post.slug}`}
        className={`group block overflow-hidden bg-secondary ${reversed ? "lg:order-2" : ""}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>
      <div className={reversed ? "lg:order-1" : ""}>
        <Eyebrow>{post.category}</Eyebrow>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mt-5 text-balance font-display text-2xl font-700 leading-tight tracking-tight text-ink transition hover:text-brand sm:text-3xl lg:text-4xl">
            {post.title}
          </h3>
        </Link>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft lg:text-base">
          {post.excerpt}
        </p>
        <div className="mt-7 flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="h-9 w-9 rounded-full object-cover" />
          <p className="text-xs text-ink-soft">
            <span className="font-600 text-ink">{post.author.name}</span> · {formatDate(post.publishDate)} ·{" "}
            {post.readingTime} min
          </p>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="group mt-7 inline-flex items-center gap-2 text-sm font-600 text-ink transition hover:text-brand"
        >
          Continue reading
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

function ImmersiveFeature({ post }: { post: Blog }) {
  return (
    <motion.article {...fadeUp}>
      <Link to={`/blog/${post.slug}`} className="group relative block overflow-hidden bg-ink text-white">
        <div className="aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
          <Eyebrow light>{post.category}</Eyebrow>
          <h3 className="mt-4 max-w-3xl text-balance font-display text-2xl font-700 leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h3>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-2">
              <img src={post.author.avatar} alt={post.author.name} className="h-7 w-7 rounded-full object-cover" />
              {post.author.name}
            </span>
            <span>{formatDate(post.publishDate)}</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function AlternatingFeatures({ posts }: { posts: Blog[] }) {
  const [p1, p2, p3, p4] = posts;
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page space-y-20 md:space-y-28">
        <motion.div {...fadeUp}>
          <Eyebrow>Featured Stories</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Long reads for slow afternoons
          </h2>
        </motion.div>

        <SplitFeature post={p1} />
        <SplitFeature post={p2} reversed />
        <ImmersiveFeature post={p3} />
        <SplitFeature post={p4} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Featured photography categories                         */
/* ------------------------------------------------------------------ */
const CATEGORY_TILES: { category: BlogCategory; label: string }[] = [
  { category: "Travel Photography", label: "Travel" },
  { category: "Wildlife Photography", label: "Wildlife" },
  { category: "Street Photography", label: "Street" },
  { category: "Portrait Photography", label: "Portrait" },
];

function CategoryTiles({ onSelect }: { onSelect: (category: BlogCategory) => void }) {
  return (
    <section className="bg-[#0a0a0a] py-20 text-white md:py-28">
      <div className="container-page">
        <motion.div {...fadeUp} className="mb-12 md:mb-16">
          <Eyebrow light>Explore by Genre</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-700 tracking-tight sm:text-4xl lg:text-5xl">
            Choose your obsession
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORY_TILES.map((tile, i) => {
            const cover = blogs.find((b) => b.category === tile.category);
            const count = blogs.filter((b) => b.category === tile.category).length;
            return (
              <motion.button
                key={tile.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onSelect(tile.category)}
                className="group relative block aspect-[3/4] overflow-hidden text-left"
              >
                <img
                  src={cover?.coverImage}
                  alt={tile.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition group-hover:from-black/90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-[11px] font-600 uppercase tracking-[0.24em] text-white/60">
                      {count} stories
                    </p>
                    <p className="mt-1.5 font-display text-2xl font-700">{tile.label}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition group-hover:border-brand group-hover:bg-brand">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — Journal feed row                                        */
/* ------------------------------------------------------------------ */
function JournalRow({ post, index }: { post: Blog; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % PAGE_SIZE) * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-6 border-t border-black/10 py-10 md:grid-cols-12 md:items-center md:py-14"
    >
      <div className="hidden md:col-span-1 md:block">
        <span className="font-display text-sm font-600 text-ink-soft/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden bg-secondary md:col-span-4">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      </Link>
      <div className="md:col-span-6">
        <p className="text-[11px] font-600 uppercase tracking-[0.22em] text-brand">{post.category}</p>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mt-3 text-balance font-display text-xl font-700 leading-snug tracking-tight text-ink transition group-hover:text-brand sm:text-2xl">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft line-clamp-2">{post.excerpt}</p>
        <p className="mt-4 text-xs text-ink-soft/70">
          <span className="font-600 text-ink">{post.author.name}</span> · {formatDate(post.publishDate)} ·{" "}
          {post.readingTime} min read
        </p>
      </div>
      <div className="hidden md:col-span-1 md:flex md:justify-end">
        <Link
          to={`/blog/${post.slug}`}
          aria-label={`Read ${post.title}`}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/15 text-ink transition group-hover:border-brand group-hover:bg-brand group-hover:text-white"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Section 6 — Editor's picks                                          */
/* ------------------------------------------------------------------ */
function EditorsPicks({ posts }: { posts: Blog[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-background py-20 md:py-28">
      <div className="container-page">
        <motion.div {...fadeUp} className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <Eyebrow>Editor&apos;s Picks</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl lg:text-5xl">
              The stories we can&apos;t stop rereading
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/15 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/15 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp}>
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group w-[78vw] shrink-0 snap-start sm:w-[380px]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <p className="mt-5 text-[11px] font-600 uppercase tracking-[0.22em] text-brand">
                {post.category}
              </p>
              <h3 className="mt-2 text-balance font-display text-lg font-700 leading-snug tracking-tight text-ink transition group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-ink-soft/70">
                {post.author.name} · {post.readingTime} min read
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 7 — Newsletter                                              */
/* ------------------------------------------------------------------ */
function EditorialNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-[#0a0a0a] py-24 text-white md:py-32">
      <div className="container-page">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-700 uppercase tracking-[0.28em] text-white/60">
            The Lumen Journal
          </p>
          <h2 className="mt-6 text-balance font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            One letter. Once a week. <span className="text-brand">Worth opening.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Field notes, gear verdicts, and the photographs behind the stories — written for
            photographers who shoot for a living.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-10 flex max-w-md items-center gap-4 border-b border-white/25 pb-3 transition focus-within:border-brand"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="you@studio.com"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none sm:text-base"
            />
            <button
              type="submit"
              className="shrink-0 text-sm font-600 tracking-wide text-white transition hover:text-brand"
            >
              {sent ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
          <p className="mt-4 text-xs text-white/35">Join 40,000+ photographers. No filler, ever.</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const FEATURE_IDS = [2, 8, 22, 19];
const COLLAGE_IDS = [5, 6, 13, 24, 29];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [page, setPage] = useState(1);
  const journalRef = useRef<HTMLElement>(null);

  const featured = blogs.find((b) => b.featured) ?? blogs[0];

  const sorted = useMemo(
    () =>
      [...blogs].sort(
        (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      ),
    [],
  );

  const collagePosts = useMemo(
    () =>
      COLLAGE_IDS.map((id) => blogs.find((b) => b.id === id)).filter((b): b is Blog => Boolean(b)),
    [],
  );

  const featurePosts = useMemo(
    () =>
      FEATURE_IDS.map((id) => blogs.find((b) => b.id === id)).filter((b): b is Blog => Boolean(b)),
    [],
  );

  const editorsPicks = useMemo(
    () => [...blogs].sort((a, b) => b.readingTime - a.readingTime).slice(0, 8),
    [],
  );

  const filtered = useMemo(() => {
    return sorted.filter((b) => {
      if (b.id === featured.id) return false;
      if (activeCategory !== "All" && b.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (!`${b.title} ${b.excerpt} ${b.author.name}`.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [sorted, search, activeCategory, featured.id]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (p: number) => {
    setPage(p);
    journalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const selectCategory = (category: BlogCategory) => {
    setActiveCategory(category);
    setPage(1);
    journalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Section 1 — Editorial hero */}
      <EditorialHero post={featured} />

      {/* Section 2 — Photography collage */}
      <EditorialCollage posts={collagePosts} />

      {/* Section 3 — Alternating features */}
      <AlternatingFeatures posts={featurePosts} />

      {/* Section 4 — Category tiles */}
      <CategoryTiles onSelect={selectCategory} />

      {/* Section 5 — Journal feed */}
      <section ref={journalRef} className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="container-page">
          <motion.div {...fadeUp} className="mb-10 flex flex-wrap items-end justify-between gap-8 md:mb-14">
            <div>
              <Eyebrow>The Journal</Eyebrow>
              <h2 className="mt-4 text-balance font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Every story, in order
              </h2>
            </div>
            <div className="flex w-full max-w-xs items-center gap-3 border-b border-black/15 pb-2 transition focus-within:border-brand">
              <Search className="h-4 w-4 shrink-0 text-ink-soft/60" />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search the journal..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none"
              />
            </div>
          </motion.div>

          {/* Category filter */}
          <motion.div {...fadeUp} className="mb-4 flex flex-wrap gap-x-6 gap-y-2">
            {["All", ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={`pb-1 text-xs font-600 uppercase tracking-[0.16em] transition ${
                  activeCategory === cat
                    ? "border-b-2 border-brand text-ink"
                    : "border-b-2 border-transparent text-ink-soft/60 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <p className="mb-2 text-xs text-ink-soft/70">
            <span className="font-600 text-ink">{filtered.length}</span> article
            {filtered.length === 1 ? "" : "s"}
          </p>

          {pageItems.length === 0 ? (
            <div className="border-t border-black/10 py-24 text-center">
              <h3 className="font-display text-xl font-700 text-ink">No articles found</h3>
              <p className="mt-2 text-sm text-ink-soft">Try a different search term or category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-600 text-white transition hover:bg-brand"
              >
                Show all articles
              </button>
            </div>
          ) : (
            <div>
              {pageItems.map((post, i) => (
                <JournalRow key={post.id} post={post} index={(currentPage - 1) * PAGE_SIZE + i} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-6 flex items-center justify-between border-t border-black/10 pt-8"
            >
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 text-sm font-600 text-ink transition hover:text-brand disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`grid h-9 w-9 place-items-center text-sm font-600 transition ${
                      p === currentPage
                        ? "border-b-2 border-brand text-ink"
                        : "text-ink-soft/60 hover:text-ink"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 text-sm font-600 text-ink transition hover:text-brand disabled:pointer-events-none disabled:opacity-30"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Section 6 — Editor's picks */}
      <EditorsPicks posts={editorsPicks} />

      {/* Section 7 — Newsletter */}
      <EditorialNewsletter />

      <Footer />
    </>
  );
}
