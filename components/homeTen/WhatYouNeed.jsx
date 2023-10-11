import Image from "next/image";
import Link from "next/link";
import apple_btn from "/public/img/apple_btn.png";
import check_3 from "/public/img/check-3.png";
import gPlay_btn from "/public/img/gPlay_btn.png";
import send_and_receive from "/public/img/send-and-receive.png";

const WhatYouNeed = () => {
  return (
    <section className="what-you-need index10">
      <div className="overlay pt-120">
        <div className="container cus-mar">
          <div className="main-content">
            <div className="row">
              <div className="col-lg-6 cus-order d-flex justify-content-center align-items-center">
                <div className="img-area text-center">
                  <Image src={send_and_receive} alt="image" />
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="content-area">
                  <h2>Send and receive payments</h2>
                  <p>
                    The Paylio multicurrency account lets you keep track of your
                    balance wherever you are, in whatever currency you&#39;re
                    using.
                  </p>
                  <ul className="feature">
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Send payments
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Receive payments
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Divide group payments
                    </li>
                  </ul>
                  <div className="app-market">
                    <Link href="#">
                      <Image src={gPlay_btn} alt="App Store" />
                    </Link>
                    <Link href="#">
                      <Image src={apple_btn} alt="App Store" />
                    </Link>
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

export default WhatYouNeed;
