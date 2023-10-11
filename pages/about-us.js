import Awards from "@/components/aboutUs/Awards";
import Banner from "@/components/aboutUs/Banner";
import CallToAction from "@/components/aboutUs/CallToAction";
import Careers from "@/components/aboutUs/Careers";
import GetStarted from "@/components/aboutUs/GetStarted";
import OurMission from "@/components/aboutUs/OurMission";
import TeamMember from "@/components/aboutUs/TeamMember";

export default function AboutUs() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* GetStarted section */}
      <GetStarted />

      {/* Our Mission section */}
      <OurMission />

      {/* Call To Action section */}
      <CallToAction />

      {/* Team Member section */}
      <TeamMember />

      {/* Careers section */}
      <Careers />

      {/* Awards section */}
      <Awards />
    </>
  );
}
