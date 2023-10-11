import Banner from "@/components/homeNine/Banner";
import Benefits from "@/components/homeNine/Benefits";
import CallToAction from "@/components/homeNine/CallToAction";
import Faqs from "@/components/homeNine/Faqs";
import GetStarted from "@/components/homeNine/GetStarted";
import PricingPlan from "@/components/homeNine/PricingPlan";

export default function HomeNine() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Benefits section */}
      <Benefits />

      {/* Call To Action section */}
      <CallToAction />

      {/* Pricing Plan section */}
      <PricingPlan />

      {/* Get Started section */}
      <GetStarted />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
