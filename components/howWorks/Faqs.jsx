import Faq from "../common/Faq";

const howItWorksFaqData = [
  {
    id: "hiw1",
    title: "What is Paylio?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw2",
    title: "How does this programme work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw3",
    title: "How are links tracked?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw4",
    title: "What does it cost to join?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw5",
    title: "Who is Performance Horizon?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw6",
    title: "How much money can I send?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw7",
    title: "Are there any limitations in bonus usage?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw8",
    title: "When do I receive bonus money?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw9",
    title: "How to use referral bonus?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "hiw10",
    title: "Can I send multiple payments?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const Faqs = () => {
  return (
    <section className="faqs-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-header text-center">
                <h2 className="title">Frequently asked questions</h2>
                <p>We have a list of frequently asked questions about us</p>
              </div>
            </div>
          </div>
          <div className="row wrapper">
            <div className="col-lg-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {howItWorksFaqData.slice(0, 5).map((faq) => (
                  <Faq key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="accordionSecond">
                {howItWorksFaqData.slice(5).map((faq) => (
                  <Faq key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
