import Faq from "../common/Faq";

const affiliatesData = [
  {
    id: "aff1",
    title: "What is Paylio?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff2",
    title: "How does this programme work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff3",
    title: "How are links tracked?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff4",
    title: "What does it cost to join?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff5",
    title: "Who is Performance Horizon?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff6",
    title: "How much money can I send?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff7",
    title: "Are there any limitations in bonus usage?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff8",
    title: "When do I receive bonus money?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff9",
    title: "How to use referral bonus?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "aff10",
    title: "Can I send multiple payments?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const AffiliatesTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="affiliates"
      role="tabpanel"
      aria-labelledby="affiliates-tab"
    >
      <h4>Affiliates</h4>
      <div className="row wrapper">
        <div className="col-lg-6">
          <div
            className="accordion accordion-Affiliates"
            id="accordionAffiliates"
          >
            {affiliatesData.slice(0, 5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="accordion accordion-Affiliates"
            id="accordionSecondAff"
          >
            {affiliatesData.slice(5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatesTab;
