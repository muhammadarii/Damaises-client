import FooterSection from "@/components/section/FooterSection";
import AboutSection from "@/components/section/HomeSection/AboutSection";
import HeroSection from "@/components/section/HomeSection/HeroSection";
import OurRestaurantSection from "@/components/section/HomeSection/OurRestaurantSection";
import OurSpaSection from "@/components/section/HomeSection/OurSpaSection";
import PackageSection from "@/components/section/HomeSection/PackageSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurRestaurantSection />
      <OurSpaSection />
      <PackageSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
