import Image from "next/image";
import features_icon_10 from "/public/img/features-icon-10.png";
import features_icon_11 from "/public/img/features-icon-11.png";
import features_icon_4 from "/public/img/features-icon-4.png";
import features_icon_5 from "/public/img/features-icon-5.png";
import features_icon_6 from "/public/img/features-icon-6.png";
import features_icon_7 from "/public/img/features-icon-7.png";
import features_icon_8 from "/public/img/features-icon-8.png";
import features_icon_9 from "/public/img/features-icon-9.png";

const Features = () => {
  return (
    <section className="features-index3">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h2 className="title">
                  Why we’re trusted by millions worldwide
                </h2>
                <p>
                  Paylio is a fast and secure service that lets you transfer
                  money online using a computer, smartphone, or our app.
                </p>
              </div>
            </div>
          </div>
          <div className="top-wrapper">
            <div className="row wrapper">
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_4} alt="icon" />
                  </div>
                  <h5>Affordable</h5>
                  <p>Low fees on international money transfers – always</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_5} alt="icon" />
                  </div>
                  <h5>Simple</h5>
                  <p>
                    Send money on mobile app or online anytime from anywhere
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_6} alt="icon" />
                  </div>
                  <h5>Quick</h5>
                  <p>Send money to your loved ones in minutes</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_7} alt="icon" />
                  </div>
                  <h5>Safe & Secure</h5>
                  <p>Our 4-star Trustpilot rating speaks for itself</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_8} alt="icon" />
                  </div>
                  <h5>Fully Regulated</h5>
                  <p>We are registered with the Financial Conduct Authority</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_9} alt="icon" />
                  </div>
                  <h5>Best rates</h5>
                  <p>Best exchange rates,Cheaper than the banks & others.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_10} alt="icon" />
                  </div>
                  <h5>Track My Transfer</h5>
                  <p>Track your money transfer in real time.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={features_icon_11} alt="icon" />
                  </div>
                  <h5>24/7 Support</h5>
                  <p>
                    We send money to 90 countries and open to new countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
