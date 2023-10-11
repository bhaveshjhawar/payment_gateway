import Banner from "@/components/contact/Banner";
import ContactForm from "@/components/contact/ContactForm";
import Faqs from "@/components/home/Faqs";

export default function Contact() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Contact Form section */}
      <ContactForm />

      {/* Faqs section */}
      <Faqs />
    </>
  );
}
