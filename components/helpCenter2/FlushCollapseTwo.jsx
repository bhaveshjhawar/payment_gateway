import Image from "next/image";
import help_details_icon_2 from "/public/img/help-details-icon-2.png";

const FlushCollapseTwo = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_2} alt="icon" />
          </span>
          <span className="head-area">
            My account
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemOne"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemThree"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemFour"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemFive"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemSix"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseTwoItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseTwoItemEight"
                type="button"
                role="tab"
                aria-controls="collapseTwoItemEight"
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

export default FlushCollapseTwo;
