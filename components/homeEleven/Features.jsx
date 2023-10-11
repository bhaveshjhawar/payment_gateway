import Image from "next/image";
import Link from "next/link";
import feature_Illu_index11 from "/public/img/feature-Illu-index11.png";
import features_1_icon from "/public/img/features-1-icon.png";
import features_2_icon from "/public/img/features-2-icon.png";
import features_3_icon from "/public/img/features-3-icon.png";
import features_4_icon from "/public/img/features-4-icon.png";
import features_5_icon from "/public/img/features-5-icon.png";

const Features = () => {
  return (
    <section className="features-inner index11">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-header">
                <h3>We take your security seriously</h3>
                <p>
                  Whether you are depositing with your credit card, a trusted
                  bank account or using an alternative payment option, Paylio
                  keeps you safe.
                </p>
              </div>
              <div className="right-area">
                <ul>
                  <li>
                    <Link className="xxlr" href="#">
                      <div className="img-area">
                        <Image src={features_1_icon} alt="image" />
                      </div>
                      Pay your Supplier
                    </Link>
                  </li>
                  <li>
                    <Link className="xxlr" href="#">
                      <div className="img-area">
                        <Image src={features_2_icon} alt="image" />
                      </div>
                      Freelancers
                    </Link>
                  </li>
                  <li>
                    <Link className="xxlr" href="#">
                      <div className="img-area">
                        <Image src={features_3_icon} alt="image" />
                      </div>
                      Bulk Payments
                    </Link>
                  </li>
                  <li>
                    <Link className="xxlr" href="#">
                      <div className="img-area">
                        <Image src={features_4_icon} alt="image" />
                      </div>
                      Online Shopping
                    </Link>
                  </li>
                  <li>
                    <Link className="xxlr" href="#">
                      <div className="img-area">
                        <Image src={features_5_icon} alt="image" />
                      </div>
                      Mobile Top Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="section-illu">
                <Image src={feature_Illu_index11} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
