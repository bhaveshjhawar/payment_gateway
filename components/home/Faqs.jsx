import faqData from "@/data/faqData";
import Link from "next/link";
import Faq from "../common/Faq";

const Faqs = () => {
  return (
    <section className="faqs-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6 col-md-10">
              <div className="section-header">
                <div className="left">
                  <h2 className="title">Frequently asked questions</h2>
                  <p>We have a list of frequently asked questions about us</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-2 d-flex align-items-end justify-content-md-end justify-content-start">
              <div className="right">
                <Link href="/register" className="cmn-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="row wrapper">
            <div className="col-lg-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {faqData?.slice(0, 5).map((faq) => (
                  <Faq
                    key={faq.id}
                    faq={faq}
                    dataBsParent="accordionFlushExample"
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="accordionSecond">
                {faqData?.slice(5).map((faq) => (
                  <Faq key={faq.id} faq={faq} dataBsParent="accordionSecond" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
