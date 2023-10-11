import Image from "next/image";
import Link from "next/link";
import category_icon_1 from "/public/img/category-icon-1.png";
import category_icon_2 from "/public/img/category-icon-2.png";
import category_icon_3 from "/public/img/category-icon-3.png";
import category_icon_4 from "/public/img/category-icon-4.png";
import category_icon_5 from "/public/img/category-icon-5.png";
import category_icon_6 from "/public/img/category-icon-6.png";
import category_icon_7 from "/public/img/category-icon-7.png";
import category_icon_8 from "/public/img/category-icon-8.png";
import category_icon_9 from "/public/img/category-icon-9.png";

const BrowseByCategory = () => {
  return (
    <section className="browse-by-category">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="title">browse-by-category</h2>
                <p>
                  You can also browse the topics below to find what you are
                  looking for.
                </p>
              </div>
            </div>
          </div>
          <div className="top-wrapper">
            <div className="row wrapper">
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_1} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>Guide to Paylio</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_2} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>My account</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_3} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>Transfers</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_4} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>SEND MONEY</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_5} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>RECEIVING MONEY</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_6} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>Transaction</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_7} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>SECURITY</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_8} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>Business</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-item text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Image src={category_icon_9} alt="icon" />
                  </div>
                  <Link href="/help-center-2">
                    <h5>Countries</h5>
                  </Link>
                  <p>Browse articles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
