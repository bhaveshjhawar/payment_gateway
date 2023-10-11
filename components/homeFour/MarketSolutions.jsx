import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import market_icon_1 from "/public/img/market-icon-1.png";
import market_icon_2 from "/public/img/market-icon-2.png";
import market_icon_3 from "/public/img/market-icon-3.png";
import market_icon_4 from "/public/img/market-icon-4.png";
import market_icon_5 from "/public/img/market-icon-5.png";
import market_icon_6 from "/public/img/market-icon-6.png";

const Next = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="slick-prev pull-left slick-arrow"
    >
      <i className="icon-c-left-single" aria-hidden="true"></i>
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
      <i className="icon-d-right-single" aria-hidden="true"></i>
    </button>
  );
};

const MarketSolutions = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function () {
      return (
        <button className="dot" type="button" title="">
          <span className="string"></span>
        </button>
      );
    },
  };

  return (
    <section className="market-solutions">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row cus-mar">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="section-header">
                <h2 className="title">Market Solutions</h2>
                <p>
                  We offer safe and reliable technologies for accepting all
                  types of payments in different business areas. Our solutions
                  are designed to meet the characteristics and requirements of
                  each industry.
                </p>
                <Link href="/index-6" className="cmn-btn">
                  Find out solutions
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <Slider {...settings} className="market-carousel">
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_1} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Online-Retail</h5>
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_2} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Marketplaces</h5>
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_3} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Games</h5>
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_4} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Travel</h5>
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_5} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Utility Services</h5>
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="single-item">
                    <div className="icon">
                      <div className="iconbg">
                        <Image src={market_icon_6} alt="icon" />
                      </div>
                    </div>
                    <div className="bottom text-center">
                      <h5>Subscription services</h5>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSolutions;
