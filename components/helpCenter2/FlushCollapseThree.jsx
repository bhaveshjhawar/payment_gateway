import Image from "next/image";
import help_details_icon_3 from "/public/img/help-details-icon-3.png";

const FlushCollapseThree = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_3} alt="icon" />
          </span>
          <span className="head-area">
            transfers
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseThreeItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemOne"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemThree"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemFour"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemFive"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemSix"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseThreeItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseThreeItemEight"
                type="button"
                role="tab"
                aria-controls="collapseThreeItemEight"
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

export default FlushCollapseThree;
