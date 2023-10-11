import Image from "next/image";
import what_in_it_icon_1 from "/public/img/what-in-it-icon-1.png";
import what_in_it_icon_2 from "/public/img/what-in-it-icon-2.png";
import what_in_it_icon_3 from "/public/img/what-in-it-icon-3.png";

const Whatinit = () => {
  return (
    <section className="whatinit-section">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h3 className="title">WHAT’S IN IT FOR YOU?</h3>
                <p>You’ve done the work, now get the payment!</p>
              </div>
            </div>
          </div>
          <div className="bottom-content pb-120">
            <div className="row cus-mar">
              <div className="col-lg-4">
                <div className="single-item text-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={what_in_it_icon_1} alt="icon" />
                    </div>
                  </div>
                  <div className="bottom-area text-center">
                    <h5>You can ask anyone.</h5>
                    <p>
                      All it takes is a few clicks and your payment request is
                      on its way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-item text-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={what_in_it_icon_2} alt="icon" />
                    </div>
                  </div>
                  <div className="bottom-area text-center">
                    <h5>YOUR CLIENTS WILL LOVE IT</h5>
                    <p>
                      We can securely process their payment method of choice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-item text-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={what_in_it_icon_3} alt="icon" />
                    </div>
                  </div>
                  <div className="bottom-area text-center">
                    <h5>YOUR CLIENTS WILL LOVE IT</h5>
                    <p>
                      We can securely process their payment method of choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatinit;
