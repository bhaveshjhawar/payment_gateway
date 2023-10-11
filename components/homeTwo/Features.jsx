import Image from "next/image";
import Link from "next/link";
import features_1_icon from "/public/img/features-1-icon.png";
import features_2_icon from "/public/img/features-2-icon.png";
import features_3_icon from "/public/img/features-3-icon.png";
import features_4_icon from "/public/img/features-4-icon.png";
import features_5_icon from "/public/img/features-5-icon.png";
import features_illu from "/public/img/features-illu.png";

const Features = () => {
  return (
    <section className="features-inner">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="section-header text-center">
                <h2 className="title">All Your Payments In One Place</h2>
                <p>
                  We make international money transfer fast, simple and secure.
                  Whichever method you choose, it only takes a few steps to send
                  money online with us
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="left-area">
                <Image src={features_illu} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
