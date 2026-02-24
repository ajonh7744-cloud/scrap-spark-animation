import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaterialsSection from "@/components/MaterialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MaterialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
