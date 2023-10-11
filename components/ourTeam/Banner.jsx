import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import about_us_banner from "/public/img/about-us-banner.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages about-us our-team">
      {/* Banner Small */}
      <BannerSmall title="Our team">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Our team", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <Image src={about_us_banner} alt="image" />
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
