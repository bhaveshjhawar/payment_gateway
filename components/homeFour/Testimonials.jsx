import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import testimonials_user_10 from "/public/img/testimonials-user-10.png";
import testimonials_user_8 from "/public/img/testimonials-user-8.png";
import testimonials_user_9 from "/public/img/testimonials-user-9.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="testimonials-index3 index4">
      <div className="overlay pt-120 pb-120">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">
                  Don&#39;t take our word for it, take theirs
                </h2>
                <p>
                  Paylio is trusted by thousands! See what our customers are
                  saying...
                </p>
              </div>
            </div>
          </div>
          <Slider {...settings} className="testimonials-carousel-index4">
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
                <h5>Very fast and good</h5>
                <p>
                  Fast, trustful and secure. Best way to transfer money to my
                  family in Brazil.
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_8} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Melvin Floyd</h6>
                    <p>18 hours ago</p>
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
                <h5>Very fast and good</h5>
                <p>
                  Fast, trustful and secure. Best way to transfer money to my
                  family in Brazil.
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_9} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Melvin Floyd</h6>
                    <p>18 hours ago</p>
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
                <h5>Very fast and good</h5>
                <p>
                  Fast, trustful and secure. Best way to transfer money to my
                  family in Brazil.
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_10} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Melvin Floyd</h6>
                    <p>18 hours ago</p>
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
                <h5>Very fast and good</h5>
                <p>
                  Fast, trustful and secure. Best way to transfer money to my
                  family in Brazil.
                </p>
                <div className="profile d-flex align-items-center">
                  <div className="left">
                    <Image src={testimonials_user_9} alt="image" />
                  </div>
                  <div className="right">
                    <h6>Melvin Floyd</h6>
                    <p>18 hours ago</p>
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
