import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";

const Banner = () => {
  return (
    <section className="banner-section inner-pages blog-single-2">
      {/* Banner Small */}
      <BannerSmall title="Blog Single" cls="pb-0">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Blog Single", "/"],
          ]}
        />
      </BannerSmall>
    </section>
  );
};

export default Banner;
