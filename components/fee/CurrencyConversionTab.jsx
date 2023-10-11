import Link from "next/link";

const CurrencyConversionTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="currency-conversion"
      role="tabpanel"
      aria-labelledby="currency-conversion-tab"
    >
      <div className="currency-conversion">
        <div className="create-account">
          <h4>Currency conversion </h4>
          <p>
            For transactions involving currency conversion Paylio adds a fee of
            3.99% to our wholesale exchange rates. The exchange rates vary and
            will be applied immediately without notice to you.
          </p>
          <p>
            If your Paylio Account is denominated in a currency other than Euro,
            your Cryptocurrency Transactions will be subject to currency
            conversions. In this case, we will apply foreign exchange fee of
            1.5%.
          </p>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConversionTab;
