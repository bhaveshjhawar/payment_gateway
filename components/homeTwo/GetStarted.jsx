import Image from "next/image";
import AlertsTab from "./AlertsTab";
import ChartsTab from "./ChartsTab";
import ConvertTab from "./ConvertTab";
import RateAlertsModal from "./RateAlertsModal";
import SsendTab from "./SsendTab";
import ex_tab_icon_1 from "/public/img/ex-tab-icon-1.png";
import ex_tab_icon_2 from "/public/img/ex-tab-icon-2.png";
import ex_tab_icon_3 from "/public/img/ex-tab-icon-3.png";

const GetStarted = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Rate Alerts Modal */}
          <RateAlertsModal />
          <div className="exchange-tab">
            <ul
              className="nav nav-tabs d-flex justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="convert-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#convert"
                  type="button"
                  role="tab"
                  aria-controls="convert"
                  aria-selected="true"
                >
                  <span>
                    <Image src={ex_tab_icon_1} alt="Icon" />
                  </span>
                  convert
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="send-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#send"
                  type="button"
                  role="tab"
                  aria-controls="send"
                  aria-selected="false"
                >
                  <span>
                    <Image src={ex_tab_icon_2} alt="Icon" />
                  </span>
                  send
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="charts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#charts"
                  type="button"
                  role="tab"
                  aria-controls="charts"
                  aria-selected="false"
                >
                  <span>
                    <Image src={ex_tab_icon_3} alt="Icon" />
                  </span>
                  charts
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="alerts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#alerts"
                  type="button"
                  role="tab"
                  aria-controls="alerts"
                  aria-selected="false"
                >
                  <span>
                    <Image src={ex_tab_icon_1} alt="Icon" />
                  </span>
                  alerts
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* convert tab */}
              <ConvertTab />

              {/* send Tab */}
              <SsendTab />

              {/* charts tab */}
              <ChartsTab />

              {/* alerts tab */}
              <AlertsTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
