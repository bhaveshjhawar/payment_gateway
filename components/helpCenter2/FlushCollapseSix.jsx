import Image from "next/image";
import help_details_icon_6 from "/public/img/help-details-icon-6.png";

const FlushCollapseSix = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingSix">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseSix"
          aria-expanded="false"
          aria-controls="flush-collapseSix"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_6} alt="icon" />
          </span>
          <span className="head-area">
            Transaction
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingSix"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseSixItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemOne"
                type="button"
                role="tab"
                aria-controls="collapseSixItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseSixItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemThree"
                type="button"
                role="tab"
                aria-controls="collapseSixItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemFour"
                type="button"
                role="tab"
                aria-controls="collapseSixItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemFive"
                type="button"
                role="tab"
                aria-controls="collapseSixItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemSix"
                type="button"
                role="tab"
                aria-controls="collapseSixItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseSixItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSixItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSixItemEight"
                type="button"
                role="tab"
                aria-controls="collapseSixItemEight"
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

export default FlushCollapseSix;
