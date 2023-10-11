import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import SearchItm from "./SearchItm";

const Banner = () => {
  return (
    <section className="banner-section inner-pages countries">
      {/* Banner Small */}
      <BannerSmall title="Countries">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Countries", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          {/* Search Itm */}
          <SearchItm />
        </div>
      </div>
    </section>
  );
};

export default Banner;
