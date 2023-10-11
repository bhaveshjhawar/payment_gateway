import Image from "next/image";
import Link from "next/link";
import earning_illu from "/public/img/earning-illu.png";

const StartEarning = () => {
  return (
    <section className="start-earning">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="main-content">
            <div className="row">
              <div className="col-lg-6 cus-order d-flex align-items-center">
                <div className="img-area text-center">
                  <Image src={earning_illu} alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section">
                  <h2 className="title">
                    MAKE MONEY BY BEING APAYlio AFFILIATE
                  </h2>
                  <p>
                    Share the Paylio with your friends, and make some extra
                    money! We are offering 75$ for every 3 referrals. There is
                    no limit to the Paylio Referral Program. You can invite as
                    many friends as you can make! You have the potential to earn
                    thousands by referring people to Paylio.
                  </p>
                  <Link href="/login-2" className="cmn-btn">
                    START EARNING NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartEarning;
