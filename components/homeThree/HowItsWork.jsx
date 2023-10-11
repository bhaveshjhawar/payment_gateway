import Image from "next/image";
import how_works_icon_4 from "/public/img/how-works-icon-4.png";
import how_works_icon_5 from "/public/img/how-works-icon-5.png";
import how_works_icon_6 from "/public/img/how-works-icon-6.png";

const HowItsWork = () => {
  return (
    <section className="how-works inner-how-works index-3">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">Send the bill to your client</h2>
                <p>
                  Whether it’s for a job you did, an item you sold or a service
                  you provided, by requesting a payment with Paylio you can get
                  paid faster and more safely in just a few easy clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_4} alt="icon" />
                    <span className="xlr">01</span>
                  </div>
                </div>
                <div className="bottom-icon text-center">
                  <h5>Step 1</h5>
                  <p>
                    Register for a Paylio account or sign in to your existing
                    account.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_5} alt="icon" />
                    <span className="xlr second">02</span>
                  </div>
                </div>
                <div className="bottom-icon text-center">
                  <h5>Step 2</h5>
                  <p>Request a Payment and enter the amount and due date.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_6} alt="icon" />
                    <span className="xlr third">03</span>
                  </div>
                </div>
                <div className="bottom-icon text-center">
                  <h5>Step 3</h5>
                  <p>
                    Your client gets notified and can pay you directly into your
                    Paylio account. Simple!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;
