import HeroSection from "@/components/HeroSection";
import TenetsSection from "@/components/TenetsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TributeSection from "@/components/TributeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <TenetsSection />
      <GallerySection />
      <TestimonialsSection />
      <TributeSection />
      <Footer />
    </main>
  );
};

export default Index;
