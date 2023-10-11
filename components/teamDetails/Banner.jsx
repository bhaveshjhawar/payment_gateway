import Image from "next/image";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import Social from "../social/Social";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import team_details_profile from "/public/img/team-details-profile.png";
import twitter from "/public/img/twitter.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages team-details">
      {/* Banner Small */}
      <BannerSmall title="Our team">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Our team", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area d-flex justify-content-center">
                <div className="row justify-content-between">
                  <div className="col-lg-4">
                    <div className="img-area">
                      <Image src={team_details_profile} alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="text-area text-start">
                      <div className="name-area d-flex justify-content-between">
                        <div className="name">
                          <h3>Paul Ryan</h3>
                          <p>Chief Financial Officer</p>
                        </div>
                        <div className="social">
                          <ul className="d-flex">
                            {/* Social links */}
                            <Social
                              items={[
                                [facebook, "/"],
                                [twitter, "/"],
                                [instagram, "/"],
                                [linkedin, "/"],
                              ]}
                            />
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        viverra fusce augue dignissim quis nisl non penatibus
                        etiam nisi nunc mauris sed id.Et malesuada fames ac
                        turpis egestas. Sed lectus vestibulum mattis ullamcorper
                        velit sed ullamcorper morbi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-content pt-120">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="single-text">
                      <h4>About Paul Ryan</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        viverra fusce augue dignissim quis nisl non penatibus
                        etiam nisi nunc mauris sed id.Et malesuada fames ac
                        turpis egestas. Sed lectus vestibulum mattis ullamcorper
                        velit sed ullamcorper morbi.
                      </p>
                    </div>
                    <div className="single-text">
                      <h4>Past experience</h4>
                      <p>
                        Velit sed ullamcorper morbi tincidunt ornare massa eget
                        volutpat est velit egestas dui id ornare arcu. Facilisis
                        sed odio morbi quis commodo. Vitae proin sagittis nisl
                        rhoncus mattis rhoncus. Nunc scelerisque viverra mauris
                        in. Vitae suscipit tellus mauris a. Purus in massa
                        tempor nec feugiat nisl pretium fusce id. Nunc sed velit
                        dignissim sodales.
                      </p>
                    </div>
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
