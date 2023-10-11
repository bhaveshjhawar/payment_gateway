import Image from "next/image";
import Link from "next/link";
import how_works_left from "/public/img/how-works-left.png";
import how_works_right from "/public/img/how-works-right.png";

const CallAction = () => {
  return (
    <section className="call-action-inner index8">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header pb-120">
                <h2 className="title">Paylio Affiliates Join. Grow. Earn.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h3>Join our affiliate network now</h3>
                    <Link href="/register" className="cmn-btn">
                      Create Account Now
                    </Link>
                  </div>
                </div>
                <div className="icon-area">
                  <Image className="icon-1" src={how_works_left} alt="icon" />
                  <Image className="icon-2" src={how_works_right} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAction;
