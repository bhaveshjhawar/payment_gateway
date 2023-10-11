import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-section index-9">
      <div className="overlay">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Paylio-vip</h1>
                  <p className="xxlr">
                    Welcome to the most attractive VIP program in the industry.
                  </p>
                  <Link href="/register-2" className="cmn-btn">
                    Join for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
