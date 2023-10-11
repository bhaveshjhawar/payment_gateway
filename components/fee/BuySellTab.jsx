import Link from "next/link";

const BuySellTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="buy-sell"
      role="tabpanel"
      aria-labelledby="buy-sell-tab"
    >
      <div className="buy-sell">
        <h4>Simple and transparent fees</h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Crypto Buy / Crypto Sell</th>
                <th scope="col">Fee:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Transactions up to EUR 19.99</th>
                <td>EUR 0.99 per transaction</td>
              </tr>
              <tr>
                <th scope="row">Transactions between EUR 20 – EUR 99.99</th>
                <td>EUR 1.99 per transaction</td>
              </tr>
              <tr>
                <th scope="row">Transactions above EUR 100</th>
                <td>1.50 % per transaction</td>
              </tr>
              <tr>
                <th scope="row">Crypto P2P</th>
                <td>Fee: 0.50 % per transaction</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="create-account">
          <p>
            Your use of the Paylio Cryptocurrency Service is subject to the{" "}
            <Link href="/terms-conditions">Cryptocurrency Terms of Use.</Link>
          </p>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuySellTab;
