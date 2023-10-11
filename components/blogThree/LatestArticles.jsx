import AllTab from "./AllTab";
import CryptoTab from "./CryptoTab";
import FinanceTab from "./FinanceTab";
import ResourcesTab from "./ResourcesTab";
import SidebarArea from "./SidebarArea";

const LatestArticles = () => {
  return (
    <section className="latest-articles blog blog-2 blog-3">
      <div className="overlay pb-120">
        <div className="container">
          <div className="section-header">
            <div className="row justify-content-between">
              <div className="col-lg-8">
                <h2 className="title">Latest Articles</h2>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all"
                      type="button"
                      role="tab"
                      aria-controls="all"
                      aria-selected="true"
                    >
                      all
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="resources-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#resources"
                      type="button"
                      role="tab"
                      aria-controls="resources"
                      aria-selected="false"
                    >
                      resources
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="finance-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#finance"
                      type="button"
                      role="tab"
                      aria-controls="finance"
                      aria-selected="false"
                    >
                      finance
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="crypto-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#crypto"
                      type="button"
                      role="tab"
                      aria-controls="crypto"
                      aria-selected="false"
                    >
                      crypto
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* All Tab */}
                  <AllTab />

                  {/* Resources Tab */}
                  <ResourcesTab />

                  {/* Finance Tab */}
                  <FinanceTab />

                  {/* Crypto Tab */}
                  <CryptoTab />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Sidebar Area */}
                <SidebarArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
