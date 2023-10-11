import Image from "next/image";
import Link from "next/link";
import index11_illu from "/public/img/index11-illu.png";

const Banner = () => {
  return (
    <section className="banner-section index-11">
      <div className="overlay">
        <div className="banner-content pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="main-content">
                  <h1>You&#39;re safe with us</h1>
                  <p className="xxlr">
                    Paylio is one of the most trusted online payment systems in
                    the world. With the latest in anti-fraud tools and security
                    features, we&#39;ve got you covered 24/7.
                  </p>
                  <Link href="/register" className="cmn-btn">
                    Start sending now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-illu">
        <Image className="wow fadeInUp" src={index11_illu} alt="image" />
      </div>
    </section>
  );
};

export default Banner;
