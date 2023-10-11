import Image from "next/image";
import help_details_icon_1 from "/public/img/help-details-icon-1.png";

const FlushCollapseOne = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_1} className="one" alt="icon" />
          </span>
          <span className="head-area">
            Guide to Paylio
            <span className="smr">Browse articles (07)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseOneItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemOne"
                type="button"
                role="tab"
                aria-controls="collapseOneItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseOneItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemThree"
                type="button"
                role="tab"
                aria-controls="collapseOneItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemFour"
                type="button"
                role="tab"
                aria-controls="collapseOneItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemFive"
                type="button"
                role="tab"
                aria-controls="collapseOneItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemSix"
                type="button"
                role="tab"
                aria-controls="collapseOneItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseOneItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseOneItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseOneItemEight"
                type="button"
                role="tab"
                aria-controls="collapseOneItemEight"
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

export default FlushCollapseOne;
