import Header from "@/components/Header";
import BannerSlider from "@/components/BannerSlider";
import CategorySection from "@/components/CategorySection";
import ThemeSection from "@/components/ThemeSection";
import Footer from "@/components/Footer";
import StorefrontHero from "@/components/StorefrontHero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header />
      <main className="flex-1">
        <BannerSlider />
        <CategorySection />
        <ThemeSection />
      </main>
      <Footer /> */}
      <StorefrontHero />
    </div>
  );
}
