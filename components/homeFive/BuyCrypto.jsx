import Link from "next/link";

const BuyCrypto = () => {
  return (
    <section className="buy-crypto">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">Buy Crypto. Become VIP.</h2>
                <p>
                  When you buy or sell crypto using your Paylio wallet, the
                  transactions count towards the threshold to become VIP. With
                  over 100 depositing methods – it’s never been easier to buy
                  cryptocurrency and become a Paylio VIP.
                </p>
                <Link href="/index-9" className="cmn-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCrypto;
