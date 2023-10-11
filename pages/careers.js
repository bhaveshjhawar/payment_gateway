import Banner from "@/components/careers/Banner";
import Benefits from "@/components/careers/Benefits";
import OpenPositions from "@/components/careers/OpenPositions";
import SendResume from "@/components/careers/SendResume";
import Testimonials from "@/components/careers/Testimonials";

export default function Careers() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Benefits section */}
      <Benefits />

      {/* Testimonials section */}
      <Testimonials />

      {/* Open Positions section */}
      <OpenPositions />

      {/* Send Resume section */}
      <SendResume />
    </>
  );
}
