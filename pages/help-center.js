import Banner from "@/components/helpCenter/Banner";
import BrowseByCategory from "@/components/helpCenter/BrowseByCategory";
import Faqs from "@/components/helpCenter/Faqs";
import NeedToContact from "@/components/helpCenter/NeedToContact";

export default function HelpCenter() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Browse By Category section */}
      <BrowseByCategory />

      {/* Faqs section */}
      <Faqs />

      {/* Need To Contact section */}
      <NeedToContact />
    </>
  );
}
