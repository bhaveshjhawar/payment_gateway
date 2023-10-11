import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";

const Banner = () => {
  return (
    <section className="banner-section inner-pages help-center">
      {/* Banner Small */}
      <BannerSmall title="Help Center">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            [" Help Center", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="text-uppercase">How can we help you?</h2>
                    <p className="xlr">
                      Welcome to the Help Centre, where you can find info to
                      help you get started and familiarise yourself with Paylio
                      Global Transfers, or get help with an issue.
                    </p>
                    <form action="#">
                      <div className="search d-flex">
                        <input
                          type="email"
                          placeholder="Search for questions or topics..."
                        />
                        <button className="cmn-btn">
                          <span>Search</span>
                        </button>
                      </div>
                    </form>
                  </div>
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
