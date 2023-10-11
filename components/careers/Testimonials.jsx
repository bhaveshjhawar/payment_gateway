import Image from "next/image";
import Link from "next/link";
import testimonials_left from "/public/img/testimonials-left.png";

const Testimonials = () => {
  return (
    <section className="testimonials-careers">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="img-area">
                <Image src={testimonials_left} alt="image" />
                <div className="title-area">
                  <h5>Dan Ballard</h5>
                  <p>Head of Marketing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="section">
                <h5>TESTIMONIALS</h5>
                <h4>
                  “Working for Paylio has been nothing short of an incredible
                  experience”
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit eque
                  dolor ipsum odio justo amet, urna, auctor dolor ist amenor.
                </p>
                <Link href="#open-positions" className="cmn-btn">
                  Open positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
