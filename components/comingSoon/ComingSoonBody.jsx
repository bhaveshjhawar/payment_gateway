import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import CountdownDisplay from "../common/CountdownDisplay";
import Social from "../social/Social";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import logo_soon from "/public/img/logo-soon.png";
import right_icon_4 from "/public/img/right-icon-4.png";
import twitter from "/public/img/twitter.png";

const ComingSoonBody = () => {
  return (
    <section className="coming-soon">
      <div className="overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <Link href="/">
                <Image src={logo_soon} className="logo" alt="logo" />
              </Link>
              <div className="mid-area pt-120">
                <h3>Paylio is in the Works!</h3>
                <div className="draw-counter d-flex justify-content-center">
                  <div className="head">
                    <div className="date-area countdown d-flex justify-content-between">
                      <Countdown
                        date={Date.now() + 1000000000}
                        renderer={CountdownDisplay}
                      />
                    </div>
                    <div className="time-parameter d-flex justify-content-center">
                      <h5>Days</h5>
                      <h5>Hours</h5>
                      <h5>Minutes</h5>
                      <h5>Seconds</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-area pt-120">
                <p>We are about to go live so watch this space!</p>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <form action="#">
                      <div className="input-field d-flex">
                        <input type="email" placeholder="Your Email" />
                        <button className="btn-area">
                          <span>Start Now</span>
                          <span className="btn-bg">
                            <Image src={right_icon_4} alt="icon" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="social">
                  <ul className="d-flex justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonBody;
