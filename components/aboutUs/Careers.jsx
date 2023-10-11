import Link from "next/link";

const Careers = () => {
  return (
    <section className="call-action-inner careers">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="section-header text-center">
                <h2>CAREERS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area text-center">
                <h4>Want to be part of the Paylio team?</h4>
                <Link href="/careers" className="cmn-btn">
                  Check open positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
