import Link from "next/link";

const AdministrationTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="administration"
      role="tabpanel"
      aria-labelledby="administration-tab"
    >
      <div className="administration buy-sell">
        <h4>In accordance with the Skrill Account Terms of Use</h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Provision of inaccurate (s. 4.5)</th>
                <td>up to EUR 150</td>
              </tr>
              <tr>
                <th scope="row">Chargeback fee (s. 8.3)</th>
                <td>EUR 25 per chargeback</td>
              </tr>
              <tr>
                <th scope="row">Attempted cash upload fee (s. 8.12)</th>
                <td>EUR 10 per upload</td>
              </tr>
              <tr>
                <th scope="row">Prohibited Transactions fees (s. 11)</th>
                <td>up to EUR 150 per instance</td>
              </tr>
              <tr>
                <th scope="row">Reversal of a wrong transaction fee</th>
                <td>up to EUR 25 per reversal attempt</td>
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

export default AdministrationTab;
