import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import testimonials_user_4 from "/public/img/testimonials-user-4.png";
import testimonials_user_5 from "/public/img/testimonials-user-5.png";
import testimonials_user_6 from "/public/img/testimonials-user-6.png";
import testimonials_user_7 from "/public/img/testimonials-user-7.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="testimonials-index3">
      <div className="overlay pt-120 pb-120">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">What Our Customers Say</h2>
                <p>
                  245m+ happy clients all around the world. Don’t just take our
                  word for it
                </p>
              </div>
            </div>
          </div>
          <Slider {...settings} className="testimonials-carousel-two">
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_4} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_5} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_6} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_7} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_5} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item">
                <ul className="d-flex star-area align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <h5>Great service</h5>
                <p>
                  Great service. Very professional and quick. Also way better
                  rates than the bank or PayPal
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_6} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Aspen Press</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
