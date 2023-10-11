import Banner from "@/components/homeFive/Banner";
import BuyCrypto from "@/components/homeFive/BuyCrypto";
import BuySell from "@/components/homeFive/BuySell";
import HowItsWork from "@/components/homeFive/HowItsWork";
import AppDownload from "@/components/homeFour/AppDownload";
import Faqs from "@/components/homeThree/Faqs";

export default function HomeFive() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Buy Sell section */}
      <BuySell />

      {/* Buy Crypto section */}
      <BuyCrypto />

      {/* How Its Work section */}
      <HowItsWork />

      {/* App Download section */}
      <AppDownload />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
