import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action-inner third index9">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-11 d-flex align-items-center justify-content-center">
              <div className="section-header text-center">
                <h3>The best VIP program in the business. </h3>
                <p>
                  Change your world with an upgrade to our exclusive VIP
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area text-center">
                <p className="xxlr">Paylio VIP</p>
                <Link href="/register" className="cmn-btn">
                  Join for free
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
