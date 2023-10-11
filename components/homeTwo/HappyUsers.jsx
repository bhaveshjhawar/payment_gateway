import Image from "next/image";
import Link from "next/link";
import smile from "/public/img/smile.png";

const HappyUsers = () => {
  return (
    <section className="call-action-inner second">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <div className="section-header text-center">
                <h2 className="title d-flex align-items-center">
                  <span>245m+</span>
                  <Image src={smile} alt="image" />
                  Happy Users
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area">
                <div className="row justify-content-between">
                  <div className="col-lg-5 col-md-5">
                    <h4>Be a part of a new era of global payments.</h4>
                    <Link href="/register-2" className="cmn-btn">
                      Get started
                    </Link>
                  </div>
                  <div className="col-lg-5 col-md-7 d-flex justify-content-md-end justify-content-center">
                    <div className="right-area d-flex ">
                      <div className="single one">
                        <h3>+50</h3>
                        <p>Currency</p>
                      </div>
                      <div className="single two">
                        <h3>+70</h3>
                        <p>Payment Options</p>
                      </div>
                      <div className="single three">
                        <h3>+100</h3>
                        <p>Country</p>
                      </div>
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

export default HappyUsers;
