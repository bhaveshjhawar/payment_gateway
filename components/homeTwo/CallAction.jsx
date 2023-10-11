import Image from "next/image";
import Link from "next/link";
import check_alt from "/public/img/check-alt.png";

const CallAction = () => {
  return (
    <section className="call-action-inner">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex align-items-center">
              <div className="section-header text-center">
                <h3>Faster, easier and cheaper Money Transfer starts here</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <ul className="feature">
                      <li>
                        <div className="icon">
                          <Image src={check_alt} alt="icon" />
                        </div>
                        Licensed & Regulated
                      </li>
                      <li>
                        <div className="icon">
                          <Image src={check_alt} alt="icon" />
                        </div>
                        100% Transparent
                      </li>
                      <li>
                        <div className="icon">
                          <Image src={check_alt} alt="icon" />
                        </div>
                        Hassle-free
                      </li>
                      <li>
                        <div className="icon">
                          <Image src={check_alt} alt="icon" />
                        </div>
                        Across 180+ Countries
                      </li>
                    </ul>
                    <div className="btn-area text-center">
                      <Link href="/register" className="cmn-btn">
                        Get started
                      </Link>
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

export default CallAction;
