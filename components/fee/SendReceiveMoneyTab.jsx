import Link from "next/link";

const SendReceiveMoneyTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="send-receive-money"
      role="tabpanel"
      aria-labelledby="send-receive-money-tab"
    >
      <div className="send-receive-money">
        <div className="single-item">
          <h4>Paylio Money Transfer</h4>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>International Transfer</h5>
              <p>
                Send money by debit card, Manual Bank transfer, Bank transfer
                via Sofort/Klarna
              </p>
            </div>
            <div className="text-area">
              <h6>Free</h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>International Transfer</h5>
              <p>Send money by credit card</p>
            </div>
            <div className="text-area">
              <h6>
                up to <br /> 2.99%
              </h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>send and receive currency only</h5>
              <p>Send money fee per transaction.</p>
            </div>
            <div className="text-area">
              <h6>
                up to <br /> 4.99%
              </h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>International transfer exchange rate mark-up</h5>
              <p>Exchange rate mark-up fee per transaction.</p>
            </div>
            <div className="text-area">
              <h6>
                up to <br /> 4.99%
              </h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>Domestic Transfer</h5>
              <p>Domestic fee per transaction.</p>
            </div>
            <div className="text-area">
              <h6>
                up to <br /> 2.00%
              </h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>Receive money</h5>
              <p>
                Paylio Money Transfer does not charge recipients any fee to
                receive
              </p>
            </div>
            <div className="text-area">
              <h6>
                up to <br /> 2.00%
              </h6>
            </div>
          </div>
        </div>
        <div className="single-item local-trans">
          <h4>Paylio to Paylio</h4>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>Send money</h5>
              <p>Sending money to other Paylio</p>
            </div>
            <div className="text-area">
              <h6>2.99%</h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="left-area">
              <h5>Receive money</h5>
              <p>Receiving money is always free of charge</p>
            </div>
            <div className="text-area">
              <h6>Free</h6>
            </div>
          </div>
        </div>
        <div className="create-account">
          <p>
            You will see the applicable fee before you complete your
            transaction.
          </p>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendReceiveMoneyTab;
