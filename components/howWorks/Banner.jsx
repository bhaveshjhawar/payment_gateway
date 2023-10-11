import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog-single-2 reviews">
      {/* Banner Small */}
      <BannerSmall title="How it works">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["How it works", "/"],
          ]}
        />
      </BannerSmall>
    </section>
  );
};

export default Banner;
