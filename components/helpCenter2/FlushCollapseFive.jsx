import Image from "next/image";
import help_details_icon_5 from "/public/img/help-details-icon-5.png";

const FlushCollapseFive = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFive"
          aria-expanded="false"
          aria-controls="flush-collapseFive"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_5} alt="icon" />
          </span>
          <span className="head-area">
            RECEIVING MONEY
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingFive"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseFiveItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemOne"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemThree"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemFour"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemFive"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemSix"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFiveItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFiveItemEight"
                type="button"
                role="tab"
                aria-controls="collapseFiveItemEight"
                aria-selected="false"
                onClick={handleClick}
              >
                Account Closure (2)
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlushCollapseFive;
