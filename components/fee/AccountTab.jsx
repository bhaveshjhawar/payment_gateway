import Link from "next/link";

const AccountTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="account"
      role="tabpanel"
      aria-labelledby="account-tab"
    >
      <div className="account-area">
        <div className="single-item">
          <h5>Understanding the account level fees:</h5>
          <div className="single d-flex justify-content-between align-items-center">
            <h6 className="left-head">Paylio Money Transfer fee</h6>

            <div className="right-item d-flex align-items-center justify-content-center justify-content-md-end">
              <div className="right-single">
                <span className="smr">Paylio Standard</span>
                <div className="text-area">
                  <h6>2.99%</h6>
                </div>
              </div>
              <div className="right-single">
                <span className="smr">Paylio Standard</span>
                <div className="text-area">
                  <h6>Free</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="create-account">
          <p>
            For more information on how to become a True Paylio and receive FREE
            benefits for the rest of your Paylio life,{" "}
            <Link href="#">click here.</Link>
          </p>
          <Link href="/register" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
