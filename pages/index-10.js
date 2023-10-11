import WhyChooseUs from "@/components/homeEight/WhyChooseUs";
import Faqs from "@/components/homeNine/Faqs";
import Banner from "@/components/homeTen/Banner";
import BuiltInCrypto from "@/components/homeTen/BuiltInCrypto";
import WhatYouNeed from "@/components/homeTen/WhatYouNeed";

export default function HomeTen() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* What You Need section */}
      <WhatYouNeed />

      {/* Built In Crypto section */}
      <BuiltInCrypto />

      {/* Why Choose Us section */}
      <WhyChooseUs />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
