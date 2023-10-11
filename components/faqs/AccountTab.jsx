import Faq from "../common/Faq";

const accountData = [
  {
    id: "acc1",
    title: "What is Paylio?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc2",
    title: "How does this programme work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc3",
    title: "How are links tracked?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc4",
    title: "What does it cost to join?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc5",
    title: "Who is Performance Horizon?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc6",
    title: "How much money can I send?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc7",
    title: "Are there any limitations in bonus usage?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc8",
    title: "When do I receive bonus money?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc9",
    title: "How to use referral bonus?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
  {
    id: "acc10",
    title: "Can I send multiple payments?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.",
  },
];

const AccountTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="account"
      role="tabpanel"
      aria-labelledby="account-tab"
    >
      <h4>Account</h4>
      <div className="row wrapper">
        <div className="col-lg-6">
          <div className="accordion accordion-account" id="accordionAccount">
            {accountData.slice(0, 5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion accordion-account" id="accordionSecondAcc">
            {accountData.slice(5).map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
