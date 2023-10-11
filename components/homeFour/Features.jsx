import Image from "next/image";
import features_icon_13 from "/public/img/features-icon-13.png";
import features_icon_14 from "/public/img/features-icon-14.png";
import features_icon_15 from "/public/img/features-icon-15.png";
import features_icon_16 from "/public/img/features-icon-16.png";

const Features = () => {
  return (
    <section className="features-index4">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h2 className="title">Solutions That Matter</h2>
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
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={features_icon_13} alt="icon" />
                  </div>
                  <h6>Best Exchange Rate</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={features_icon_14} alt="icon" />
                  </div>
                  <h6>Safe and Secure</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={features_icon_15} alt="icon" />
                  </div>
                  <h6>On Time Payments</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={features_icon_16} alt="icon" />
                  </div>
                  <h6>24/7 Support </h6>
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
