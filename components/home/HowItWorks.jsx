import Image from "next/image";
import how_works_icon_1 from "/public/img/how-works-icon-1.png";
import how_works_icon_2 from "/public/img/how-works-icon-2.png";
import how_works_icon_3 from "/public/img/how-works-icon-3.png";
import how_works_Illu from "/public/img/how-works-Illu.png";

const HowItWorks = () => {
  return (
    <section className="how-works">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">How to get started with sending money</h2>
                <p>
                  It&#39;s easier than you think. Follow 3 simple easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="left-area">
                <Image src={how_works_Illu} alt="image" />
              </div>
            </div>
            <div className="col-lg-7 wrapper col-md-7">
              <div className="single-item d-flex align-items-center">
                <div className="icon">
                  <span className="xlr">01</span>
                  <div className="iconbg">
                    <Image src={how_works_icon_1} alt="icon" />
                  </div>
                </div>
                <div className="right">
                  <h5>Register & lock-in your transfer</h5>
                  <p>
                    Enter your details, apply within minutes and get set up all
                    in one go to create transactions
                  </p>
                </div>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="icon">
                  <span className="xlr second">02</span>
                  <div className="iconbg">
                    <Image src={how_works_icon_2} alt="icon" />
                  </div>
                </div>
                <div className="right">
                  <h5>Send us your funds</h5>
                  <p>
                    Select currency amount you want to send and enter your
                    beneficiary details
                  </p>
                </div>
              </div>
              <div className="single-item d-flex align-items-center">
                <div className="icon">
                  <span className="xlr third">03</span>
                  <div className="iconbg">
                    <Image src={how_works_icon_3} alt="icon" />
                  </div>
                </div>
                <div className="right">
                  <h5>We deliver to your recipient</h5>
                  <p>
                    Pay us by Credit/Debit card or Bank Transfer, and we do the
                    rest. That&#39;s it!
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

export default HowItWorks;
