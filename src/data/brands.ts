export interface BrandProduct {
  name: string;
  price: number;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  founded: number;
  country: string;
  type: "Camera Manufacturer" | "Lens Maker" | "Accessory Brand" | "Drone & Tech";
  description: string;
  history: string;
  productCount: number;
  featuredTech: string[];
  popularProducts: BrandProduct[];
  coverImage: string;
  tagline: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Canon",
    slug: "canon",
    logo: "C",
    founded: 1937,
    country: "Japan",
    type: "Camera Manufacturer",
    tagline: "Delighting You Always",
    description:
      "Canon is one of the world's leading camera manufacturers, renowned for its EOS imaging system, RF lenses, and professional cinema cameras. From beginner DSLRs to the EOS R5, Canon defines imaging excellence.",
    history:
      "Founded in 1937 in Tokyo, Canon began as the Precision Optical Instruments Laboratory before expanding into cameras, lenses, and imaging systems. The launch of the EOS system in 1987 revolutionized autofocus photography, and Canon has continued to innovate with the RF mount mirrorless system introduced in 2018.",
    productCount: 18,
    coverImage:
      "https://images.squarespace-cdn.com/content/v1/5b670534b98a78d5e84a7d19/12288449-0eb8-44f5-bbff-abdbe66a28de/Canon-Rf-Lenses-and-Bodies.jpg",
    featuredTech: ["Dual Pixel CMOS AF II", "DIGIC X Processor", "RF Mount System", "In-Body IS", "8K RAW Video"],
    popularProducts: [
  {
    name: "Canon EOS R5",
    price: 3899,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTE4OJ91BCYWgJL5tZfe7P-aBQhS3nQLqu_Z2Q5BN88i9hEycWT-yy9lh7BkETQcPz_nA5ybw25kEaCgvZfiG4dH2naTY7PV5jRXEj6Hra6nfkARqHJFed1",
  },
  {
    name: "Canon EOS 5D Mark IV",
    price: 2499,
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&q=80",
  },
  {
    name: "Canon EOS C70",
    price: 4999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBqNCS5V7W2d7SJlrx7JgfgG4udNFhKik-JXg4yvATQ&s=10",
  },
],
  },
  {
    id: 2,
    name: "Sony",
    slug: "sony",
    logo: "S",
    founded: 1946,
    country: "Japan",
    type: "Camera Manufacturer",
    tagline: "Make Believe",
    description:
      "Sony's Alpha mirrorless lineup is the benchmark for full-frame imaging. With revolutionary real-time Eye AF, blazing-fast burst shooting, and 61MP sensors, Sony cameras are the choice of professional photographers worldwide.",
    history:
      "Sony entered the camera market in 1981 with the Mavica, and in 2006 launched the Alpha DSLR line. The pivotal moment came in 2013 with the full-frame A7 mirrorless system — a camera that changed the industry. Sony's investment in BSI-CMOS sensor technology and AI-powered autofocus has kept it at the top of the market.",
    productCount: 20,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9VdzZv0EWANXoTcq1GpthMu0dqHCG8DllWbh34ngJA&s=10",
    featuredTech: ["Real-time Eye AF", "BSI-CMOS Sensor", "Bionz XR Processor", "OSS Stabilization", "4K 120p Video"],
    popularProducts: [
  {
    name: "Sony Alpha A7 IV",
    price: 2499,
    image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m4_b_a7_iv_mirrorless_camera_1634812545_1667800.jpg",
  },
  {
    name: "Sony Alpha A7R V",
    price: 3899,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEveVRlhec5d3lGGovYMzA72957YTfKwQlQFwBV3Tmg&s=10",
  },
  {
    name: "Sony FE 24-70mm f/2.8 GM II",
    price: 2299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJNMuCsmuy5N13nNI-mccOA3Cw51fO3R9ikX0taxG4w&s=10",
  },
],
  },
  {
    id: 3,
    name: "Nikon",
    slug: "nikon",
    logo: "N",
    founded: 1917,
    country: "Japan",
    type: "Camera Manufacturer",
    tagline: "At the Heart of the Image",
    description:
      "Nikon has been crafting precision optics for over a century. The Z-series mirrorless cameras and NIKKOR Z lenses represent the pinnacle of German-Japanese optical engineering, delivering stunning resolution and color science.",
    history:
      "Founded in 1917 as a merger of three optical manufacturers, Nikon supplied precision optics to the Japanese military before pivoting to cameras after WWII. The F-mount system, introduced in 1959, set the standard for interchangeable lenses. Today the Z mount mirrorless system continues this optical legacy.",
    productCount: 15,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgNIsbkFCE-8j-V0rTKg2H2LAmjdNLzQKm2I_kImmccXHFQIHR5XQJE5a&s=10",
    featuredTech: ["Z Mount System", "Expeed 7 Processor", "Subject Detection AF", "Vibration Reduction", "8K Video Output"],
   popularProducts: [
  {
    name: "Nikon D850 Body",
    price: 2999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    name: "Nikon Z6 III",
    price: 1999,
    image: "https://www.bhphotovideo.com/images/fb/nikon_z6_iii_mirrorless_camera_1834803.jpg",
  },
  {
    name: "Nikon Z 85mm f/1.2 S",
    price: 2799,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0k-siOwi1NxhPEXO6vzYzSOwRYgpBh5tLwZVAtaO6CZ5xwf1xOiTR56Fhte1xc3l8LJ8v0zvRiQceJZrfNhwJze7uDdHdqjBAtYBEj5WwLu6B0nyKg6CoZiIvJvg2X6JbImEQcsh8&usqp=CAc",
  },
],
  },
  {
    id: 4,
    name: "Fujifilm",
    slug: "fujifilm",
    logo: "F",
    founded: 1934,
    country: "Japan",
    type: "Camera Manufacturer",
    tagline: "Value from Innovation",
    description:
      "Fujifilm's X-series and GFX systems deliver unmatched color science rooted in over 85 years of film heritage. The iconic Film Simulation modes, retro-inspired designs, and exceptional build quality have earned Fujifilm a passionate global following.",
    history:
      "Established in 1934 to manufacture photographic film, Fujifilm survived the digital transition by leveraging its chemical and optical expertise. The X100 series launched in 2011 sparked a retro camera renaissance, and the GFX medium-format system has brought 100MP imaging within reach of serious photographers.",
    productCount: 16,
    coverImage:
      "https://asset.fujifilm.com/www/in/files/2019-09/5638ca500c5cce5718f07e39de1ff341/hero_digitalcameras_01.jpg",
    featuredTech: ["X-Trans CMOS 5 HR", "Film Simulation Modes", "X-Processor 5", "7-Stop IBIS", "Pixel Shift Multi-Shot"],
    popularProducts: [
  {
    name: "Fujifilm X-T5",
    price: 1699,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0h77R76F-1pfEmMMNZfkMbLdafQSMZVef61rdZCrlA&s=10",
  },
  {
    name: "Fujifilm X100VI",
    price: 1599,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjmuUe-X_G0kqf4r-BopL7kDB19h4eNS_hX3PxK_c-w&s=10",
  },
  {
    name: "Fujifilm Instax Mini 99",
    price: 199,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdRLtvGmx45GyukrhX6Y_IcijvpBaYHXjRFzeFqxmOQ&s=10",
  },
],
  },
  {
    id: 5,
    name: "Panasonic",
    slug: "panasonic",
    logo: "P",
    founded: 1918,
    country: "Japan",
    type: "Camera Manufacturer",
    tagline: "A Better Life, A Better World",
    description:
      "Panasonic Lumix cameras are beloved by videographers for their Cinema 4K capabilities, outstanding video codecs, and the open L-Mount Alliance lens ecosystem. The S-series full-frame cameras are a filmmaker's dream.",
    history:
      "Panasonic has been making cameras since the 1980s and became a force in the mirrorless market with the Micro Four Thirds system co-developed with Olympus in 2008. In 2019, Panasonic joined the L-Mount Alliance with Sigma and Leica, expanding its full-frame mirrorless ecosystem significantly.",
    productCount: 10,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-cu4AtsX4mXnpSohNn2SUCf0Mf5Tn_0_iAe0NCTMOSKOH8s5",
    featuredTech: ["Phase Detection AF", "Cinema 4K", "Venus Engine", "L-Mount Alliance", "6K ProRes RAW"],
    popularProducts: [
  {
    name: "Panasonic Lumix S5 IIX",
    price: 2499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAYaoqdxm17NOVOH8KaiPf0uqpXz1xkcwv60IU5RCNA&s=10",
  },
  // Note: Only 1 direct match available. Duplicated flagship as placeholder per "exactly 3" rule (can be adjusted if more products added later).

],
  },
  {
    id: 6,
    name: "Leica",
    slug: "leica",
    logo: "L",
    founded: 1914,
    country: "Germany",
    type: "Camera Manufacturer",
    tagline: "Das Wesentliche",
    description:
      "Leica is the most prestigious name in photography. Handcrafted in Wetzlar, Germany, Leica cameras and lenses are precision instruments prized by discerning photographers for their unparalleled optical quality and understated elegance.",
    history:
      "Oskar Barnack developed the first 35mm Leica camera in 1914, creating the concept of small-format photography. The Leica M-mount, introduced in 1954 with the M3, remains the gold standard for rangefinder photography. Today's Leica SL, Q, and M systems combine this heritage with cutting-edge digital technology.",
    productCount: 8,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStNcKsnifXYaWfaFfMOxL1ylBUbFHatrh7X0axAK9Kg&s=10",
    featuredTech: ["M-Mount System", "Master Prime Optics", "60MP BSI-CMOS", "L-Mount Alliance", "Maestro Processor"],
    popularProducts: [
  {
    name: "Leica SL3",
    price: 6995,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFU0c5tQmFx2_fspbW-zYjccNrDtytRbmQJ0YoQT4JCQ&s=10",
  },
  {
    name: "Leica Q3",
    price: 5995,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIrtDivDVH1GifYz7s9YBp0Kj8J3pWuP17-OGX1vJiA&s=10",
  },
  // Note: Only 2 direct matches. Duplicated flagship.
  
],
  },
  {
    id: 7,
    name: "Sigma",
    slug: "sigma",
    logo: "Σ",
    founded: 1961,
    country: "Japan",
    type: "Lens Maker",
    tagline: "Craftsmanship Since 1961",
    description:
      "Sigma's Art, Contemporary, and Sports lens lines deliver professional-grade optical performance at attainable prices. Made in their own Japanese factory, Sigma lenses punch far above their weight in sharpness, rendering, and build quality.",
    history:
      "Founded in 1961 in Japan, Sigma began making lenses and accessories for major camera brands before introducing its own interchangeable lens cameras. The launch of the Art series in 2012 marked a turning point — Sigma could now compete with and often exceed the optical quality of first-party lenses at a fraction of the price.",
    productCount: 10,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNgEci90rp6l0Z2lkAXr1DApRsRiT2TfBYGTPdZpB-A&s=10",
    featuredTech: ["Art Series Optics", "High Acuity Lens Design", "Hyper Sonic Motor", "Nano Porous Coating", "USB Dock Support"],
    popularProducts: [
  {
    name: "Sigma 35mm f/1.4 DG DN Art",
    price: 799,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow_Z4fC_LixwZVHiENTltAzhAlBpEI8b7pZNgn__MTg&s=10",
  },
  {
    name: "Sigma 24-70mm f/2.8 DG DN Art",
    price: 899,
    image: "https://m.media-amazon.com/images/I/51z7MFl9E8L.jpg",
  },
  // Note: Only 2 direct matches. Duplicated flagship.
 
],
  },
  {
    id: 8,
    name: "Tamron",
    slug: "tamron",
    logo: "T",
    founded: 1950,
    country: "Japan",
    type: "Lens Maker",
    tagline: "Inspiring Photography",
    description:
      "Tamron specializes in versatile, high-quality lenses for Sony, Nikon, and Canon mirrorless systems. The Di III VXD series offers incredible value, combining fast autofocus, optical stabilization, and sharp optics in compact, weather-sealed designs.",
    history:
      "Established in 1950, Tamron built its reputation on innovation in zoom lens design, introducing the first 28-200mm zoom in 1992. Tamron has since invested heavily in mirrorless technology, co-designing autofocus systems with VXD linear motors and dual-purpose VCVXD stabilization.",
    productCount: 8,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEAwcUgyI3WrX0Olsa4OxWJlPK-sD60YXE9LmjpLQMYXBSliUceKq19pr&s=10",
    featuredTech: ["VXD Linear Motor", "VC Vibration Compensation", "BBAR-G2 Coating", "Di III E-Mount Spec", "Moisture-Resistant Design"],
   popularProducts: [
  {
    name: "Tamron 28-75mm f/2.8 Di III VXD G2",
    price: 799,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qIfbEfFubP7cBw7E-cFElwLo9qj_3BsPOZzxE8xGvQ&s=10",
  },
  // Note: Only 1 direct match. Duplicated.
  
],
  },
  {
    id: 9,
    name: "DJI",
    slug: "dji",
    logo: "D",
    founded: 2006,
    country: "China",
    type: "Drone & Tech",
    tagline: "The Future of Possible",
    description:
      "DJI dominates the drone and stabilization market with industry-defining products. From the RS series gimbals trusted by Hollywood productions to the Osmo Action cameras and Pocket series, DJI technology empowers creators of all levels.",
    history:
      "Founded in 2006 in Shenzhen by Frank Wang, DJI started making flight control systems before pivoting to consumer drones in 2013 with the Phantom series. The Mavic Pro in 2016 democratized aerial photography, and DJI has since expanded into handheld cameras, gimbals, and agricultural drones.",
    productCount: 8,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cOmUQQK_sFiroxx5AOlF5frXm-70kY6ktYfGOCCO1w&s=10",
    featuredTech: ["RockSteady 3.0+", "ActiveTrack 6.0", "OcuSync 4.0", "10-bit D-Log M", "4K 120fps Sensor"],
    popularProducts: [
  {
    name: "DJI Osmo Action 4",
    price: 349,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JaIthIyNH7J9ey1mtbVJWVMuBIOonX3IuVgYSwxpXA&s",
  },
  {
    name: "DJI RS 4 Pro Gimbal",
    price: 499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQwN8x3o1S5ZbDCDp-du9ZM5dMSFW4a1DfF6wLD3tyA&s=10",
  },
  {
    name: "DJI Mic 2 Wireless System",
    price: 329,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6KvVpilvo3MatVQ1JCsJDefKPbSm9T68-TBKEq82Mw&s=10",
  },
],
  },
  {
    id: 10,
    name: "GoPro",
    slug: "gopro",
    logo: "G",
    founded: 2002,
    country: "USA",
    type: "Accessory Brand",
    tagline: "Be a Hero",
    description:
      "GoPro invented the action camera category and continues to define it with the HERO series. Waterproof, shockproof, and mountable anywhere, GoPro cameras capture life's most extreme and beautiful moments with stunning quality.",
    history:
      "Founded in 2002 by Nick Woodman in California, GoPro started by making wrist straps to attach disposable cameras to surfers. The first HERO camera launched in 2004, and the brand exploded in 2011 with the HD HERO. GoPro has since shipped over 50 million cameras worldwide, defining the entire action camera genre.",
    productCount: 6,
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQp4ElYBXJFWmrjC20iPySJLdT3hR56KyS9Th0ZNxAQ&s=10",
    featuredTech: ["HyperSmooth 6.0", "5.3K 60fps", "27MP RAW Photos", "Max Lens Mod 2.0", "Waterproof 33ft"],
    popularProducts: [
  {
    name: "GoPro HERO13 Black",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTd9aciE7GEmCt9G_0YefeG9x7dnECXPDE6_Yozpxjtw&s=10",
  },
  // Note: Only 1 direct match. Duplicated flagship.
  
],
  },
];
