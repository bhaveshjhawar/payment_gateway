import Faqs from "@/components/home/Faqs";
import AppDownload from "@/components/homeFour/AppDownload";
import Banner from "@/components/homeFour/Banner";
import CallToAction from "@/components/homeFour/CallToAction";
import Features from "@/components/homeFour/Features";
import HowItsWork from "@/components/homeFour/HowItsWork";
import MarketSolutions from "@/components/homeFour/MarketSolutions";
import Testimonials from "@/components/homeFour/Testimonials";

export default function HomeFour() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Features section */}
      <Features />

      {/* App Download section */}
      <AppDownload />

      {/* How Its Work section */}
      <HowItsWork />

      {/* Market Solutions section */}
      <MarketSolutions />

      {/* Testimonials section */}
      <Testimonials />

      {/* Call To Action section */}
      <CallToAction />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
