import Image from "next/image";
import benefits_icon_1 from "/public/img/benefits-icon-1.png";
import benefits_icon_2 from "/public/img/benefits-icon-2.png";
import benefits_icon_3 from "/public/img/benefits-icon-3.png";
import benefits_icon_4 from "/public/img/benefits-icon-4.png";
import benefits_icon_5 from "/public/img/benefits-icon-5.png";
import benefits_icon_6 from "/public/img/benefits-icon-6.png";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h2 className="title">VIP benefits</h2>
                <p>
                  Transact the minimum amount to merchants, buy or sell Crypto
                  to guarantee your VIP status for the quarterly target and get
                  access to:
                </p>
              </div>
            </div>
          </div>
          <div className="top-wrapper">
            <div className="row wrapper">
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_1} alt="icon" />
                  </div>
                  <h6>Crypto transactions & VIP status</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_2} alt="icon" />
                  </div>
                  <h6>Discounted deposits/withdrawals</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_3} alt="icon" />
                  </div>
                  <h6>Exclusive VIP Promotions and Events</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_4} alt="icon" />
                  </div>
                  <h6>Lower FX Fees</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_5} alt="icon" />
                  </div>
                  <h6>Free money transfers</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={benefits_icon_6} alt="icon" />
                  </div>
                  <h6>Dedicated VIP Manager</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
