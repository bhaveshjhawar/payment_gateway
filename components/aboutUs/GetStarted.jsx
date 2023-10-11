import Image from "next/image";
import Link from "next/link";
import rectangle_globe from "/public/img/rectangle-globe.png";

const GetStarted = () => {
  return (
    <section className="get-started-section about-us">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 col-md-7">
              <div className="section-header">
                <h2 className="title">Our mission</h2>
                <p>
                  Our products must be superior to meet our user’s high
                  expectations. It’s our mission to provide maximum value to
                  anyone who transacts with Paylio. Building excellent customer
                  service into our core product lines and above all remember
                  that we exist because of our customers.
                </p>
                <Link href="/register-2" className="cmn-btn">
                  Get your free account
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="img-area">
                <Image src={rectangle_globe} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
