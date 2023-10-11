import Image from "next/image";
import feature_cross_currency from "/public/img/feature-cross-currency.png";

const AlertsTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="alerts"
      role="tabpanel"
      aria-labelledby="alerts-tab"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="alerts-area">
            <h5>Let us watch the market for you</h5>
            <p>
              Currency markets are always moving. Set an alert so you never miss
              your desired rate.
            </p>
            <button
              type="button"
              className="cmn-btn"
              data-bs-toggle="modal"
              data-bs-target="#alertsmodal"
            >
              Get Rate Alerts
            </button>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="img-alerts pt-120">
            <Image src={feature_cross_currency} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsTab;
