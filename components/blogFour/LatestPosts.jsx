import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import mail_icon from "/public//img/mail-icon.png";
import sub_icon from "/public//img/sub-icon.png";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import latest_posts_1 from "/public/img/latest-posts-1.png";
import latest_posts_2 from "/public/img/latest-posts-2.png";
import latest_posts_3 from "/public/img/latest-posts-3.png";
import latest_posts_4 from "/public/img/latest-posts-4.png";
import linkedin from "/public/img/linkedin.png";
import right_icon_5 from "/public/img/right-icon-5.png";
import twitter from "/public/img/twitter.png";
import view_icon from "/public/img/view-icon.png";

const LatestPosts = () => {
  return (
    <section className="latest-articles posts latest blog-4">
      <div className="overlay pb-120 pt-120">
        <div className="container">
          <div className="row cus-mar">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">Popular Posts</h2>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="img-area text-center">
                  <Image src={latest_posts_1} alt="image" />
                </div>
                <div className="text-area">
                  <Link href="/blog-single">
                    <h5>
                      The Referral Program: $10 in BTC for Every Friend That
                      Joins Paylio
                    </h5>
                  </Link>
                  <p className="date-view d-flex align-items-center">
                    <span>May 7, 2022</span>
                    <span className="view d-flex align-items-center">
                      <Image src={view_icon} alt="icon" />
                      <span>2533</span>
                    </span>
                  </p>
                  <Link href="/blog-single">
                    Read More <Image src={right_icon_5} alt="image" />
                  </Link>
                </div>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="img-area text-center">
                  <Image src={latest_posts_2} alt="image" />
                </div>
                <div className="text-area">
                  <Link href="/blog-single">
                    <h5>
                      Introducing: Collateral Exchange Option for Our Instant
                      Crypto Credit Lines
                    </h5>
                  </Link>
                  <p className="date-view d-flex align-items-center">
                    <span>May 7, 2022</span>
                    <span className="view d-flex align-items-center">
                      <Image src={view_icon} alt="icon" />
                      <span>2533</span>
                    </span>
                  </p>
                  <Link href="/blog-single">
                    Read More <Image src={right_icon_5} alt="image" />
                  </Link>
                </div>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="img-area text-center">
                  <Image src={latest_posts_3} alt="image" />
                </div>
                <div className="text-area">
                  <Link href="/blog-single">
                    <h5>
                      Paylio’s Loyalty Program Now Features Free Crypto
                      Withdrawals
                    </h5>
                  </Link>
                  <p className="date-view d-flex align-items-center">
                    <span>May 7, 2022</span>
                    <span className="view d-flex align-items-center">
                      <Image src={view_icon} alt="icon" />
                      <span>2533</span>
                    </span>
                  </p>
                  <Link href="/blog-single">
                    Read More <Image src={right_icon_5} alt="image" />
                  </Link>
                </div>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="img-area text-center">
                  <Image src={latest_posts_4} alt="image" />
                </div>
                <div className="text-area">
                  <Link href="/blog-single">
                    <h5>
                      How to get paid as a freelancer (easily and on time)
                    </h5>
                  </Link>
                  <p className="date-view d-flex align-items-center">
                    <span>May 7, 2022</span>
                    <span className="view d-flex align-items-center">
                      <Image src={view_icon} alt="icon" />
                      <span>2533</span>
                    </span>
                  </p>
                  <Link href="/blog-single">
                    Read More <Image src={right_icon_5} alt="image" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="single-side">
                  <div className="top-icon">
                    <Image src={sub_icon} alt="icon" />
                  </div>
                  <h5>
                    Subscribe to our newsletter and don&#39;t miss any article!
                  </h5>
                  <p>
                    Enter you email into the form below to join our newsletter.
                  </p>
                  <form action="#">
                    <div className="input-area d-flex">
                      <div className="icon d-grid align-items-center">
                        <Image src={mail_icon} alt="icon" />
                      </div>
                      <input type="email" placeholder="What’s your email?" />
                    </div>
                    <button className="cmn-btn">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                </div>
                <div className="single-side follow">
                  <h5>Follow Us</h5>
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
                <div className="single-side side-banner text-center">
                  <h5>Faster, cheaper global money transfers</h5>
                  <p>Join Paylio today and get two fee-free transfers</p>
                  <Link href="/index-4" className="cmn-btn">
                    <span>Send Money</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
