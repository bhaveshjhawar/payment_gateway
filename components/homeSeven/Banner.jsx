import Image from "next/image";
import Select from "../common/Select";
import earth_banner from "/public/img/earth-banner.png";
import earth_icon from "/public/img/earth-icon.png";
import submit_icon from "/public/img/submit-icon.png";

const country = [
  { id: 1, name: "Choose your Country" },
  { id: 2, name: "USA" },
  { id: 3, name: "England" },
  { id: 4, name: "Switzerland" },
  { id: 5, name: "Canada" },
];

const Banner = () => {
  return (
    <section className="banner-section index-7">
      <div className="overlay">
        <div className="banner-content pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Recharge your mobile quickly and stay connected</h1>
                  <p className="xxlr">with the people that matter most.</p>
                  <form action="#">
                    <div className="country d-flex align-items-center">
                      <div className="icon-area">
                        <div className="icon-aea">
                          <Image src={earth_icon} alt="icon" />
                        </div>
                      </div>
                      {/* Select */}
                      <Select data={country} />

                      <button>
                        <Image src={submit_icon} alt="image" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-illu">
        <Image className="wow fadeInUp" src={earth_banner} alt="image" />
      </div>
      <div className="banner-bottom">
        <div className="call-action-inner second">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bottom-area">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <div className="left">
                        <h3>Send Top-up around the world</h3>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-7 d-flex justify-content-center justify-content-md-end">
                      <div className="right-area d-flex ">
                        <div className="single one">
                          <h3>+500</h3>
                          <p>Networks</p>
                        </div>
                        <div className="single two">
                          <h3>140</h3>
                          <p>Countries</p>
                        </div>
                        <div className="single three">
                          <h3>+140</h3>
                          <p>Top-ups sent daily</p>
                        </div>
                      </div>
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
