import Image from "next/image";
import help_details_icon_4 from "/public/img/help-details-icon-4.png";

const FlushCollapseFour = ({ handleClick }) => {
  return (
    <div className="accordion-item">
      <h6 className="accordion-header" id="flush-headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="false"
          aria-controls="flush-collapseFour"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={help_details_icon_4} alt="icon" />
          </span>
          <span className="head-area">
            SEND MONEY
            <span className="smr">Browse articles (08)</span>
          </span>
        </button>
      </h6>
      <div
        id="flush-collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingFour"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="collapseFourItemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemOne"
                type="button"
                role="tab"
                aria-controls="collapseFourItemOne"
                aria-selected="true"
                onClick={handleClick}
              >
                Verifications (20)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemTwo"
                type="button"
                role="tab"
                aria-controls="collapseFourItemTwo"
                aria-selected="false"
                onClick={handleClick}
              >
                Password (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemThree"
                type="button"
                role="tab"
                aria-controls="collapseFourItemThree"
                aria-selected="false"
                onClick={handleClick}
              >
                Updates (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemFour-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemFour"
                type="button"
                role="tab"
                aria-controls="collapseFourItemFour"
                aria-selected="false"
                onClick={handleClick}
              >
                Limits (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemFive-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemFive"
                type="button"
                role="tab"
                aria-controls="collapseFourItemFive"
                aria-selected="false"
                onClick={handleClick}
              >
                Rewards (5)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemSix-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemSix"
                type="button"
                role="tab"
                aria-controls="collapseFourItemSix"
                aria-selected="false"
                onClick={handleClick}
              >
                Balance (1)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemSeven-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemSeven"
                type="button"
                role="tab"
                aria-controls="collapseFourItemSeven"
                aria-selected="false"
                onClick={handleClick}
              >
                Technical Problems (2)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="collapseFourItemEight-tab"
                data-bs-toggle="tab"
                data-bs-target="#collapseFourItemEight"
                type="button"
                role="tab"
                aria-controls="collapseFourItemEight"
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

export default FlushCollapseFour;
