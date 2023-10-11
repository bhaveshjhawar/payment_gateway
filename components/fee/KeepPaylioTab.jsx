import Link from "next/link";

const KeepPaylioTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="keep-paylio"
      role="tabpanel"
      aria-labelledby="keep-paylio-tab"
    >
      <div className="keep-paylio currency-conversion">
        <div className="create-account">
          <h4>Keep Paylio</h4>
          <p>
            Your Paylio account is free for personal use as long as you log in
            or make a transaction at least every 6 months.
          </p>
          <p>
            Otherwise a service fee of EUR 5.00 (or equivalent) will be deducted
            monthly from your account.
          </p>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeepPaylioTab;
