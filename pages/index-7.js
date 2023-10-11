import Banner from "@/components/homeSeven/Banner";
import HowItsWork from "@/components/homeSeven/HowItsWork";
import Testimonials from "@/components/homeSeven/Testimonials";
import AppDownload from "@/components/homeTwo/AppDownload";

export default function HomeSeven() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* How Its Work section */}
      <HowItsWork />

      {/* App Download section */}
      <AppDownload />

      {/* Testimonials section */}
      <Testimonials />
    </>
  );
}
