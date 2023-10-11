import Faq from "../common/Faq";

const securityData = [
  {
    id: "security1",
    title: "What is securityo?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security2",
    title: "How does this programme work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security3",
    title: "How are links tracked?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security4",
    title: "What does it cost to join?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security5",
    title: "Who is Performance Horizon?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security6",
    title: "How much money can I send?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security7",
    title: "Are there any limitations in bonus usage?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security8",
    title: "When do I receive bonus money?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security9",
    title: "How to use referral bonus?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "security10",
    title: "Can I send multiple payments?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const SecurityTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="security"
      role="tabpanel"
      aria-labelledby="security-tab"
    >
      <h4>Security</h4>
      <div className="row wrapper">
        <div className="col-lg-6">
          <div className="accordion accordion-secu" id="accordionsecu">
            {securityData.slice(0, 5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion accordion-secu" id="accordionSecondSecu">
            {securityData.slice(5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;
