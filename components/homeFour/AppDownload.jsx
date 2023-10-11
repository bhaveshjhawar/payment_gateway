import Image from "next/image";
import Link from "next/link";
import apple_btn from "/public/img/apple_btn.png";
import check_2 from "/public/img/check-2.png";
import gPlay_btn from "/public/img/gPlay_btn.png";
import smart_phone_mockup from "/public/img/smart-phone-mockup.png";

const AppDownload = () => {
  return (
    <section className="app-download inner-app-download index4">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="row">
            <div className="col-lg-5 col-md-8 d-flex align-items-center">
              <div className="right-area">
                <div className="section-header">
                  <h2 className="title">Save time with the Paylio app</h2>
                  <p>
                    You can transfer money at home or on the move with our
                    award-winning app.
                  </p>
                </div>
                <ul className="feature">
                  <li>
                    <div className="icon">
                      <Image src={check_2} alt="icon" />
                    </div>
                    Get the best rates with currency alerts
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_2} alt="icon" />
                    </div>
                    Track your money, every step of the way
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_2} alt="icon" />
                    </div>
                    Save your card details securely and pay in seconds
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
            <div className="col-lg-7 col-md-4">
              <div className="mockup-area wow fadeInUp">
                <Image src={smart_phone_mockup} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
