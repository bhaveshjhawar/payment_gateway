import Image from "next/image";
import diamond from "/public/img/diamond.png";
import gold from "/public/img/gold.png";
import silver from "/public/img/silver.png";

const PricingPlan = () => {
  return (
    <section className="pricing-plan">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7 d-flex align-items-center justify-content-center">
              <div className="section-header text-center">
                <h2 className="title">What does each level offer?</h2>
                <p>It’s easy and fast to join the VIP club.</p>
              </div>
            </div>
          </div>
          <div className="row wrapper">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-block text-center">
                <div className="icon-box">
                  <div className="icon-outer">
                    <Image src={silver} alt="icon" />
                  </div>
                </div>
                <div className="head-area">
                  <h5>Silver</h5>
                </div>
                <div className="whats-inckuded">
                  <h5>What&#39;s included:</h5>
                  <ul className="features">
                    <li>Dedicated 24/7 VIP care</li>
                    <li>Dedicated VIP Manager</li>
                    <li>Discounted deposits & withdrawals </li>
                    <li>3.19% FX Fees</li>
                    <li>Free money transfers </li>
                    <li>
                      1.50% crypto buy/sell transactions for accounts in USD and
                      EUR
                    </li>
                    <li>
                      3.00% crypto buy/sell transactions for accounts in other
                      currencies
                    </li>
                  </ul>
                </div>
                <div className="price-box">
                  <p>Transfer to merchant</p>
                  <h4>15,000 USD</h4>
                  <span>Per Quarter</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-block text-center">
                <div className="icon-box">
                  <div className="icon-outer">
                    <Image src={gold} alt="icon" />
                  </div>
                </div>
                <div className="head-area">
                  <h5>Gold</h5>
                </div>
                <div className="whats-inckuded">
                  <h5>What&#39;s included:</h5>
                  <ul className="features">
                    <li>Dedicated 24/7 VIP care</li>
                    <li>Dedicated VIP Manager</li>
                    <li>Discounted deposits & withdrawals </li>
                    <li>3.19% FX Fees</li>
                    <li>Free money transfers </li>
                    <li>
                      1.50% crypto buy/sell transactions for accounts in USD and
                      EUR
                    </li>
                    <li>
                      3.00% crypto buy/sell transactions for accounts in other
                      currencies
                    </li>
                  </ul>
                </div>
                <div className="price-box">
                  <p>Transfer to merchant</p>
                  <h4>45,000 USD</h4>
                  <span>Per Quarter</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-block text-center">
                <div className="icon-box">
                  <div className="icon-outer">
                    <Image src={diamond} alt="icon" />
                  </div>
                </div>
                <div className="head-area">
                  <h5>Diamond</h5>
                </div>
                <div className="whats-inckuded">
                  <h5>What&#39;s included:</h5>
                  <ul className="features">
                    <li>Dedicated 24/7 VIP care</li>
                    <li>Dedicated VIP Manager</li>
                    <li>Discounted deposits & withdrawals </li>
                    <li>3.19% FX Fees</li>
                    <li>Free money transfers </li>
                    <li>
                      1.50% crypto buy/sell transactions for accounts in USD and
                      EUR
                    </li>
                    <li>
                      3.00% crypto buy/sell transactions for accounts in other
                      currencies
                    </li>
                  </ul>
                </div>
                <div className="price-box">
                  <p>Transfer to merchant</p>
                  <h4>150,000 USD</h4>
                  <span>Per Quarter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
