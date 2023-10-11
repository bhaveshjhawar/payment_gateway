import Image from "next/image";
import help_details_icon_9 from "/public/img/help-details-icon-9.png";

const FlushCollapseNine = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingNine">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseNine"
          aria-expanded="false"
          aria-controls="flush-collapseNine"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_9} alt="icon" />
          </span>
          <span className="head-area">
            Countries
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseNine"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingNine"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseNineItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemOne"
                type="button"
                role="tab"
                aria-controls="collapseNineItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseNineItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemThree"
                type="button"
                role="tab"
                aria-controls="collapseNineItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemFour"
                type="button"
                role="tab"
                aria-controls="collapseNineItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemFive"
                type="button"
                role="tab"
                aria-controls="collapseNineItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemSix"
                type="button"
                role="tab"
                aria-controls="collapseNineItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseNineItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseNineItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseNineItemEight"
                type="button"
                role="tab"
                aria-controls="collapseNineItemEight"
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

export default FlushCollapseNine;
