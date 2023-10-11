import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="title">Rates with no Hidden Fee</h2>
                <p>Rate for companies with turnover more $ 30,000 per month</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="payment-methods">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="mdr">Payment methods</span>
                        </th>
                        <th className="text-center" scope="col">
                          <span className="mdr">Rate</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Banking cards</th>
                        <td>from 2.0%</td>
                      </tr>
                      <tr>
                        <th scope="row">E-wallets and e-money</th>
                        <td>from 2.1%</td>
                      </tr>
                      <tr>
                        <th scope="row">Cash in payments</th>
                        <td>from 1.2%</td>
                      </tr>
                      <tr>
                        <th scope="row">Direct debit payments</th>
                        <td>from 2.0%</td>
                      </tr>
                      <tr>
                        <th scope="row">Mass payouts</th>
                        <td>from 1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link href="/register" className="cmn-btn">
                  Determine your rate
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="personal-approach text-center">
                <h5>Personal Approach</h5>
                <p>
                  No matter whether a large online business or a start-up
                  entrepreneur we chose the most favorable rate and ensure high
                  quality service for all clients.
                </p>
                <Link href="/fees" className="cmn-btn">
                  {" "}
                  More about pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
