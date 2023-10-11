import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import banner_carousel_icon_1 from "/public/img/banner-carousel-icon-1.png";
import banner_carousel_icon_2 from "/public/img/banner-carousel-icon-2.png";
import banner_carousel_icon_3 from "/public/img/banner-carousel-icon-3.png";
import banner_carousel_icon_4 from "/public/img/banner-carousel-icon-4.png";
import banner_carousel_icon_5 from "/public/img/banner-carousel-icon-5.png";

const Banner = () => {
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
        breakpoint: 992,
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
    <section className="banner-section index-6">
      <div className="overlay">
        <div className="banner-content pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Global Platform for All Payment Types</h1>
                  <p className="xxlr">
                    Send and receive foreign currencies for your business.
                  </p>
                  <Link href="/register-2" className="cmn-btn">
                    Get Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        <div className="container">
          <Slider {...settings} className="banner-carousel-index6">
            <div className="single">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={banner_carousel_icon_1} alt="icon" />
                </div>
                <div className="bottom">
                  <h5>Pay your Supplier</h5>
                  <p>
                    Pay your Business payments with great rates and no hidden
                    fee.
                  </p>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={banner_carousel_icon_2} alt="icon" />
                </div>
                <div className="bottom">
                  <h5>Freelancers</h5>
                  <p>
                    Pay directly to a foreign freelancer or employee around the
                    world
                  </p>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={banner_carousel_icon_3} alt="icon" />
                </div>
                <div className="bottom">
                  <h5>Bulk Payments</h5>
                  <p>Pay multiple payments to your beneficiaries in one go.</p>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={banner_carousel_icon_4} alt="icon" />
                </div>
                <div className="bottom">
                  <h5>Online Shopping</h5>
                  <p>
                    Pay for shopping at online stores from your paylio wallet
                    smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="single">
              <div className="single-item text-center">
                <div className="icon">
                  <Image src={banner_carousel_icon_5} alt="icon" />
                </div>
                <div className="bottom">
                  <h5>Mobile Top Up</h5>
                  <p>
                    Recharge any mobile number in moments with all network
                    operators
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Banner;
