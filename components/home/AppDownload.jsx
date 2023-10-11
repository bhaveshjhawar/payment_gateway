import Image from "next/image";
import Link from "next/link";
import Select from "../common/Select";
import app_download_left from "/public/img/app-download-left.png";
import apple_btn from "/public/img/apple_btn.png";
import check from "/public/img/check.png";
import gPlay_btn from "/public/img/gPlay_btn.png";

const countryCode = [
  { id: 1, name: "+44" },
  { id: 2, name: "+1" },
  { id: 3, name: "+65" },
  { id: 4, name: "+354" },
  { id: 5, name: "+974" },
];

const AppDownload = () => {
  return (
    <section className="app-download">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <div className="left-area">
                <Image src={app_download_left} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 d-flex align-items-center">
              <div className="right-area">
                <div className="section-header">
                  <h2 className="title">
                    MOBILE APP FOR EASY ACCESS TO YOUR MONEY
                  </h2>
                  <p>
                    Access your account via your mobile phone. View balance,
                    transfer funds, view transactions wherever you are.
                  </p>
                </div>
                <ul className="feature">
                  <li>
                    <div className="icon">
                      <Image src={check} alt="icon" />
                    </div>
                    Login with fingerprint or Face ID.
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check} alt="icon" />
                    </div>
                    Simple few Taps to send money
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check} alt="icon" />
                    </div>
                    View transaction history.
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check} alt="icon" />
                    </div>
                    Get instant App notifications.
                  </li>
                </ul>
                <div className="phone-number">
                  <form
                    action="#"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="top-area d-flex align-items-end">
                      {/* Select  */}
                      <Select data={countryCode} />
                      <input placeholder="Phone Number" type="tel" />
                    </div>
                    <div className="btn-area">
                      <Link href="/register-2" className="cmn-btn">
                        Get Started
                      </Link>
                    </div>
                  </form>
                </div>
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
    </section>
  );
};

export default AppDownload;
