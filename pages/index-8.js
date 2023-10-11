import Faqs from "@/components/home/Faqs";
import Banner from "@/components/homeEight/Banner";
import CallAction from "@/components/homeEight/CallAction";
import HowItsWork from "@/components/homeEight/HowItsWork";
import StartEarning from "@/components/homeEight/StartEarning";
import WhyChooseUs from "@/components/homeEight/WhyChooseUs";

export default function HomeEight() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* How Its Work section */}
      <HowItsWork />

      {/* Why Choose Us section */}
      <WhyChooseUs />

      {/* Start Earning section */}
      <StartEarning />

      {/* Call Action section */}
      <CallAction />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
