import Image from "next/image";
import Link from "next/link";
import apple_btn from "/public/img/apple_btn.png";
import gPlay_btn from "/public/img/gPlay_btn.png";

const Banner = () => {
  return (
    <section className="banner-section index-10">
      <div className="overlay">
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <h1>Your money on the move</h1>
                  <p className="xxlr">
                    Enjoy a new look, fresh features and an upgraded mobile app,
                    so you can send and spend with ease.
                  </p>
                  <div className="app-market">
                    <Link href="#">
                      <Image src={gPlay_btn} alt="App Store" />
                    </Link>
                    <Link href="#">
                      <Image src={apple_btn} alt="App Store" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
