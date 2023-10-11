// import Footer from "@/components/footer/Footer";
import Footer from "@/components/footer/Footer";
import Affiliate from "@/components/home/Affiliate";
import AppDownload from "@/components/home/AppDownload";
import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import Customers from "@/components/home/Customers";
import Faqs from "@/components/home/Faqs";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Payment from "@/components/home/Payment";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Features section */}
      <Features />

      {/* Customers section */}
      <Customers />

      {/* Why Choose Us section */}
      <WhyChooseUs />

      {/* Affiliate section */}
      <Affiliate />

      {/* Payment section */}
      <Payment />

      {/* How It Works section */}
      <HowItWorks />

      {/* App Download section */}
      <AppDownload />

      {/* Faqs section */}
      <Faqs />

      {/* Call To Action section */}
      <CallToAction />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar */}
      <NavBar />

      {page}

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};
