import Banner from "@/components/helpCenterDetails/Banner";
import CreateAccount from "@/components/helpCenterDetails/CreateAccount";
import NeedToContact from "@/components/helpCenterDetails/NeedToContact";

export default function HelpCenterDetails() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Create Account section */}
      <CreateAccount />

      {/* Need To Contact section */}
      <NeedToContact />
    </>
  );
}
