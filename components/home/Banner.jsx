import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ban_frame_1 from "/public/img/ban-frame-1.png";
import ban_frame_2 from "/public/img/ban-frame-2.png";
import ban_frame_3 from "/public/img/ban-frame-3.png";
import ban_frame_4 from "/public/img/ban-frame-4.png";
import ban_right from "/public/img/ban-right.png";
import video_icon from "/public/img/video-icon.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <section className="banner-section">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="illu-item">
              <Image className="item-1" src={ban_frame_1} alt="image" />
              <Image className="item-2" src={ban_frame_2} alt="image" />
              <Image className="item-3" src={ban_frame_3} alt="image" />
              <Image className="item-4" src={ban_frame_4} alt="image" />
            </div>
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area justify-content-center">
                    <h1>Instantly pay the world</h1>
                    <p className="xxlr">
                      A simple and highly secure money transfer around the world
                    </p>
                    <form action="#">
                      <div className="input-field d-flex">
                        <input
                          type="email"
                          placeholder="Where are you sending money to"
                        />
                        <button className="cmn-btn">
                          <span>Check rate</span>
                        </button>
                      </div>
                    </form>
                    <div className="bottom-banner d-flex align-items-center">
                      <div className="left">
                        <button
                          className="icon mfp-iframe popupvideo bg-transparent"
                          onClick={() => setOpen(true)}
                        >
                          <Image src={video_icon} alt="icon" />
                        </button>
                      </div>
                      <div className="right d-grid">
                        <h5>245M+</h5>
                        <div className="review d-flex align-items-center">
                          <h6>4.0</h6>
                          <Link href="#">
                            <i className="fas fa-star"></i>
                          </Link>
                          <Link href="#">
                            <i className="fas fa-star"></i>
                          </Link>
                          <Link href="#">
                            <i className="fas fa-star"></i>
                          </Link>
                          <Link href="#">
                            <i className="fas fa-star"></i>
                          </Link>
                          <Link href="#">
                            <i className="fas fa-star blank"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-illu">
              <Image
                className="right-1 wow fadeInUp"
                src={ban_right}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
