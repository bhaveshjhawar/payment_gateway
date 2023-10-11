import Image from "next/image";
import features_icon_14 from "/public/img/features-icon-14.png";
import features_icon_16 from "/public/img/features-icon-16.png";
import features_icon_17 from "/public/img/features-icon-17.png";
import features_icon_18 from "/public/img/features-icon-18.png";

const WhyChooseUs = () => {
  return (
    <section className="features-index4 index8">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="title">Why customers choose us</h2>
                <p>
                  Promote Paylio, connect with potential digital wallet holders
                  and earn a lifetime revenue share.
                </p>
              </div>
            </div>
          </div>
          <div className="top-wrapper">
            <div className="row wrapper">
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
                    <Image src={features_icon_17} alt="icon" />
                  </div>
                  <h6>Quick Payouts</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={features_icon_18} alt="icon" />
                  </div>
                  <h6>Unlimited Earnings</h6>
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

export default WhyChooseUs;
