import Link from "next/link";

const PrepaidCardTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="prepaid-card"
      role="tabpanel"
      aria-labelledby="prepaid-card-tab"
    >
      <div className="prepaid-card currency-conversion">
        <div className="create-account">
          <h4>Prepaid card</h4>
          <p>
            Our fees are transparent, so you always know where you stand. Here
            are the fees we charge for using our Paylio Prepaid Mastercard:
          </p>
          <ul>
            <li>— 10 EUR card application</li>
            <li>— 10 EUR annual fee</li>
            <li>— 1.75 % ATM fee</li>
            <li>— POS transactions are free</li>
            <li>
              — Paylio virtual card application – first is free, any subsequent
              card is 2.5 EUR.
            </li>
          </ul>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrepaidCardTab;
