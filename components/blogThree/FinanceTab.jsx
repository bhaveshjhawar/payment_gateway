import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";
import right_icon_5 from "/public//img/right-icon-5.png";
import latest_articles_10 from "/public/img/latest-articles-10.png";
import latest_articles_7 from "/public/img/latest-articles-7.png";
import latest_articles_8 from "/public/img/latest-articles-8.png";
import latest_articles_9 from "/public/img/latest-articles-9.png";

const FinanceTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="finance"
      role="tabpanel"
      aria-labelledby="finance-tab"
    >
      <div className="row cus-mar">
        <div className="col-lg-12">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_7} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single-2">
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
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_8} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single-2">
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
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_9} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single-2">
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
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-area">
            <div className="top-item">
              <Image src={latest_articles_10} alt="image" />
            </div>
            <div className="bottom-item">
              <Link href="/blog-single-2">
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
                <Link href="/blog-single-2">
                  Read More <Image src={right_icon_5} alt="image" />
                </Link>
                <p className="mdr">July 21, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default FinanceTab;
