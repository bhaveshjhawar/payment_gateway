import faqData from "@/data/faqData";
import Image from "next/image";
import Faq from "../common/Faq";
import faq_right_sec from "/public/img/faq-right-sec.png";

const Faqs = () => {
  return (
    <section className="faqs-section index3 index9">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row wrapper">
            <div className="col-lg-6">
              <div className="section-header">
                <div className="left">
                  <h2 className="title">Paylio VIP help and FAQs</h2>
                  <p>We have a list of frequently asked questions VIP Level</p>
                </div>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {faqData.slice(0, 8).map((faq) => (
                  // single faq
                  <Faq key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <div className="right-area">
                <Image src={faq_right_sec} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
