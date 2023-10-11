import Image from "next/image";
import how_work_icon_1 from "/public/img/how-work-icon-1.png";
import how_work_icon_2 from "/public/img/how-work-icon-2.png";
import how_work_icon_3 from "/public/img/how-work-icon-3.png";

const HowItsWork = () => {
  return (
    <section className="how-works index8">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h2 className="title">How it Works</h2>
                <p>
                  It&#39;s easier than you think. Follow 3 simple easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-4 col-md-4">
              <div className="single-item active text-center">
                <div className="icon-area">
                  <Image src={how_work_icon_1} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Invite 3 Friends</h5>
                  <p>
                    Invite 3 friends to Paylio via Facebook, email or by sharing
                    your unique referral link.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-item active text-center">
                <div className="icon-area">
                  <Image src={how_work_icon_2} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Your Friends Use it</h5>
                  <p>
                    Your 3 friends must sign up using your referral link, verify
                    their account and make their first transfer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-item active text-center">
                <div className="icon-area">
                  <Image src={how_work_icon_3} alt="icon" />
                </div>
                <div className="text-area">
                  <h5>Earn $75</h5>
                  <p>
                    Once all 3 friends have completed their first transfers,
                    your $75 will be added to your rewards balance.
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
