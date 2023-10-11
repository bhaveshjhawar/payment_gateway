import AccountTab from "./AccountTab";
import AffiliatesTab from "./AffiliatesTab";
import PayliovipTab from "./PayliovipTab";
import SecurityTab from "./SecurityTab";

const FaqsBody = () => {
  return (
    <section className="faqs-section main">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-header text-center">
                <h2 className="title">Frequently asked questions</h2>
                <p>We have a list of frequently asked questions about us</p>
              </div>
            </div>
          </div>
          <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="account-tab"
                data-bs-toggle="tab"
                data-bs-target="#account"
                type="button"
                role="tab"
                aria-controls="account"
                aria-selected="true"
              >
                account
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="affiliates-tab"
                data-bs-toggle="tab"
                data-bs-target="#affiliates"
                type="button"
                role="tab"
                aria-controls="affiliates"
                aria-selected="false"
              >
                affiliates
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="payliovip-tab"
                data-bs-toggle="tab"
                data-bs-target="#payliovip"
                type="button"
                role="tab"
                aria-controls="payliovip"
                aria-selected="false"
              >
                paylio vip
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="security-tab"
                data-bs-toggle="tab"
                data-bs-target="#security"
                type="button"
                role="tab"
                aria-controls="security"
                aria-selected="false"
              >
                security
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {/* Account Tab */}
            <AccountTab />

            {/* Affiliates Tab */}
            <AffiliatesTab />

            {/* Payliovip Tab */}
            <PayliovipTab />

            {/* Security Tab */}
            <SecurityTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsBody;
