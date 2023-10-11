import Image from "next/image";
import Select from "../common/Select";
import uk_flag from "/public/img/uk-flag.png";
import usa_flag from "/public/img/usa-flag.png";

const corrency2 = [
  { id: 1, name: "USA(USD)" },
  { id: 2, name: "USA(USD)" },
  { id: 3, name: "USA(USD)" },
];

const corrency3 = [
  { id: 1, name: "U.K(GBP)" },
  { id: 2, name: "U.K(GBP)" },
  { id: 3, name: "U.K(GBP)" },
];

const RateAlertsModal = () => {
  return (
    <div
      className="modal fade"
      id="alertsmodal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="rate-details">
              <div className="rate-box one">
                <h5 className="text">Choose Currency</h5>
                <div className="country usa">
                  <Image src={usa_flag} alt="Icon" />
                  <div className="language-select">
                    {/* Select */}
                    <Select data={corrency2} />
                  </div>
                </div>
                <div className="country uk">
                  <Image src={uk_flag} alt="Icon" />
                  <div className="language-select">
                    {/* Select */}
                    <Select data={corrency3} />
                  </div>
                </div>
                <p className="text value">1 USD = 0.7168 GBP</p>
              </div>
              <div className="rate-box two">
                <form action="#" className="d-flex align-items-baseline">
                  <input id="update" type="checkbox" />
                  <label htmlFor="update">
                    {" "}
                    Send me weekday updates on the USD - GBP exchange rate
                  </label>
                </form>
              </div>
              <div className="rate-box three">
                <form action="#">
                  <div className="form-box">
                    <div className="form-group one d-flex align-items-baseline">
                      <input id="alert" type="checkbox" />
                      <label htmlFor="alert">
                        Alert me if the rate goes above
                      </label>
                    </div>
                    <div className="form-group two">
                      <input
                        className="textnum"
                        type="text"
                        placeholder="0.91"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="rate-box four">
                <h5>Alert expiry date?</h5>
                <div className="box">
                  <form action="#">
                    <div className="form-box">
                      <div className="form-group d-flex align-items-baseline">
                        <input name="expiry" id="expiry" type="checkbox" />
                        <label htmlFor="expiry"> No expiry date</label>
                      </div>
                      <div className="form-group">
                        <input className="textnum date" type="date" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="subscribe-box">
                <h5 className="yourmail">Your email address</h5>
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                </form>
                <form action="#">
                  <button className="cmn-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateAlertsModal;
