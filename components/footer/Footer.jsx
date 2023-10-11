import Image from "next/image";
import Link from "next/link";
import Select from "../common/Select";
import Social from "../social/Social";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import send from "/public/img/send.png";
import twitter from "/public/img/twitter.png";

const lang = [
  { id: 1, name: "English" },
  { id: 2, name: "Bangla" },
  { id: 3, name: "Hindi" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row wrapper">
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
            <div className="col-lg-2 col-md-6">
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
            <div className="col-lg-4 col-md-6">
              <div className="single-area">
                <h5>Subscribe to our news</h5>
                <p>Get the latest happenings and tips from Paylio</p>
                <form action="#">
                  <div className="subscribe d-flex">
                    <input type="email" placeholder="Your Email Address" />
                    <button>
                      <Image src={send} alt="icon" />
                    </button>
                  </div>
                </form>
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
                      {" "}
                      Pixelasis
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                <div className="right-area">
                  {/* Select */}
                  <Select data={lang} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
