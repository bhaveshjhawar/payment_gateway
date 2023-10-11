import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-section inner-banner index-5">
      <div className="overlay">
        <div className="banner-content pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Buy and Sell Crypto currency. Instantly</h1>
                  <p className="xxlr">
                    Paylio is the platform you need to buy or sell your
                    cryptocurrencies at the market price, with no hidden fee
                  </p>
                  <Link href="/register-2" className="cmn-btn">
                    Get Strart Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="illu-area"></div>
    </section>
  );
};

export default Banner;
