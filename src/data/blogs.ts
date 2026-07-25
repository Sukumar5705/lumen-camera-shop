export type BlogCategory =
  | "Photography Tips"
  | "Camera Reviews"
  | "Editing Tutorials"
  | "Gear Guides"
  | "Travel Photography"
  | "Wildlife Photography"
  | "Portrait Photography"
  | "Street Photography";

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishDate: string;
  readingTime: number;
  excerpt: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Photography Tips",
  "Camera Reviews",
  "Editing Tutorials",
  "Gear Guides",
  "Travel Photography",
  "Wildlife Photography",
  "Portrait Photography",
  "Street Photography",
];

const AUTHORS: BlogAuthor[] = [
  {
    name: "James Hartley",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    role: "Senior Photographer",
  },
  {
    name: "Elena Vasquez",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    role: "Gear Editor",
  },
  {
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    role: "Wildlife Photographer",
  },
  {
    name: "Sophia Laurent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    role: "Portrait Artist",
  },
  {
    name: "Daniel Okafor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    role: "Street Photographer",
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Sony A7R V vs Canon EOS R5: The Ultimate Full-Frame Showdown",
    slug: "sony-a7r-v-vs-canon-eos-r5-full-frame-showdown",
    coverImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=85",
    category: "Camera Reviews",
    author: AUTHORS[1],
    publishDate: "2026-07-10",
    readingTime: 12,
    featured: true,
    excerpt:
      "Two titans of the full-frame mirrorless world go head-to-head. We spend 30 days shooting with both to determine which camera earns a place in your bag — and which one to reach for on your next major shoot.",
  },
  {
    id: 2,
    title: "The Golden Hour Formula: How to Shoot Breathtaking Landscape Light",
    slug: "golden-hour-formula-landscape-light",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=85",
    category: "Photography Tips",
    author: AUTHORS[0],
    publishDate: "2026-07-08",
    readingTime: 8,
    excerpt:
      "Golden hour is only 30 minutes. We break down exactly how to prepare, position, and expose for the light that transforms ordinary scenes into extraordinary images.",
  },
  {
    id: 3,
    title: "Mastering Lightroom's AI-Powered Masking for Portrait Retouching",
    slug: "lightroom-ai-masking-portrait-retouching",
    coverImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=85",
    category: "Editing Tutorials",
    author: AUTHORS[3],
    publishDate: "2026-07-06",
    readingTime: 10,
    excerpt:
      "Adobe's AI masking tools have changed portrait editing forever. Learn how to use Select Subject, Select Sky, and Luminance Range masks to create professional retouches in minutes, not hours.",
  },
  {
    id: 4,
    title: "The Best Camera Bags for Adventure Photographers in 2026",
    slug: "best-camera-bags-adventure-photographers-2026",
    coverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600&q=85",
    category: "Gear Guides",
    author: AUTHORS[1],
    publishDate: "2026-07-04",
    readingTime: 9,
    excerpt:
      "We tested 14 camera bags across three continents to find the ones that can keep up with professional adventure photographers. Here are our top picks from F-Stop, Peak Design, and Shimoda.",
  },
  {
    id: 5,
    title: "Photographing Japan in Cherry Blossom Season: A Complete Guide",
    slug: "photographing-japan-cherry-blossom-season",
    coverImage: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600&q=85",
    category: "Travel Photography",
    author: AUTHORS[0],
    publishDate: "2026-07-02",
    readingTime: 14,
    excerpt:
      "Sakura season in Japan is a photographer's paradise — and also the most crowded week of the year. We share the secret locations, optimal timing, and camera settings to capture magical blossom shots without fighting the crowds.",
  },
  {
    id: 6,
    title: "Tracking Snow Leopards in the Himalayas with a 600mm Lens",
    slug: "tracking-snow-leopards-himalayas-600mm",
    coverImage: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1600&q=85",
    category: "Wildlife Photography",
    author: AUTHORS[2],
    publishDate: "2026-06-30",
    readingTime: 16,
    excerpt:
      "After six weeks at 4,000 meters in Nepal's Dolpo region, wildlife photographer Marcus Chen finally captured the elusive snow leopard. This is the story of patience, acclimatization, and the Sony 600mm f/4 GM that made it possible.",
  },
  {
    id: 7,
    title: "Window Light Portraits: The Complete Studio-Free Technique",
    slug: "window-light-portraits-studio-free-technique",
    coverImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1600&q=85",
    category: "Portrait Photography",
    author: AUTHORS[3],
    publishDate: "2026-06-28",
    readingTime: 7,
    excerpt:
      "The most beautiful portrait light in the world costs nothing. Natural window light, when used correctly, can rival any studio setup. Here's how to position, modify, and expose for it.",
  },
  {
    id: 8,
    title: "Street Photography in Havana: Finding Colour in the Chaos",
    slug: "street-photography-havana-colour-chaos",
    coverImage: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=1600&q=85",
    category: "Street Photography",
    author: AUTHORS[4],
    publishDate: "2026-06-25",
    readingTime: 11,
    excerpt:
      "Havana is a city frozen in time — a candy-coloured stage where 1950s Chevrolets and crumbling colonial architecture collide. Daniel Okafor documents two weeks of shooting on the streets of Cuba with the Fujifilm X100VI.",
  },
  {
    id: 9,
    title: "Fujifilm X-T5 Long-Term Review: Six Months in the Field",
    slug: "fujifilm-xt5-long-term-review-six-months",
    coverImage: "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=1600&q=85",
    category: "Camera Reviews",
    author: AUTHORS[1],
    publishDate: "2026-06-22",
    readingTime: 15,
    excerpt:
      "After six months of shooting landscapes, portraits, and street photography with the 40MP X-T5, we share what we love, what frustrated us, and whether Fujifilm's compact retro flagship still earns its place in 2026.",
  },
  {
    id: 10,
    title: "Understanding Histograms: Never Blow a Highlight Again",
    slug: "understanding-histograms-exposure-guide",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85",
    category: "Photography Tips",
    author: AUTHORS[0],
    publishDate: "2026-06-20",
    readingTime: 6,
    excerpt:
      "The histogram is the most powerful tool on your camera that most photographers ignore. This visual guide explains how to read it, what to look for, and how to use it in real-time for perfectly exposed shots in any lighting condition.",
  },
  {
    id: 11,
    title: "Capture One 24 vs Lightroom Classic: Which Raw Editor Wins?",
    slug: "capture-one-24-vs-lightroom-classic-comparison",
    coverImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=85",
    category: "Editing Tutorials",
    author: AUTHORS[1],
    publishDate: "2026-06-18",
    readingTime: 13,
    excerpt:
      "We process the same 50 images from a demanding portrait and landscape session in both Capture One 24 and Lightroom Classic. Our findings on color accuracy, skin tones, shadow recovery, and workflow speed may surprise you.",
  },
  {
    id: 12,
    title: "Essential ND Filters for Video: A Cinematographer's Guide",
    slug: "essential-nd-filters-video-cinematographer-guide",
    coverImage: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=1600&q=85",
    category: "Gear Guides",
    author: AUTHORS[2],
    publishDate: "2026-06-15",
    readingTime: 10,
    excerpt:
      "Variable ND, fixed ND, or a filter system? We break down everything you need to know about ND filters for video shooters, including the dreaded X-pattern problem and which brands deliver true color neutrality.",
  },
  {
    id: 13,
    title: "Shooting the Northern Lights in Iceland: Gear, Settings & Timing",
    slug: "shooting-northern-lights-iceland-guide",
    coverImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=85",
    category: "Travel Photography",
    author: AUTHORS[0],
    publishDate: "2026-06-12",
    readingTime: 12,
    excerpt:
      "The Aurora Borealis is notoriously unpredictable, brutally cold, and absolutely stunning. We spent two weeks in Iceland during peak aurora season to bring you a definitive guide to capturing the Northern Lights on camera.",
  },
  {
    id: 14,
    title: "Photographing Humpback Whales: An Underwater Perspective",
    slug: "photographing-humpback-whales-underwater",
    coverImage: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=1600&q=85",
    category: "Wildlife Photography",
    author: AUTHORS[2],
    publishDate: "2026-06-10",
    readingTime: 14,
    excerpt:
      "Swimming alongside 40-ton humpback whales in Tonga requires specialized housing, near-perfect buoyancy control, and very fast reflexes. Marcus Chen shares the gear and techniques behind his award-winning underwater series.",
  },
  {
    id: 15,
    title: "The Rembrandt Lighting Setup: Museum-Quality Portraits at Home",
    slug: "rembrandt-lighting-setup-home-portraits",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85",
    category: "Portrait Photography",
    author: AUTHORS[3],
    publishDate: "2026-06-08",
    readingTime: 8,
    excerpt:
      "The Rembrandt lighting technique — borrowed from 17th-century oil painting — creates a distinctive triangle of light under one eye that immediately elevates portrait photography. Here's how to achieve it with a single speedlight and a reflector.",
  },
  {
    id: 16,
    title: "Shoot Film in a Digital Age: Developing Your Own Black & White",
    slug: "shoot-film-develop-black-white-darkroom",
    coverImage: "https://images.unsplash.com/photo-1536146021566-627ce3c4d813?w=1600&q=85",
    category: "Photography Tips",
    author: AUTHORS[0],
    publishDate: "2026-06-05",
    readingTime: 11,
    excerpt:
      "Film photography is experiencing a genuine renaissance, and developing your own black-and-white film is easier than you think. This beginner's guide walks you through chemistry, equipment, and the meditative process of the darkroom.",
  },
  {
    id: 17,
    title: "DJI RS 4 Pro Review: The Best Camera Gimbal for Solo Filmmakers",
    slug: "dji-rs-4-pro-review-solo-filmmakers",
    coverImage: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1600&q=85",
    category: "Camera Reviews",
    author: AUTHORS[1],
    publishDate: "2026-06-03",
    readingTime: 9,
    excerpt:
      "The RS 4 Pro handles 10kg of camera and lens while fitting in a backpack. After two months of run-and-gun documentary shooting, we share our verdict on DJI's most capable handheld stabilizer yet.",
  },
  {
    id: 18,
    title: "Photoshop's Generative AI Tools: Practical Uses for Photographers",
    slug: "photoshop-generative-ai-photographers-practical-guide",
    coverImage: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=1600&q=85",
    category: "Editing Tutorials",
    author: AUTHORS[3],
    publishDate: "2026-06-01",
    readingTime: 10,
    excerpt:
      "Adobe's Generative Fill, Generative Expand, and Remove tools have divided photographers. We separate the hype from reality, showing exactly which tasks AI tools excel at and where they still fall short of manual techniques.",
  },
  {
    id: 19,
    title: "The Leica M11 Experience: A Week with the World's Most Iconic Camera",
    slug: "leica-m11-experience-week-review",
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=85",
    category: "Camera Reviews",
    author: AUTHORS[0],
    publishDate: "2026-05-28",
    readingTime: 13,
    excerpt:
      "Is the Leica M11 worth $9,000? After one week shooting editorial portraits and street work in Paris, we examine whether this iconic German camera justifies its price — and what kind of photographer it's truly made for.",
  },
  {
    id: 20,
    title: "Building a Budget Landscape Photography Kit Under $2,000",
    slug: "budget-landscape-photography-kit-2000",
    coverImage: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1600&q=85",
    category: "Gear Guides",
    author: AUTHORS[1],
    publishDate: "2026-05-25",
    readingTime: 10,
    excerpt:
      "You don't need a $5,000 mirrorless to shoot stunning landscapes. We've built a complete kit for under $2,000 that includes a capable body, ultra-wide lens, quality tripod, and filters — everything a landscape photographer needs.",
  },
  {
    id: 21,
    title: "Photographing Marrakech: The Medina at Dawn, Dusk, and Night",
    slug: "photographing-marrakech-medina-dawn-dusk-night",
    coverImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=85",
    category: "Travel Photography",
    author: AUTHORS[4],
    publishDate: "2026-05-22",
    readingTime: 12,
    excerpt:
      "Marrakech's ancient medina changes personality every hour. From the misty pre-dawn call to prayer to the golden-lit souks at dusk, Daniel Okafor documents three days of shooting in Morocco's most photogenic city.",
  },
  {
    id: 22,
    title: "African Safari Photography: The Art of the Golden Hour in the Serengeti",
    slug: "african-safari-photography-golden-hour-serengeti",
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85",
    category: "Wildlife Photography",
    author: AUTHORS[2],
    publishDate: "2026-05-20",
    readingTime: 15,
    excerpt:
      "The Serengeti at golden hour is one of Earth's most spectacular visual events. Marcus Chen shares his methodology for capturing the big five in dramatic light — including beam-bag technique, vehicle positioning, and ISO strategy.",
  },
  {
    id: 23,
    title: "On-Camera Flash vs. Off-Camera Flash: When to Use Each",
    slug: "on-camera-flash-vs-off-camera-flash-guide",
    coverImage: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=1600&q=85",
    category: "Portrait Photography",
    author: AUTHORS[3],
    publishDate: "2026-05-18",
    readingTime: 8,
    excerpt:
      "Flash terrifies most photographers, but understanding the difference between a bounce flash and a triggered off-camera strobe opens a world of creative possibility. This guide covers both approaches with real-world scenarios.",
  },
  {
    id: 24,
    title: "Tokyo at Twilight: Street Photography in the World's Most Photogenic City",
    slug: "tokyo-twilight-street-photography-guide",
    coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1600&q=85",
    category: "Street Photography",
    author: AUTHORS[4],
    publishDate: "2026-05-15",
    readingTime: 11,
    excerpt:
      "Tokyo's neon-drenched streets after rain create conditions that photographers chase for years. Daniel Okafor returns to Japan with the Ricoh GR IIIx and shares his blueprint for capturing the city's electric atmosphere.",
  },
  {
    id: 25,
    title: "Nikon Z8 vs Z9: Which Professional Nikon Should You Buy?",
    slug: "nikon-z8-vs-z9-professional-comparison",
    coverImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600&q=85",
    category: "Camera Reviews",
    author: AUTHORS[1],
    publishDate: "2026-05-12",
    readingTime: 12,
    excerpt:
      "The Z8 gives you 90% of the Z9's performance in a smaller, lighter body at half the price. But the Z9's dual card slots, built-in vertical grip, and buffer advantage matter to some pros. We dig into the differences.",
  },
  {
    id: 26,
    title: "Getting Sharp Photos Every Time: AF Modes Explained",
    slug: "getting-sharp-photos-autofocus-modes-explained",
    coverImage: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1600&q=85",
    category: "Photography Tips",
    author: AUTHORS[0],
    publishDate: "2026-05-10",
    readingTime: 7,
    excerpt:
      "AF-S, AF-C, Eye AF, Zone AF, Wide-Area AF — modern cameras offer a bewildering array of focus modes. This definitive guide explains what each mode does, when to use it, and how to configure it for different shooting scenarios.",
  },
  {
    id: 27,
    title: "Colour Grading Cinematic Video in DaVinci Resolve: A Beginner's Workflow",
    slug: "colour-grading-cinematic-video-davinci-resolve-workflow",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=85",
    category: "Editing Tutorials",
    author: AUTHORS[3],
    publishDate: "2026-05-08",
    readingTime: 14,
    excerpt:
      "DaVinci Resolve is free and it's what Hollywood colorists use. This beginner's workflow covers primary grading, secondaries, LUT application, and the node structure that will transform your S-Log and D-Log footage into polished cinematic video.",
  },
  {
    id: 28,
    title: "The Drone Photographer's Legal Guide: Flying Legally in 2026",
    slug: "drone-photography-legal-guide-2026",
    coverImage: "https://images.unsplash.com/photo-1473218861563-0a4a0301d3c8?w=1600&q=85",
    category: "Gear Guides",
    author: AUTHORS[2],
    publishDate: "2026-05-05",
    readingTime: 9,
    excerpt:
      "Drone regulations changed significantly in 2025, and getting them wrong can result in heavy fines. We break down the rules in the US, EU, and UK, covering BVLOS operations, registration requirements, and no-fly zone navigation.",
  },
  {
    id: 29,
    title: "Photographing the Faroe Islands: Where Drama Meets the North Atlantic",
    slug: "photographing-faroe-islands-north-atlantic",
    coverImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&q=85",
    category: "Travel Photography",
    author: AUTHORS[0],
    publishDate: "2026-05-02",
    readingTime: 13,
    excerpt:
      "The Faroe Islands are one of Earth's most dramatically beautiful places and one of its most logistically challenging to photograph. James Hartley spent 12 days navigating unpredictable weather and vertical cliffs to bring back this series.",
  },
  {
    id: 30,
    title: "How I Photograph London's Hidden Street Art Before It Disappears",
    slug: "london-hidden-street-art-photography",
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=85",
    category: "Street Photography",
    author: AUTHORS[4],
    publishDate: "2026-04-30",
    readingTime: 8,
    excerpt:
      "London's street art scene is ephemeral — a Banksy can be painted over in a week. Daniel Okafor has been documenting the city's illegal and sanctioned murals for five years, building a photographic archive of fleeting art.",
  },
];
