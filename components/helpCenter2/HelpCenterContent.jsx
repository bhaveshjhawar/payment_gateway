import { useEffect, useRef, useState } from "react";
import CollapseOneItemEightTab from "./CollapseOneItemEightTab";
import CollapseOneItemFiveTab from "./CollapseOneItemFiveTab";
import CollapseOneItemFourTab from "./CollapseOneItemFourTab";
import CollapseOneItemOneTab from "./CollapseOneItemOneTab";
import CollapseOneItemSevenTab from "./CollapseOneItemSevenTab";
import CollapseOneItemSixTab from "./CollapseOneItemSixTab";
import CollapseOneItemThreeTab from "./CollapseOneItemThreeTab";
import CollapseOneItemTwoTab from "./CollapseOneItemTwoTab";
import FlushCollapseEight from "./FlushCollapseEight";
import FlushCollapseFive from "./FlushCollapseFive";
import FlushCollapseFour from "./FlushCollapseFour";
import FlushCollapseNine from "./FlushCollapseNine";
import FlushCollapseOne from "./FlushCollapseOne";
import FlushCollapseSeven from "./FlushCollapseSeven";
import FlushCollapseSix from "./FlushCollapseSix";
import FlushCollapseThree from "./FlushCollapseThree";
import FlushCollapseTwo from "./FlushCollapseTwo";

