import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import how_works_icon_1 from "/public/img/how-works-icon-1.png";
import how_works_icon_2 from "/public/img/how-works-icon-2.png";
import how_works_icon_3 from "/public/img/how-works-icon-3.png";
import pop_up_bg from "/public/img/pop-up-bg.png";
import popup_icon from "/public/img/popup-icon.png";

const HowItsWork = () => {
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

      <section className="how-works inner-how-works">
        <div className="overlay pt-120">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="section-header text-center">
                  <h2 className="title">Just few steps to start</h2>
                  <p>
                    It&#39;s easier than you think. Follow 3 simple easy steps
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single-item d-grid justify-content-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={how_works_icon_1} alt="icon" />
                      <span className="xlr">01</span>
                    </div>
                  </div>
                  <div className="bottom-icon">
                    <h5>Create an acccount</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-item second d-grid justify-content-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={how_works_icon_2} alt="icon" />
                      <span className="xlr second">02</span>
                    </div>
                  </div>
                  <div className="bottom-icon">
                    <h5>Enter details</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-item d-grid justify-content-center">
                  <div className="icon">
                    <div className="iconbg">
                      <Image src={how_works_icon_3} alt="icon" />
                      <span className="xlr third">03</span>
                    </div>
                  </div>
                  <div className="bottom-icon">
                    <h5>Confirm and send</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="magnific-area d-flex align-items-center justify-content-center">
                  <div className="bg-area">
                    <Image className="bg-item" src={pop_up_bg} alt="icon" />
                  </div>
                  <button
                    className="mfp-iframe popupvideo bg-transparent"
                    onClick={() => setOpen(true)}
                  >
                    <Image src={popup_icon} alt="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItsWork;
