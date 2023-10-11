import AppDownload from "@/components/homeTwo/AppDownload";
import Banner from "@/components/homeTwo/Banner";
import CallAction from "@/components/homeTwo/CallAction";
import Features from "@/components/homeTwo/Features";
import HappyUsers from "@/components/homeTwo/HappyUsers";
import HowItsWork from "@/components/homeTwo/HowItsWork";
import Security from "@/components/homeTwo/Security";
import Testimonials from "@/components/homeTwo/Testimonials";
import WhyChoose from "@/components/homeTwo/WhyChoose";

export default function HomeTwo() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* How Its Work section */}
      <HowItsWork />

      {/* Why Choose section */}
      <WhyChoose />

      {/* App Download section */}
      <AppDownload />

      {/* Features section */}
      <Features />

      {/* Call Action section */}
      <CallAction />

      {/* Testimonials section */}
      <Testimonials />

      {/* Happy Users section */}
      <HappyUsers />

      {/* Security section */}
      <Security />
    </>
  );
}
