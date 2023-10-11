import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";
import latest_articles_1 from "/public/img/latest-articles-1.png";
import latest_articles_2 from "/public/img/latest-articles-2.png";
import latest_articles_3 from "/public/img/latest-articles-3.png";
import latest_articles_4 from "/public/img/latest-articles-4.png";
import latest_articles_5 from "/public/img/latest-articles-5.png";
import latest_articles_6 from "/public/img/latest-articles-6.png";
import right_icon_5 from "/public/img/right-icon-5.png";

const CryptoTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="crypto"
      role="tabpanel"
      aria-labelledby="crypto-tab"
    >
      <div className="row cus-mar">
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_1} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  What are NFTs and why are some selling for millions of
                  dollars?
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_2} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  How to start investing in the stock market: Step-by-step guide
                  for beginners
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_3} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  7 budgeting tools you should use to better manage and invest
                  your money
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_4} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  How do I buy & sell bitcoin? Everything you need to know
                  before buying bitcoin
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_5} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  Is it smart to invest in cryptocurrency in 2021? What you need
                  to know
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_6} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single">
                <h5>
                  How to save money - 8 simple ways to start saving money every
                  month
                </h5>
              </Link>
              <p>
                Lacus vestibulum sed arcu non. Leo vel fringilla est ullamcorper
                eget nulla facilisi.
              </p>
              <div className="date-area d-flex justify-content-between">
                <Link href="/blog-single">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CryptoTab;
