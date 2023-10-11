import Image from "next/image";
import Link from "next/link";
import right_icon_5 from "/public/img/right-icon-5.png";
import trending_posts_1 from "/public/img/trending-posts-1.png";
import trending_posts_2 from "/public/img/trending-posts-2.png";
import trending_posts_3 from "/public/img/trending-posts-3.png";
import trending_posts_4 from "/public/img/trending-posts-4.png";
import trending_posts_5 from "/public/img/trending-posts-5.png";
import trending_posts_6 from "/public/img/trending-posts-6.png";
import view_icon from "/public/img/view-icon.png";

const TrendingPosts = () => {
  return (
    <section className="latest-articles posts trending blog-4">
      <div className="overlay pb-120 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-header">
                <h2 className="title">Trending Posts</h2>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_1} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>
                    What is Bitcoin Cash and is it different than Bitcoin?
                  </h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_2} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>Tips For Smooth And Cheap Online Money Transfers</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_3} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>Money Transfer Services Can Help Small Businesses</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_4} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>Major Companies Accepting Crypto Payments in 2021</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_5} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>
                    What is the best and most secure crypto wallet of 2021?
                  </h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <div className="img-area text-center">
                  <Image src={trending_posts_6} alt="image" />
                </div>
                <Link href="/blog-single-2">
                  <h5>All you need to know about the crypto world</h5>
                </Link>
                <p className="date-view d-flex align-items-center">
                  <span>4 days ago</span>
                  <span className="view d-flex align-items-center">
                    <Image src={view_icon} alt="icon" />
                    <span>2533</span>
                  </span>
                </p>
                <Link href="/blog-single-2">
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

export default TrendingPosts;
