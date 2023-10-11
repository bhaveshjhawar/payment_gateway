import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-section index-8">
      <div className="overlay">
        <div className="banner-content pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Paylio Affiliates</h1>
                  <p className="xxlr">
                    You can earn 75$ for every 3 friends you invite to Paylio.
                    Unlimited earning potential and no strings attached!
                  </p>
                  <Link href="/register" className="cmn-btn">
                    Start inviting today
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
