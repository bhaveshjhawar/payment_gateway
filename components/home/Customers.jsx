import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import customers_1 from "/public/img/customers-1.png";
import customers_2 from "/public/img/customers-2.png";
import customers_3 from "/public/img/customers-3.png";
import customers_4 from "/public/img/customers-4.png";
import customers_5 from "/public/img/customers-5.png";
import customers_6 from "/public/img/customers-6.png";
import customers_7 from "/public/img/customers-7.png";
import customers_bg from "/public/img/customers-bg.png";
import flag from "/public/img/flag.png";
import left_quote from "/public/img/left-quote.png";
import testimonials_1 from "/public/img/testimonials-1.png";

const Customers = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
    dotsclassName: "section-dots",
  };

  return (
    <section className="customers-section">
      <div className="overlay pb-120 d-flex justify-content-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="customers-area">
                <div className="element po-1">
                  <div className="image-area">
                    <p className="item-1">Awesome!</p>
                    <Image className="item-1" src={customers_1} alt="image" />
                  </div>
                </div>
                <div className="element po-2">
                  <div className="image-area">
                    <p className="item-2">Awesome!</p>
                    <Image className="item-2" src={customers_2} alt="image" />
                  </div>
                </div>
                <div className="element po-3">
                  <div className="image-area">
                    <p className="item-3">Awesome!</p>
                    <Image className="item-3" src={customers_3} alt="image" />
                  </div>
                </div>
                <div className="element po-4">
                  <div className="image-area">
                    <p className="item-4">Awesome!</p>
                    <Image className="item-4" src={customers_4} alt="image" />
                  </div>
                </div>
                <div className="element po-5">
                  <div className="image-area">
                    <p className="item-5">Awesome!</p>
                    <Image className="item-5" src={customers_5} alt="image" />
                  </div>
                </div>
                <div className="element po-6">
                  <div className="image-area">
                    <p className="item-6">Awesome!</p>
                    <Image className="item-6" src={customers_6} alt="image" />
                  </div>
                </div>
                <div className="element po-7">
                  <div className="image-area">
                    <p className="item-7">Awesome!</p>
                    <Image className="item-7" src={customers_7} alt="image" />
                  </div>
                </div>
                <div className="circle">
                  <Image src={customers_bg} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-area">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-7 col-sm-8">
                <div className="section-header">
                  <h2 className="title">
                    Over <span>245m+</span> User Trust Paylio
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 d-flex justify-content-md-between justify-content-around">
                <div className="total-item text-center">
                  <Slider {...settings} className="testimonials-carousel">
                    <div className="main">
                      <div className="wrapper">
                        <div className="profile">
                          <Image src={testimonials_1} alt="image" />
                        </div>
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="bottom-item">
                              <Image
                                className="quote"
                                src={left_quote}
                                alt="icon"
                              />
                              <div className="review">
                                {[...Array(5)].map((_, i) => (
                                  <Link key={i} href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                ))}
                              </div>
                              <p>
                                The greatest and number 1 services for transfer
                                money online. I can send money easily and
                                trusted services.
                              </p>
                              <Link href="#">Ella Stewart</Link>
                              <div className="country">
                                <Image src={flag} alt="image" />
                                <span className="smr"> United States</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main">
                      <div className="wrapper">
                        <div className="profile">
                          <Image src={testimonials_1} alt="image" />
                        </div>
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="bottom-item">
                              <Image
                                className="quote"
                                src={left_quote}
                                alt="icon"
                              />
                              <div className="review">
                                {[...Array(5)].map((_, i) => (
                                  <Link key={i} href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                ))}
                              </div>
                              <p>
                                The greatest and number 1 services for transfer
                                money online. I can send money easily and
                                trusted services.
                              </p>
                              <Link href="#">Rose W. Norwood</Link>
                              <div className="country">
                                <Image src={flag} alt="image" />
                                <span className="smr"> United States</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
