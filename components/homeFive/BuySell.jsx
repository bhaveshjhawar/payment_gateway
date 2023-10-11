import Image from "next/image";
import buy_sell_icon_1 from "/public/img/buy-sell-icon-1.png";
import buy_sell_icon_2 from "/public/img/buy-sell-icon-2.png";
import buy_sell_icon_3 from "/public/img/buy-sell-icon-3.png";
import buy_sell_icon_4 from "/public/img/buy-sell-icon-4.png";
import buy_sell_icon_5 from "/public/img/buy-sell-icon-5.png";
import buy_sell_secure from "/public/img/buy-sell-secure.png";

const BuySell = () => {
  return (
    <section className="buy-sell">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="left-img">
                <Image src={buy_sell_secure} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <h2 className="title">Buy and sell at real market price</h2>
                <p>
                  Instantly buy, sell and exchange cryptocurrencies at fair
                  market rates. Simply deposit and withdraw using your bank
                  account.
                </p>
              </div>
              <div className="bottom-item">
                <div className="single-item d-flex align-items-center">
                  <div className="icon">
                    <Image src={buy_sell_icon_1} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h5>Lowest fees in market</h5>
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="icon">
                    <Image src={buy_sell_icon_2} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h5>Fast and secure transactions</h5>
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="icon">
                    <Image src={buy_sell_icon_3} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h5>256-bit secure encryption</h5>
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="icon">
                    <Image src={buy_sell_icon_4} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h5>100% Private data</h5>
                  </div>
                </div>
                <div className="single-item d-flex align-items-center">
                  <div className="icon">
                    <Image src={buy_sell_icon_5} alt="icon" />
                  </div>
                  <div className="text-area">
                    <h5>99.99% Uptime guarantee</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySell;
