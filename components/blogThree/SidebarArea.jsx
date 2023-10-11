import Image from "next/image";
import Link from "next/link";
import mail_icon from "/public/img/mail-icon.png";
import popular_articles_img_1 from "/public/img/popular-articles-img-1.png";
import popular_articles_img_2 from "/public/img/popular-articles-img-2.png";
import popular_articles_img_3 from "/public/img/popular-articles-img-3.png";
import sub_icon from "/public/img/sub-icon.png";

const SidebarArea = () => {
  return (
    <div className="sidebar-area">
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
              <Image src={sub_icon} alt="icon" />
            </div>
            <input type="email" placeholder="Search for articles" />
          </div>
          <button className="cmn-btn">
            <span>Search</span>
          </button>
        </form>
      </div>
      <div className="single-side popular">
        <h5>Popular Articles</h5>
        <div className="single-popular">
          <Image src={popular_articles_img_1} alt="image" />
          <Link href="/blog-single-2">
            <h6>How to get paid as a freelancer (easily and on time)</h6>
          </Link>
          <p className="smr">December 18, 2021 — 8 min read</p>
        </div>
        <div className="single-popular">
          <Image src={popular_articles_img_2} alt="image" />
          <Link href="/blog-single-2">
            <h6>How to send money overseas from your credit/debit card</h6>
          </Link>
          <p className="smr">December 18, 2021 — 8 min read</p>
        </div>
        <div className="single-popular">
          <Image src={popular_articles_img_3} alt="image" />
          <Link href="/blog-single-2">
            <h6>How to send money overseas from your bank account</h6>
          </Link>
          <p className="smr">December 18, 2021 — 8 min read</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarArea;
