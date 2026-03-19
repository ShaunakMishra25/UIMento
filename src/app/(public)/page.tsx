import ExamCategories from "@/src/modules/landing/components/ExamCategories";
import FeatureGrid from "@/src/modules/landing/components/FeatureGrid";
import FinalCTA from "@/src/modules/landing/components/FinalCTA";
import Footer from "@/src/modules/landing/components/Footer";
import HeroSection from "@/src/modules/landing/components/HeroSection";
import HowItWorks from "@/src/modules/landing/components/HowItWorks";
import Navbar from "@/src/modules/landing/components/Navbar";
import StatsBar from "@/src/modules/landing/components/StatsBar";
import Testimonials from "@/src/modules/landing/components/Testimonials";
import TrustBand from "@/src/modules/landing/components/TrustBand";
import WhyMentoMania from "@/src/modules/landing/components/WhyMentoMania";

export default function PublicPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBand />
      <HowItWorks />
      <ExamCategories />
      <StatsBar />
      <FeatureGrid />
      <WhyMentoMania />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
