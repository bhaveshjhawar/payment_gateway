import Faq from "../common/Faq";

const helpCenterFaqsData = [
  {
    id: 1,
    title: "Can I cancel a payment I sent?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 2,
    title: "What should I do if there is a problem with my Paylio purchase?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 3,
    title: "How do I reset my password if I forgot it?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 4,
    title: "How do I add money to my Paylio account?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 5,
    title: "How to request a refund?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 6,
    title: "How do I save, modify or delete my phone number?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 7,
    title: "How can I confirm my bank account?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 8,
    title: "How do I transfer money to my bank account?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: 9,
    title: "Why is my payment suspended or unavailable?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const Faqs = () => {
  return (
    <section className="faqs-section help-center">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row wrapper justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">Most popular questions</h2>
                <p>Global Transfers Support team is happy to help you</p>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {helpCenterFaqsData.map((itm) => (
                  <Faq key={itm.id} faq={itm} />
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
