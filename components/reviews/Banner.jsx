import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog-single-2 reviews">
      {/* Banner Small */}
      <BannerSmall title="Reviews">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Reviews", "/"],
          ]}
        />
      </BannerSmall>
    </section>
  );
};

export default Banner;
