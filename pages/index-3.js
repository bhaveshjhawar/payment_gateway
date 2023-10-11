import Banner from "@/components/homeThree/Banner";
import CallToAction from "@/components/homeThree/CallToAction";
import Faqs from "@/components/homeThree/Faqs";
import Features from "@/components/homeThree/Features";
import HowItsWork from "@/components/homeThree/HowItsWork";
import Testimonials from "@/components/homeThree/Testimonials";
import Whatinit from "@/components/homeThree/Whatinit";
import HappyUsers from "@/components/homeTwo/HappyUsers";

export default function HomeThree() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* How Its Work section */}
      <HowItsWork />

      {/* What init section */}
      <Whatinit />

      {/* Features section */}
      <Features />

      {/* Happy Users section */}
      <HappyUsers />

      {/* Testimonials section */}
      <Testimonials />

      {/* Call To Action section */}
      <CallToAction />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
