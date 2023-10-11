import Image from "next/image";
import what_we_offer_icon_1 from "/public/img/what-we-offer-icon-1.png";
import what_we_offer_icon_2 from "/public/img/what-we-offer-icon-2.png";
import what_we_offer_icon_3 from "/public/img/what-we-offer-icon-3.png";
import what_we_offer_icon_4 from "/public/img/what-we-offer-icon-4.png";
import what_we_offer_icon_5 from "/public/img/what-we-offer-icon-5.png";
import what_we_offer_icon_6 from "/public/img/what-we-offer-icon-6.png";

const WhatWeOffer = () => {
  return (
    <section className="features-index3 what-we-offer">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="title">What we offer</h2>
                <p>
                  Pay online, send money or buy and sell cryptocurrencies – all
                  while earning loyalty points you can exchange for rewards.
                </p>
              </div>
            </div>
          </div>
          <div className="top-wrapper">
            <div className="row wrapper">
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_1} alt="icon" />
                  </div>
                  <h5>Spot Transfer</h5>
                  <p>Buy your currency now and send it immediately.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_2} alt="icon" />
                  </div>
                  <h5>Forward Booking</h5>
                  <p>
                    Book your currency with a future date, from 1-day up-to 1
                    year in advance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_3} alt="icon" />
                  </div>
                  <h5>Limit Orders</h5>
                  <p>
                    Achieve your desire exchange rate when the rate reaches a
                    specific level
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_4} alt="icon" />
                  </div>
                  <h5>Stop Loss</h5>
                  <p>
                    Avoid losses in an adverse move and execute your deal with a
                    minimum lower rate to Stop loss.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_5} alt="icon" />
                  </div>
                  <h5>Multiple Payments</h5>
                  <p>
                    Save your time by managing a large number of payments to
                    your beneficiaries. Simply upload a payment file to our
                    system
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon">
                    <Image src={what_we_offer_icon_6} alt="icon" />
                  </div>
                  <h5>E-Wallet</h5>
                  <p>
                    We provide 37 currencies with E-wallet facilities where you
                    can buy, hold, and view your funds and utilize when you need
                    it.
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

export default WhatWeOffer;
