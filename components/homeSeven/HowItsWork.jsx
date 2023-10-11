import Image from "next/image";
import how_works_icon_2 from "/public/img/how-works-icon-2.png";

const HowItsWork = () => {
  return (
    <section className="how-works inner-how-works index7">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h2 className="title">
                  It&#39;s easy to Top-up you&#39;re mobile
                </h2>
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
                    <Image src={how_works_icon_2} alt="icon" />
                    <span className="xlr">01</span>
                  </div>
                </div>
                <div className="bottom-icon">
                  <h5>Enter a number</h5>
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
                  <h5>Select a plan</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-item d-grid justify-content-center">
                <div className="icon">
                  <div className="iconbg">
                    <Image src={how_works_icon_2} alt="icon" />
                    <span className="xlr third">03</span>
                  </div>
                </div>
                <div className="bottom-icon">
                  <h5>Get connected</h5>
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
