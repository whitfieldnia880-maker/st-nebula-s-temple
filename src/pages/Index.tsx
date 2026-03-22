import HeroSection from "@/components/HeroSection";
import TenetsSection from "@/components/TenetsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TributeSection from "@/components/TributeSection";
import RanksSection from "@/components/RanksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <TenetsSection />
      <GallerySection />
      <TestimonialsSection />
      <RanksSection />
      <TributeSection />
      <Footer />
    </main>
  );
};

export default Index;
