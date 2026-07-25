
import { TopBar } from "../components/camera/TopBar";
import { Navbar } from "../components/camera/Navbar";
import { Hero } from "../components/camera/Hero";
import { Categories } from "../components/camera/Categories";
import { FeaturedProducts } from "../components/camera/FeaturedProducts";
import { SEOSection } from "../components/camera/SEOSection";
import { PromoBanner } from "../components/camera/PromoBanner";
import { Newsletter } from "../components/camera/Newsletter";
import { Footer } from "../components/camera/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SEOSection />
      <PromoBanner />
      <Newsletter />
      <Footer />
    </>
  );
}