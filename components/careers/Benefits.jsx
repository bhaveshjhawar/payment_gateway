import Image from "next/image";
import benefit_icon_1 from "/public/img/benefit-icon-1.png";
import benefit_icon_2 from "/public/img/benefit-icon-2.png";
import benefit_icon_3 from "/public/img/benefit-icon-3.png";
import benefit_icon_4 from "/public/img/benefit-icon-4.png";
import benefit_icon_5 from "/public/img/benefit-icon-5.png";
import benefit_icon_6 from "/public/img/benefit-icon-6.png";

const Benefits = () => {
  return (
    <section className="benefit-section">
      <div className="overlay pt-120 cus-pad">
        <div className="container">
          <div className="main-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9">
                <div className="section-header text-center">
                  <h2 className="title">
                    We have cool benefits to support you
                  </h2>
                  <p>
                    We’re all working together to open up the law for everyone,
                    making legal services easy and affordable. It’s more than a
                    desk job, and more fun too. Join us.
                  </p>
                </div>
              </div>
            </div>
            <div className="top-wrapper">
              <div className="row wrapper">
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_1} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_2} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_3} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_4} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_5} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-item text-center">
                    <div className="icon">
                      <Image src={benefit_icon_6} alt="icon" />
                    </div>
                    <h6>Private healthcare</h6>
                    <p>
                      A high-quality Vitality plan, with rewards that are geared
                      towards a healthier lifestyle.
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

export default Benefits;
