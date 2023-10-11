import Image from "next/image";
import features_icon_1 from "/public/img/features-icon-1.png";
import features_icon_2 from "/public/img/features-icon-2.png";
import features_icon_3 from "/public/img/features-icon-3.png";
import features_icon_4 from "/public/img/features-icon-4.png";

const Features = () => {
  return (
    <section className="features-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="section-header">
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
          <div className="row wrapper">
            <div className="col-lg-3 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_1} alt="icon" />
                </div>
                <h5>Affordable</h5>
                <p>Low fees on international money transfers – always</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_2} alt="icon" />
                </div>
                <h5>Simple</h5>
                <p>Send money on mobile app or online anytime from anywhere</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_3} alt="icon" />
                </div>
                <h5>Quick</h5>
                <p>Send money to your loved ones in minutes</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={features_icon_4} alt="icon" />
                </div>
                <h5>Safe & Secure</h5>
                <p>Our 4-star Trustpilot rating speaks for itself</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
