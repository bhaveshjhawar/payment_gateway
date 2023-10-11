import Image from "next/image";
import help_details_icon_8 from "/public/img/help-details-icon-8.png";

const FlushCollapseEight = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingEight">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseEight"
          aria-expanded="false"
          aria-controls="flush-collapseEight"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_8} alt="icon" />
          </span>
          <span className="head-area">
            Business
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseEight"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingEight"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseEightItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemOne"
                type="button"
                role="tab"
                aria-controls="collapseEightItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseEightItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemThree"
                type="button"
                role="tab"
                aria-controls="collapseEightItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemFour"
                type="button"
                role="tab"
                aria-controls="collapseEightItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemFive"
                type="button"
                role="tab"
                aria-controls="collapseEightItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemSix"
                type="button"
                role="tab"
                aria-controls="collapseEightItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseEightItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseEightItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseEightItemEight"
                type="button"
                role="tab"
                aria-controls="collapseEightItemEight"
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

export default FlushCollapseEight;