const HelpCenterContent = () => {
  const tabContent = useRef();
  const [contentArr, setContentArr] = useState([]);

  const handleClick = (e) => {
    // find element with active class
    const findElementByActivCalss = contentArr.find((ele) =>
      ele.classList.contains("active")
    );

    // find element with tab id
    const findElement = contentArr.find(
      (ele) => ele.attributes["aria-labelledby"]?.value === e.target.id
    );

    // remove previous active calss
    if (findElementByActivCalss) {
      findElementByActivCalss.classList.remove("active");
    }

    // add to new item
    findElement.classList.add("active");
  };

  useEffect(() => {
    const content = tabContent.current?.children;
    const getContentArr = Array.from(content);

    setContentArr(getContentArr);
  }, []);

  return (
    <section className="faqs-section help-center-content">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row wrapper justify-content-center">
            <div className="col-lg-4 col-md-5">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <FlushCollapseOne handleClick={handleClick} />
                <FlushCollapseTwo handleClick={handleClick} />
                <FlushCollapseThree handleClick={handleClick} />
                <FlushCollapseFour handleClick={handleClick} />
                <FlushCollapseFive handleClick={handleClick} />
                <FlushCollapseSix handleClick={handleClick} />
                <FlushCollapseSeven handleClick={handleClick} />
                <FlushCollapseEight handleClick={handleClick} />
                <FlushCollapseNine handleClick={handleClick} />
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="tab-content" ref={tabContent}>
                <CollapseOneItemOneTab
                  id="collapseOneItemOne"
                  active="active"
                />
                <CollapseOneItemTwoTab id="collapseOneItemTwo" />
                <CollapseOneItemThreeTab id="collapseOneItemThree" />
                <CollapseOneItemFourTab id="collapseOneItemFour" />
                <CollapseOneItemFiveTab id="collapseOneItemFive" />
                <CollapseOneItemSixTab id="collapseOneItemSix" />
                <CollapseOneItemSevenTab id="collapseOneItemSeven" />
                <CollapseOneItemEightTab id="collapseOneItemEight" />

                <CollapseOneItemOneTab id="collapseTwoItemOne" />
                <CollapseOneItemTwoTab id="collapseTwoItemTwo" />
                <CollapseOneItemThreeTab id="collapseTwoItemThree" />
                <CollapseOneItemFourTab id="collapseTwoItemFour" />
                <CollapseOneItemFiveTab id="collapseTwoItemFive" />
                <CollapseOneItemSixTab id="collapseTwoItemSix" />
                <CollapseOneItemSevenTab id="collapseTwoItemSeven" />
                <CollapseOneItemEightTab id="collapseTwoItemEight" />

                <CollapseOneItemOneTab id="collapseThreeItemOne" />
                <CollapseOneItemTwoTab id="collapseThreeItemTwo" />
                <CollapseOneItemThreeTab id="collapseThreeItemThree" />
                <CollapseOneItemFourTab id="collapseThreeItemFour" />
                <CollapseOneItemFiveTab id="collapseThreeItemFive" />
                <CollapseOneItemSixTab id="collapseThreeItemSix" />
                <CollapseOneItemSevenTab id="collapseThreeItemSeven" />
                <CollapseOneItemEightTab id="collapseThreeItemEight" />

                <CollapseOneItemOneTab id="collapseFourItemOne" />
                <CollapseOneItemTwoTab id="collapseFourItemTwo" />
                <CollapseOneItemThreeTab id="collapseFourItemThree" />
                <CollapseOneItemFourTab id="collapseFourItemFour" />
                <CollapseOneItemFiveTab id="collapseFourItemFive" />
                <CollapseOneItemSixTab id="collapseFourItemSix" />
                <CollapseOneItemSevenTab id="collapseFourItemSeven" />
                <CollapseOneItemEightTab id="collapseFourItemEight" />

                <CollapseOneItemOneTab id="collapseFiveItemOne" />
                <CollapseOneItemTwoTab id="collapseFiveItemTwo" />
                <CollapseOneItemThreeTab id="collapseFiveItemThree" />
                <CollapseOneItemFourTab id="collapseFiveItemFour" />
                <CollapseOneItemFiveTab id="collapseFiveItemFive" />
                <CollapseOneItemSixTab id="collapseFiveItemSix" />
                <CollapseOneItemSevenTab id="collapseFiveItemSeven" />
                <CollapseOneItemEightTab id="collapseFiveItemEight" />

                <CollapseOneItemOneTab id="collapseSixItemOne" />
                <CollapseOneItemTwoTab id="collapseSixItemTwo" />
                <CollapseOneItemThreeTab id="collapseSixItemThree" />
                <CollapseOneItemFourTab id="collapseSixItemFour" />
                <CollapseOneItemFiveTab id="collapseSixItemFive" />
                <CollapseOneItemSixTab id="collapseSixItemSix" />
                <CollapseOneItemSevenTab id="collapseSixItemSeven" />
                <CollapseOneItemEightTab id="collapseSixItemEight" />

                <CollapseOneItemOneTab id="collapseSevenItemOne" />
                <CollapseOneItemTwoTab id="collapseSevenItemTwo" />
                <CollapseOneItemThreeTab id="collapseSevenItemThree" />
                <CollapseOneItemFourTab id="collapseSevenItemFour" />
                <CollapseOneItemFiveTab id="collapseSevenItemFive" />
                <CollapseOneItemSixTab id="collapseSevenItemSix" />
                <CollapseOneItemSevenTab id="collapseSevenItemSeven" />
                <CollapseOneItemEightTab id="collapseSevenItemEight" />

                <CollapseOneItemOneTab id="collapseEightItemOne" />
                <CollapseOneItemTwoTab id="collapseEightItemTwo" />
                <CollapseOneItemThreeTab id="collapseEightItemThree" />
                <CollapseOneItemFourTab id="collapseEightItemFour" />
                <CollapseOneItemFiveTab id="collapseEightItemFive" />
                <CollapseOneItemSixTab id="collapseEightItemSix" />
                <CollapseOneItemSevenTab id="collapseEightItemSeven" />
                <CollapseOneItemEightTab id="collapseEightItemEight" />

                <CollapseOneItemOneTab id="collapseNineItemOne" />
                <CollapseOneItemTwoTab id="collapseNineItemTwo" />
                <CollapseOneItemThreeTab id="collapseNineItemThree" />
                <CollapseOneItemFourTab id="collapseNineItemFour" />
                <CollapseOneItemFiveTab id="collapseNineItemFive" />
                <CollapseOneItemSixTab id="collapseNineItemSix" />
                <CollapseOneItemSevenTab id="collapseNineItemSeven" />
                <CollapseOneItemEightTab id="collapseNineItemEight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterContent;
