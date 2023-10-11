import Image from "next/image";
import Link from "next/link";
import app_download_screen from "/public/img/app-download-screen.png";
import apple_btn from "/public/img/apple_btn.png";
import check_alt from "/public/img/check-alt.png";
import gPlay_btn from "/public/img/gPlay_btn.png";

const AppDownload = () => {
  return (
    <section className="app-download inner-app-download">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-area wow fadeInUp">
                <Image src={app_download_screen} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 d-flex align-items-center">
              <div className="right-area">
                <div className="section-header">
                  <h2 className="title">
                    Money transfers at your fingertips with our app
                  </h2>
                </div>
                <ul className="feature">
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Send money quickly or start a transfer and pay in-store
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Track your money transfer in real time.
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Send again quickly to friends and family.
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
    </section>
  );
};

export default AppDownload;
