import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import blog_banner_two from "/public/img/blog-banner-two.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog blog-2 blog-single">
      {/* Banner Small */}
      <BannerSmall title="Blog Single">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Blog Single", "/"],
          ]}
        />
      </BannerSmall>
      <div className="banner-bottom-area">
        <div className="container">
          <div className="top-area">
            <div className="top-item">
              <Image
                className="blog2-bg-img"
                src={blog_banner_two}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
