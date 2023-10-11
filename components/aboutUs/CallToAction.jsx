import Image from "next/image";
import our_values_icon_1 from "/public/img/our-values-icon-1.png";
import our_values_icon_2 from "/public/img/our-values-icon-2.png";
import our_values_icon_3 from "/public/img/our-values-icon-3.png";
import our_values_icon_4 from "/public/img/our-values-icon-4.png";

const CallToAction = () => {
  return (
    <section className="call-action-inner about-us">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="section-header text-center">
                <h2>Our Values</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area">
                <div className="row cus-mar justify-content-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="single-item text-center">
                      <div className="icon">
                        <Image src={our_values_icon_1} alt="icon" />
                      </div>
                      <h6>100% Execution</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-item text-center">
                      <div className="icon">
                        <Image src={our_values_icon_2} alt="icon" />
                      </div>
                      <h6>Team work</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-item text-center">
                      <div className="icon">
                        <Image src={our_values_icon_3} alt="icon" />
                      </div>
                      <h6>Growth</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="single-item text-center">
                      <div className="icon">
                        <Image src={our_values_icon_4} alt="icon" />
                      </div>
                      <h6>Transparency</h6>
                    </div>
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

export default CallToAction;
