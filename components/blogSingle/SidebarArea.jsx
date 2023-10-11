import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import author_1 from "/public/img/author-1.png";
import facebook from "/public/img/facebook.png";
import instagram from "/public/img/instagram.png";
import linkedin from "/public/img/linkedin.png";
import mail_icon from "/public/img/mail-icon.png";
import search_icon from "/public/img/search-icon.png";
import sub_icon from "/public/img/sub-icon.png";
import twitter from "/public/img/twitter.png";

const SidebarArea = () => {
  return (
    <div className="sidebar-area">
      <div className="single-side follow author text-center">
        <div className="author-pro text-center">
          <Image src={author_1} alt="image" />
        </div>
        <h5>Jonh Carter</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
      <div className="single-side">
        <div className="top-icon">
          <Image src={sub_icon} alt="icon" />
        </div>
        <h5>Subscribe to our newsletter and don&#39;t miss any article!</h5>
        <p>Enter you email into the form below to join our newsletter.</p>
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
      <div className="single-side search">
        <h5>Search on the blog</h5>
        <form action="#">
          <div className="input-area d-flex">
            <div className="icon d-grid align-items-center">
              <Image src={search_icon} alt="icon" />
            </div>
            <input type="email" placeholder="Search for articles" />
          </div>
          <button className="cmn-btn">
            <span>Search</span>
          </button>
        </form>
      </div>
      <div className="single-side side-banner text-center">
        <h5>Faster, cheaper global money transfers</h5>
        <p>Join Paylio today and get two fee-free transfers</p>
        <Link href="/index-4" className="cmn-btn">
          <span>Send Money</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarArea;
