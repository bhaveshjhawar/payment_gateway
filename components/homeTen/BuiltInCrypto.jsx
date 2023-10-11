import Image from "next/image";
import Link from "next/link";
import apple_btn from "/public/img/apple_btn.png";
import built_in_crypto from "/public/img/built-in-crypto.png";
import check_3 from "/public/img/check-3.png";
import gPlay_btn from "/public/img/gPlay_btn.png";

const BuiltInCrypto = () => {
  return (
    <section className="what-you-need index10 second">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="main-content">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="content-area">
                  <h2>Built-in crypto capabilities</h2>
                  <p>
                    Enter the exciting world of crypto trading with Paylio’s
                    built-in platform. Trade on the go with the app, or set up
                    automatic or recurring orders, so you never miss an
                    opportunity.
                  </p>
                  <ul className="feature">
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Funds and stocks
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      Cryptocurrencies
                    </li>
                    <li>
                      <div className="icon">
                        <Image src={check_3} alt="icon" />
                      </div>
                      ETFs and bonds
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
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="img-area text-center">
                  <Image src={built_in_crypto} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltInCrypto;
