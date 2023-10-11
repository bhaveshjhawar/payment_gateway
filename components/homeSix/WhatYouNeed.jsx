import Image from "next/image";
import check_3 from "/public/img/check-3.png";
import fully_registered_illu from "/public/img/fully-registered-illu.png";
import got_covered_illu from "/public/img/got-covered-illu.png";
import what_you_need_illu from "/public/img/what-you-need-illu.png";

const WhatYouNeed = () => {
  return (
    <section className="what-you-need">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-header text-center">
                <h2 className="title">What you need to know</h2>
                <p>
                  Easy and simple. Send and receive foreign currencies for your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center">
                <div className="content-area">
                  <h3>Easy and secure international payments</h3>
                  <ul className="feature">
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Easy process, sell & buy currencies in just a few seconds.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Live rates, get the best-updated live rate.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Secure, send payments with Bank-level secure channel.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="img-area">
                  <Image src={what_you_need_illu} alt="image" />
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 d-flex align-items-center cus-order">
                <div className="img-area">
                  <Image src={got_covered_illu} alt="image" />
                </div>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <div className="content-area">
                  <h3>We have got covered, pay the world</h3>
                  <ul className="feature">
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      You can send and receive payments from your customers or
                      supplier.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Our great range of 37 major currencies means you can pay
                      every supplier.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      We offer international payments to over 130 countries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center">
                <div className="content-area">
                  <h3>We are fully registered and regulated</h3>
                  <ul className="feature">
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      FCA registered, we are fully registered with the Financial
                      Conduct Authority.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      HMRC registered, We are also registered with HMRC as MSB.
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Highly secured transaction, We use 2-factor authentication
                      to protect your Account and transactions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="img-area">
                  <Image src={fully_registered_illu} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouNeed;
