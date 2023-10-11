import Image from "next/image";
import Link from "next/link";
import our_vision_img from "/public/img/our-vision-img.png";

const OurMission = () => {
  return (
    <section className="our-mission">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="section-header">
                <h2 className="title">Our vision is</h2>
                <p>
                  We will foster a culture that is free from any kind of
                  discrimination, promoting ethical values, recruiting a
                  talented workforce, and staying at the forefront of the
                  industry.All this will help us innovate products that leapfrog
                  into the future and above all, be fair to all.
                </p>
                <Link href="/register" className="cmn-btn">
                  Join Paylio
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-area">
                <Image src={our_vision_img} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
