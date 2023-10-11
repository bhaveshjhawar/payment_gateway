import Image from "next/image";
import Link from "next/link";
import maps from "/public/img/maps.png";
import testimonials_inner_bg from "/public/img/testimonials-inner-bg.png";

const Testimonials = () => {
  return (
    <section className="testimonials-inner">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="left-area">
                <Image src={testimonials_inner_bg} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="section">
                <h2 className="title">What Our Customers Say</h2>
                <h4>Fast and reliable!</h4>
                <p className="xxlr">
                  Well, i can say that this is the best so far with regards to
                  money transfer and mobile tip up. It has never has any flaws.
                  Infact, i recommend it to everyone. Thank you so much, Paylio.
                </p>
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="name-location d-flex align-items-center">
                  <h6>April Perry</h6>
                  <p className="smr">
                    {" "}
                    <Image src={maps} alt="image" />
                    United Kingdom
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

export default Testimonials;
