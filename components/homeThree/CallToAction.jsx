import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action-inner third">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9 d-flex align-items-center justify-content-center">
              <div className="section-header text-center">
                <h3>No hidden costs, no surprises.</h3>
                <p>
                  When you receive payments with Paylio there are no hidden
                  costs or processing fees. Currency conversion fees may apply.
                  In addition, your card issuer may charge you separately.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area text-center">
                <p className="xxlr">No need to wait.</p>
                <Link href="/register" className="cmn-btn">
                  Request a Payment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
