import React from "react";
import AnimatedNav from "./components/AnimatedNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import ProductSection from "./components/ProductSection";
import BlogSection from "./components/BlogSection";
import PartnershipSection from "./components/PartnershipSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="font-sans">
      <AnimatedNav />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ProductSection />
      <BlogSection />
      <PartnershipSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
