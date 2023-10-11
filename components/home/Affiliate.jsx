import Image from "next/image";
import Link from "next/link";
import affiliate_bg from "/public/img/affiliate-bg.png";

const Affiliate = () => {
  return (
    <section className="affiliate-section">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="left-area">
                <Image src={affiliate_bg} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="section">
                <h5>transfers for you and your friends!</h5>
                <h2 className="title">Earn zero-fee*</h2>
                <Link href="/index-8" className="cmn-btn">
                  Invite Friends
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
