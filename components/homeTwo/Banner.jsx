import Image from "next/image";
import GetStarted from "./GetStarted";
import feature_icon_1 from "/public/img/feature-icon-1.png";
import feature_icon_2 from "/public/img/feature-icon-2.png";
import feature_icon_3 from "/public/img/feature-icon-3.png";

const Banner = () => {
  return (
    <section className="banner-section index-2">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-10">
                <div className="item-bottom">
                  <div className="main-content">
                    <div className="top-area justify-content-center">
                      <h1 className="text-center">
                        Transfer money across borders
                      </h1>
                      <ul>
                        <li>
                          <Image src={feature_icon_1} alt="Icon" />
                          Fast & hassle-free
                        </li>
                        <li>
                          <Image src={feature_icon_2} alt="Icon" />
                          Trusted by over 3M customers
                        </li>
                        <li>
                          <Image src={feature_icon_3} alt="Icon" />
                          Global 24/7 support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get Started */}
      <GetStarted />
    </section>
  );
};

export default Banner;
