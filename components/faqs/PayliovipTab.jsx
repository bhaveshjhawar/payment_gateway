import Faq from "../common/Faq";

const payliovipData = [
  {
    id: "payli1",
    title: "What is Paylio?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli2",
    title: "How does this programme work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli3",
    title: "How are links tracked?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli4",
    title: "What does it cost to join?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli5",
    title: "Who is Performance Horizon?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli6",
    title: "How much money can I send?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli7",
    title: "Are there any limitations in bonus usage?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli8",
    title: "When do I receive bonus money?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli9",
    title: "How to use referral bonus?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "payli10",
    title: "Can I send multiple payments?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const PayliovipTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="payliovip"
      role="tabpanel"
      aria-labelledby="payliovip-tab"
    >
      <h4>paylio vip</h4>
      <div className="row wrapper">
        <div className="col-lg-6">
          <div className="accordion accordion-vip" id="accordionvip">
            {payliovipData.slice(0, 5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion accordion-vip" id="accordionSecondVip">
            {payliovipData.slice(5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayliovipTab;
