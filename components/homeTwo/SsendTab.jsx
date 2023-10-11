import Image from "next/image";
import Link from "next/link";
import Select from "../common/Select";
import info_icon from "/public/img/info_icon.png";

const transparent3 = [
  { id: 1, name: "GBP" },
  { id: 2, name: "USD" },
];

const transparentTo3 = [
  { id: 1, name: "GBP" },
  { id: 2, name: "USD" },
];

const SsendTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="send"
      role="tabpanel"
      aria-labelledby="send-tab"
    >
      <div className="convert-area">
        <div className="wrapper">
          <form className="form text-center">
            <div className="top-area">
              <div className="single-input d-flex align-items-center">
                <div className="input-control">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="You Send"
                  />
                  <label className="input-label">You Send</label>
                </div>
                <div className="select-area">
                  {/* Select */}
                  <Select data={transparent3} />
                </div>
              </div>
              <div className="single-input d-flex align-items-center">
                <div className="input-control">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="Recipient Gets"
                  />
                  <label className="input-label">Recipient Gets</label>
                </div>
                <div className="select-area">
                  {/* Select */}
                  <Select data={transparentTo3} />
                </div>
              </div>
            </div>
            <div className="bottom-area">
              <ul>
                <li>
                  <span>
                    Exchange Rate
                    <span className="tooltip-area">
                      <Image src={info_icon} alt="Icon" />
                      <span className="item-show">
                        The send rate represents the rate of exchange you will
                        receive when sending your money with Xe.
                      </span>
                    </span>
                  </span>{" "}
                  <span>1.37310</span>
                </li>
                <li>
                  <span>Fees</span> <span>2.00 GBP</span>
                </li>
                <li>
                  <span>You pay</span> <span>402.00 GBP</span>
                </li>
                <li>
                  <span>Recipient receives (Expected by July 6)</span>
                  <span>549.24</span>
                </li>
              </ul>
            </div>
            <Link href="/register-2" className="cmn-btn">
              Get started
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SsendTab;
