import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaterialsSection from "@/components/MaterialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MaterialsSection />
        <ReviewsSection />
        <CTASection />
        <MapSection />
        <FAQSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
