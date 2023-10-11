import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import blog_banner_illu from "/public/img/blog-banner-illu.png";
import blog_profile from "/public/img/blog-profile.png";
import right_icon_5 from "/public/img/right-icon-5.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog">
      {/* Banner Small */}
      <BannerSmall title="Blog">
        <Breadcrumb
          breadcrumbs={[
            ["home", "/"],
            ["Blog", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
              <div className="col-lg-7 cus-z text-start">
                <div className="profile-area d-flex justify-content-between align-items-center">
                  <div className="profile-left d-flex align-items-center">
                    <div className="profile">
                      <Image src={blog_profile} alt="image" />
                    </div>
                    <h5>Elena Luna</h5>
                  </div>
                  <div className="profile-right">
                    <p className="mdr">July 21, 2021</p>
                  </div>
                </div>
                <a href="blog-single.html">
                  <h3>
                    What are NFTs and why are some selling for millions of
                    dollars?
                  </h3>
                </a>
                <p>
                  Lacus vestibulum sed arcu non. Leo vel fringilla est
                  ullamcorper eget nulla facilisi. Ut eu sem integer vitae justo
                  eget magna.
                </p>
                <a href="blog-single.html">
                  Read More <Image src={right_icon_5} alt="image" />
                </a>
              </div>
              <div className="col-lg-5 cus-z">
                <Image
                  className="right-illu"
                  src={blog_banner_illu}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
