import Image from "next/image";
import Link from "next/link";
import popular_posts_1 from "/public/img/popular-posts-1.png";
import popular_posts_2 from "/public/img/popular-posts-2.png";
import popular_posts_3 from "/public/img/popular-posts-3.png";
import popular_posts_4 from "/public/img/popular-posts-4.png";
import popular_posts_5 from "/public/img/popular-posts-5.png";
import popular_posts_6 from "/public/img/popular-posts-6.png";
import right_icon_5 from "/public/img/right-icon-5.png";
import view_icon from "/public/img/view-icon.png";

const PopularPosts = () => {
  return (
    <section className="latest-articles posts blog-4">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">Popular Posts</h2>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_1} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>Prepaid Cards Types and Differences</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
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
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_2} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>10 Best Crypto currencies to Invest</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
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
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_3} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>Top 5 Financial Tech Trends in 2021</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2422</span>
                  </span>
                </p>
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_4} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>Major Companies Accepting Crypto Payments in 2021</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
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
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_5} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>
                    What Is The Cheapest Way To Transfer Money Internationally?
                  </h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>3784</span>
                  </span>
                </p>
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={popular_posts_6} alt="image" />
                </div>
                <Link href="/blog-single">
                  <h5>Get €10 Cashback When You Deposit With Trustly</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>1189</span>
                  </span>
                </p>
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
