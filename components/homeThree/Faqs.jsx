import faqData from "@/data/faqData";
import Image from "next/image";
import Link from "next/link";
import Faq from "../common/Faq";
import faq_right from "/public/img/faq-right.png";

const Faqs = () => {
  return (
    <section className="faqs-section index3">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-header text-center">
                <div className="left">
                  <h2 className="title">Frequently asked questions</h2>
                  <p>
                    Can&#39;t find it here? Check out our{" "}
                    <Link href="/help-center">Help center</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wrapper">
            <div className="col-lg-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {faqData.map((faq) => (
                  // single faq
                  <Faq key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-area text-center">
                <Image src={faq_right} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
