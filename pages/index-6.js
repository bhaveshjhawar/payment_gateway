import BuyCrypto from "@/components/homeFive/BuyCrypto";
import HowItsWork from "@/components/homeFive/HowItsWork";
import Banner from "@/components/homeSix/Banner";
import BusinessAndCommercial from "@/components/homeSix/BusinessAndCommercial";
import Pricing from "@/components/homeSix/Pricing";
import WhatWeOffer from "@/components/homeSix/WhatWeOffer";
import WhatYouNeed from "@/components/homeSix/WhatYouNeed";
import Testimonials from "@/components/homeThree/Testimonials";

export default function HomeSix() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Business And Commercial section */}
      <BusinessAndCommercial />

      {/* What You Need section */}
      <WhatYouNeed />

      {/* Pricing section */}
      <Pricing />

      {/* What We Offer section */}
      <WhatWeOffer />

      {/* How Its Work section */}
      <HowItsWork />

      {/* Buy Crypto section */}
      <BuyCrypto />

      {/* Testimonials section */}
      <Testimonials />
    </>
  );
}
