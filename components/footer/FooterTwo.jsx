import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import apple_btn from "/public/img/apple_btn.png";
import facebook from "/public/img/facebook.png";
import gPlay_btn from "/public/img/gPlay_btn.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import twitter from "/public/img/twitter.png";

const FooterTwo = () => {
  return (
    <footer className="footer-section inner">
      <div className="overlay">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="app-market d-flex justify-content-between align-items-center">
                  <div className="single borders">
                    <Link href="#">
                      <Image src={gPlay_btn} alt="App Store" />
                    </Link>
                    <div className="review-area d-flex align-items-center">
                      <ul className="d-flex star-area align-items-center">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <h6>4.5/5</h6>
                    </div>
                  </div>
                  <div className="single">
                    <Link href="#">
                      <Image src={apple_btn} alt="App Store" />
                    </Link>
                    <div className="review-area d-flex align-items-center">
                      <ul className="d-flex star-area align-items-center">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <Link href="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <h6>4.5/5</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-side">
                  <h6>Subscribe to our news</h6>
                  <form action="#">
                    <div className="subscribe d-flex">
                      <input type="email" placeholder="Your Email Address" />
                      <button className="cmn-btn">
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row wrapper pt-120 pb-120">
            <div className="col-lg-3 col-md-6">
              <div className="single-area">
                <h5>COMPANY</h5>
                <ul className="items">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/our-team">Management Team</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/reviews">Customer Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-area">
                <h5>Solutions</h5>
                <ul className="items">
                  <li>
                    <Link href="/index-4">Transfer Money Abroad</Link>
                  </li>
                  <li>
                    <Link href="/index-5">Receive Money</Link>
                  </li>
                  <li>
                    <Link href="/index-2">Currency Converter</Link>
                  </li>
                  <li>
                    <Link href="/index-2">Rate Alerts</Link>
                  </li>
                  <li>
                    <Link href="/index-6">Payment for Shopping</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-area">
                <h5>Features</h5>
                <ul className="items">
                  <li>
                    <Link href="/login-2">Account</Link>
                  </li>
                  <li>
                    <Link href="/index-3">Card</Link>
                  </li>
                  <li>
                    <Link href="/index-6">Budgeting</Link>
                  </li>
                  <li>
                    <Link href="/index-11">Security</Link>
                  </li>
                  <li>
                    <Link href="/index-8">Referral Program</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-area">
                <h5>Support</h5>
                <ul className="items">
                  <li>
                    <Link href="/help-center">Help centre</Link>
                  </li>
                  <li>
                    <Link href="/fees">Our fees</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/login">Your account</Link>
                  </li>
                  <li>
                    <Link href="/how-works">How it works</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="main-content">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-8 cus-order d-flex justify-content-md-start justify-content-center">
                <div className="left-area">
                  <p className="mdr">
                    PAYLIO © 2022. ALL RIGHTS RESERVED. <span>|</span> Designed
                    by{" "}
                    <Link href="https://themeforest.net/user/pixelaxis">
                      Pixelasis
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                <div className="right-area">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
