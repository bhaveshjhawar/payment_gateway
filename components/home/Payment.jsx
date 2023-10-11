import Image from "next/image";
import Slider from "react-slick";
import payment_icon_1 from "/public/img/payment-icon-1.png";
import payment_icon_2 from "/public/img/payment-icon-2.png";
import payment_icon_3 from "/public/img/payment-icon-3.png";
import payment_icon_4 from "/public/img/payment-icon-4.png";
import payment_icon_5 from "/public/img/payment-icon-5.png";

const Next = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="slick-prev pull-left slick-arrow"
    >
      <i className="icon-a-left-double" aria-hidden="true"></i>
    </button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="slick-next pull-right slick-arrow"
    >
      <i className="icon-b-right-double" aria-hidden="true"></i>
    </button>
  );
};

const Payment = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="payment-solutions">
      <div className="overlay pt-120 pb-120">
        <div className="container-fruid wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-header">
                  <h2 className="title">All Your Payments In One Place</h2>
                  <p>
                    We make international money transfer fast, simple and
                    secure. Whichever method you choose, it only takes a few
                    steps to send money online with us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Slider {...settings} className="payment-carousel">
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_1} alt="icon" />
                </div>
                <h5>Pay your Supplier</h5>
                <p>
                  Pay your Business payments with great rates and no hidden fee.
                </p>
              </div>
            </div>
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_2} alt="icon" />
                </div>
                <h5>Freelancers</h5>
                <p>
                  Pay directly to a foreign freelancer or employee around the
                  world.
                </p>
              </div>
            </div>
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_3} alt="icon" />
                </div>
                <h5>Bulk Payments</h5>
                <p>Pay multiple payments to your beneficiaries in one go.</p>
              </div>
            </div>
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_4} alt="icon" />
                </div>
                <h5>Bulk Payments</h5>
                <p>Pay multiple payments to your beneficiaries in one go.</p>
              </div>
            </div>
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_5} alt="icon" />
                </div>
                <h5>Online Shopping</h5>
                <p>
                  Pay for shopping at online stores from your paylio wallet
                  smoothly.
                </p>
              </div>
            </div>
            <div className="single text-center">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={payment_icon_3} alt="icon" />
                </div>
                <h5>Bulk Payments</h5>
                <p>Pay multiple payments to your beneficiaries in one go.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Payment;
