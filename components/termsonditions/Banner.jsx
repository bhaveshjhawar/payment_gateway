import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import protecting_privacy from "/public/img/protecting-privacy.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages privacy-policy">
      {/* Banner Small */}
      <BannerSmall title="Terms and Conditions">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Terms and Conditions", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cus-z">
              <div className="top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="icon-area">
                      <Image src={protecting_privacy} alt="image" />
                    </div>
                    <h2 className="text-uppercase">Terms of use described</h2>
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
