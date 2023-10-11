import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import about_banner_icon1 from "/public/img/about-banner-icon1.png";
import about_banner_icon2 from "/public/img/about-banner-icon2.png";
import about_banner_icon3 from "/public/img/about-banner-icon3.png";
import about_banner_icon4 from "/public/img/about-banner-icon4.png";
import about_us_banner from "/public/img/about-us-banner.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages about-us">
      {/* Banner Small */}
      <BannerSmall title=" About Us">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["About Us", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <Image src={about_us_banner} alt="image" />
                    <h2>We are a smart kind of money transfer company</h2>
                    <p>
                      Welcome to Paylio. For a lot of people who work abroad
                      away from home, sending money to another country can be a
                      necessity. Companies also may have to send money to other
                      countries if they are multinational to pay their employees
                      or making Invoice Payments. However, there can be a number
                      of obstacles that stand in the way of what should be a
                      relatively easy task. Obstacles like high exchange rates,
                      costly processes, and timing can end up becoming very time
                      consuming and expensive in some cases.
                    </p>
                    <p>
                      Finding a way to successfully transfer money from one
                      country to another without incurring high fees can be
                      difficult. Finding a money transfer company that operates
                      at a reasonable price with transparent services can be
                      especially difficult. But not with Paylio. Paylio is
                      different
                    </p>
                  </div>
                </div>
              </div>
              <div className="row bottom-content">
                <div className="col-xl-3 col-md-6">
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <Image src={about_banner_icon1} alt="image" />
                    </div>
                    <div className="text-area">
                      <h3>100</h3>
                      <p>Country</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <Image src={about_banner_icon2} alt="image" />
                    </div>
                    <div className="text-area">
                      <h3>200</h3>
                      <p>Currency</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="single-item d-flex align-items-center">
                    <div className="icon">
                      <Image src={about_banner_icon3} alt="image" />
                    </div>
                    <div className="text-area">
                      <h3>95%</h3>
                      <p>Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="single-item d-flex align-items-center b-none">
                    <div className="icon">
                      <Image src={about_banner_icon4} alt="image" />
                    </div>
                    <div className="text-area">
                      <h3>24/7</h3>
                      <p>Support</p>
                    </div>
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

export default Banner;
