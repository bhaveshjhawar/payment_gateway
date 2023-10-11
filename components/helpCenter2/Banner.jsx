import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import help_details_icon from "/public/img/help-details-icon.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages help-center details">
      {/* Banner Small */}
      <BannerSmall title="Help Center">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Help Center", "/"],
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
                    <div className="icon icon-svg d-flex align-items-center justify-content-center">
                      <Image
                        src={help_details_icon}
                        className="one"
                        alt="icon"
                      />
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.9927 101.25V92.5781C22.9927 92.5781 24.0239 78.2812 40.8052 76.125C44.7895 75.5625 48.727 77.4375 50.9302 68.0625"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_0"
                        ></path>
                        <path
                          d="M95.4136 102.305V92.5781C95.4136 92.5781 94.3823 78.2812 77.6011 76.125C73.6167 75.5625 69.6792 77.4375 67.4761 68.0625"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_1"
                        ></path>
                        <path
                          d="M76.2656 49.1016C75.375 61.4063 68.0625 71.0157 59.1562 71.0157C49.6641 71.0157 42.3516 61.0079 41.9531 47.6251"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_2"
                        ></path>
                        <path
                          d="M41.9531 47.625C42.75 43.4531 44.7656 38.5781 49.1953 34.6875C49.1953 34.6875 54.6328 38.4375 62.5547 38.3438C66.2109 38.4375 67.8281 37.8281 67.8281 37.8281C67.8281 37.8281 70.5469 37.2422 72.7734 39.4453C74.0391 40.7109 76.0078 44.2266 76.2891 49.4766"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_3"
                        ></path>
                        <path
                          d="M42.0231 48.7031C42.0231 48.7031 40.5465 42.7031 40.4762 42.3515C40.3825 42 37.4528 33.7031 45.3278 29.8359C45.3278 29.8359 41.8356 25.7578 47.7887 23.9297C53.7419 22.1015 69.2106 21.539 75.9606 29.039C77.5778 30.6094 79.8278 38.0156 76.1715 49.9922"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_4"
                        ></path>
                        <path
                          d="M45.75 75.6797L58.4297 83.0156C59.0859 83.3906 59.8828 83.3906 60.5156 82.9922L72.4922 75.6797"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_5"
                        ></path>
                        <path
                          d="M35.063 98.2031V110.039"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_6"
                        ></path>
                        <path
                          d="M82.8047 98.5782V110.414"
                          stroke="#7633FF"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_7"
                        ></path>
                        <path
                          d="M109.031 42.0938C111.656 48.3984 113.109 55.3359 113.109 62.6016C113.109 92.0625 89.2261 115.945 59.7651 115.945C30.3042 115.945 6.42139 92.0625 6.42139 62.6016C6.42139 33.1406 30.3042 9.25781 59.7651 9.25781C61.1714 9.25781 62.5776 9.30469 63.9839 9.42188"
                          stroke="#ED815B"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_8"
                        ></path>
                        <path
                          d="M93.0703 4.35941L97.0078 12.375L105.867 13.6407L99.4687 19.8985L100.969 28.6875L93.0703 24.5391L85.1484 28.6875L86.6719 19.8985L80.2734 13.6407L89.1094 12.375L93.0703 4.35941Z"
                          stroke="#ED815B"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          className="skIYapzg_9"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-uppercase">My account</h2>
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
