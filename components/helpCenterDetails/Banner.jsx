import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import profile_info_1 from "/public/img/profile-info-1.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages help-center info">
      {/* Banner Small */}
      <BannerSmall title="Help Center">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Help Center", "/"],
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
                    <h2 className="text-uppercase">
                      What do I need to open an account with Paylio?
                    </h2>
                    <div className="profile-area d-flex justify-content-center align-items-center">
                      <div className="icon-area">
                        <Image src={profile_info_1} alt="image" />
                      </div>
                      <div className="text-area text-start">
                        <h5>John Carter</h5>
                        <p>May 20, 2021</p>
                      </div>
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
