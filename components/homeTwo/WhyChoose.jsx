import Image from "next/image";
import choose_us_icon_1 from "/public/img/choose-us-icon-1.png";
import choose_us_icon_2 from "/public/img/choose-us-icon-2.png";
import choose_us_icon_3 from "/public/img/choose-us-icon-3.png";
import choose_us_icon_4 from "/public/img/choose-us-icon-4.png";
import choose_us_icon_5 from "/public/img/choose-us-icon-5.png";
import choose_us_icon_6 from "/public/img/choose-us-icon-6.png";
import choose_us_icon_7 from "/public/img/choose-us-icon-7.png";
import choose_us_icon_8 from "/public/img/choose-us-icon-8.png";

const WhyChoose = () => {
  return (
    <section className="why-choose-us inner-choose-us">
      <div className="overlay pt-120 pb-120 cus-pad">
        <div className="container">
          <div className="main-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9">
                <div className="section-header text-center">
                  <h2 className="title">Why sending money with Paylio?</h2>
                  <p>
                    Send and receive money in minutes from people you know and
                    trust
                  </p>
                </div>
              </div>
            </div>
            <div className="top-wrapper">
              <div className="row wrapper">
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_1} alt="icon" />
                    </div>
                    <h5>Global Network</h5>
                    <p>
                      We send money to 90 countries and open to new countries
                      regularly
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_2} alt="icon" />
                    </div>
                    <h5>Fixed costs</h5>
                    <p>
                      We display the exchange rate, transfer fees and the amount
                      they will receive
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_3} alt="icon" />
                    </div>
                    <h5>Multi trans.option</h5>
                    <p>
                      Send your money however you want - via cards and bank
                      accounts or other option
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_4} alt="icon" />
                    </div>
                    <h5>Live exchange Rate</h5>
                    <p>
                      Our exchange rates are live 24/7. You take more when it
                      goes up
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_5} alt="icon" />
                    </div>
                    <h5>Best rates</h5>
                    <p>
                      Best exchange rates,Cheaper than the banks & others
                      competitive on the market.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_6} alt="icon" />
                    </div>
                    <h5>Rate Alerts</h5>
                    <p>
                      Need to know when a currency hits a specific rate? The
                      Paylio Rate Alerts will let you know
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_7} alt="icon" />
                    </div>
                    <h5>Track My Transfer</h5>
                    <p>
                      With paylio you can know all the important information
                      about your transfer.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={choose_us_icon_8} alt="icon" />
                    </div>
                    <h5>24/7 Support</h5>
                    <p>
                      We send money to 90 countries and open to new countries
                      regularly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
