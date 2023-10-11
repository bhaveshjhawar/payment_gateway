import Image from "next/image";
import Link from "next/link";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import blog_profile_two from "/public/img/blog-banner-two.png";
import blog_profile from "/public/img/blog-profile.png";
import right_icon_5 from "/public/img/right-icon-5.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog blog-2">
      {/* Banner Small */}
      <BannerSmall title="Blog Two">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Blog Two", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="top-area">
            <div className="top-item">
              <Image
                className="blog2-bg-img"
                src={blog_profile_two}
                alt="image"
              />
            </div>
            <div className="bottom-item text-start">
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
              <div className="text-area">
                <Link href="/blog-single-2">
                  <h3>
                    What are NFTs and why are some selling for millions of
                    dollars?
                  </h3>
                </Link>
                <p>
                  Lacus vestibulum sed arcu non. Leo vel fringilla est
                  ullamcorper eget nulla facilisi. Ut eu sem integer vitae justo
                  eget magna.
                </p>
              </div>
              <Link href="/blog-single-2">
                Read More <Image src={right_icon_5} alt="image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
