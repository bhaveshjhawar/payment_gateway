import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import ContactInfo from "./ContactInfo";

const Banner = () => {
  return (
    <section className="banner-section inner-pages contact">
      {/* Banner Small */}
      <BannerSmall title="Contact">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Contact", "/"],
          ]}
        />
      </BannerSmall>
      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cus-z">
              <div className="row cus-mar">
                {/* Contact Info */}
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
