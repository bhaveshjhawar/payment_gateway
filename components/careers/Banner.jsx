import Image from "next/image";
import Link from "next/link";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import careers_banner_bg from "/public/img/careers-banner-bg.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages careers">
      {/* Banner Small */}
      <BannerSmall title="Careers">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Careers", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area">
                <Image src={careers_banner_bg} alt="image" />
                <h2 className="title">Be a part of the Paylio family</h2>
                <p>
                  We are constantly looking for passionate individuals who share
                  our values and want to simplify finance.
                </p>
                <Link href="#open-positions" className="cmn-btn">
                  See our jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
