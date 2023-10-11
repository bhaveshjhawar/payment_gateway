import GrowingTeam from "@/components/common/GrowingTeam";
import Banner from "@/components/ourTeam/Banner";
import TeamMember from "@/components/ourTeam/TeamMember";

export default function OurTeam() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Team Member section */}
      <TeamMember />

      {/* Growing Team section */}
      <GrowingTeam />
    </>
  );
}
