import Select from "../common/Select";

const transparent = [
  { id: 1, name: "GBP" },
  { id: 2, name: "USD" },
];

const transparentTo = [
  { id: 1, name: "GBP" },
  { id: 2, name: "USD" },
];

const ChartsTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="charts"
      role="tabpanel"
      aria-labelledby="charts-tab"
    >
      <div className="convert-area chartarea">
        <div className="wrapper">
          <form className="form text-center">
            <div className="top-area">
              <div className="single-input d-flex align-items-center">
                <div className="input-control">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="From"
                  />
                  <label className="input-label">From</label>
                </div>
                <div className="select-area">
                  {/* Select */}
                  <Select data={transparent} />
                </div>
              </div>
              <div className="single-input d-flex align-items-center">
                <div className="input-control">
                  <input
                    type="number"
                    className="input-field"
                    placeholder="To"
                  />
                  <label className="input-label">To</label>
                </div>
                <div className="select-area">
                  {/* Select */}
                  <Select data={transparentTo} />
                </div>
              </div>
            </div>
            <div className="bottom-area">
              <div className="top-area d-flex justify-content-between">
                <div className="top-left text-start">
                  <h6>GBP to USD Chart</h6>
                  <p className="smr">British Pound to US Dollar</p>
                </div>
                <div className="top-right">
                  <p className="smr">
                    1 GBP = 1.37684 USD <span>Jul 26, 2021, 08:59 UTC</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="chartjs" id="chart"></div>
      </div>
    </div>
  );
};

export default ChartsTab;
