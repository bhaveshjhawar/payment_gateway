import Image from "next/image";
import how_works_icon_1 from "/public//img/how-works-icon-1.png";
import how_works_icon_2 from "/public//img/how-works-icon-2.png";
import how_works_icon_3 from "/public//img/how-works-icon-3.png";

const HowItsWork = () => {
  return (
    <section className="how-works inner-how-works index6 works">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">How it works</h2>
                <p>
                  It&#39;s easier than you think. Follow 3 simple easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-4 col-md-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_1} alt="icon" />
                    <span className="xlr">01</span>
                  </div>
                </div>
                <div className="bottom-icon">
                  <h5>Create an acccount</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-item second d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_2} alt="icon" />
                    <span className="xlr second">02</span>
                  </div>
                </div>
                <div className="bottom-icon">
                  <h5>Enter details</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_3} alt="icon" />
                    <span className="xlr third">03</span>
                  </div>
                </div>
                <div className="bottom-icon">
                  <h5>Confirm and send</h5>
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
