import Image from "next/image";
import Link from "next/link";
import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import JobDescription from "./JobDescription";
import clock_icon from "/public/img/clock-icon.png";

const Banner = () => {
  return (
    <section className="banner-section inner-pages open-positions">
      {/* Banner Small */}
      <BannerSmall title="Open Positions">
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Open Positionss", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-area">
                <h2 className="text-uppercase">Digital Marketing Lead</h2>
                <p className="xlr">Work Experience : 7 - 10 years </p>
                <Link href="#apply-now" className="cmn-btn">
                  Apply Now
                </Link>
                <div className="time-area d-flex align-items-center justify-content-center">
                  <span>
                    <Image src={clock_icon} alt="image" /> Full Time
                  </span>
                  <span className="date">Posted on: March 18, 2023</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 text-start">
                  {/* Job Description */}
                  <JobDescription />
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
