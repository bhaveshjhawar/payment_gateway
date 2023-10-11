import Image from "next/image";
import Link from "next/link";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import blog_banner_four from "/public/img/blog-banner-four.png";
import right_icon_5 from "/public/img/right-icon-5.png";
import view_icon from "/public/img/view-icon.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog blog-2 blog-4">
      {/* Banner Small */}
      <BannerSmall title="Blog">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Blog", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="top-area">
            <div className="row">
              <div className="col-lg-6">
                <Image
                  className="left-img"
                  src={blog_banner_four}
                  alt="image"
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center text-start">
                <div className="right-side">
                  <Link href="/blog-single-2">
                    <h3>Pay with Paylio And Get 1% Instant Cashback!</h3>
                  </Link>
                  <p className="date-view d-flex align-items-center">
                    <span>May 7, 2022</span>
                    <span className="view d-flex align-items-center">
                      <Image src={view_icon} alt="icon" />
                      <span>2533</span>
                    </span>
                  </p>
                  <p>
                    Make your money go further with Paylio’s loyalty reward
                    campaign. We have now extended the deadline of our 1 %
                    Instant Cashback…
                  </p>
                  <Link href="/blog-single">
                    Read More <Image src={right_icon_5} alt="image" />
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

export default Banner;
