import Image from "next/image";
import help_details_icon_7 from "/public/img/help-details-icon-7.png";

const FlushCollapseSeven = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingSeven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseSeven"
          aria-expanded="false"
          aria-controls="flush-collapseSeven"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_7} alt="icon" />
          </span>
          <span className="head-area">
            SECURITY
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseSeven"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingSeven"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseSevenItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemOne"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemThree"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemFour"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemFive"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemSix"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseSevenItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseSevenItemEight"
                type="button"
                role="tab"
                aria-controls="collapseSevenItemEight"
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

export default FlushCollapseSeven;
