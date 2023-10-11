import Image from "next/image";
import feature_list_icon_1 from "/public/img/feature-list-icon-1.png";
import feature_list_icon_2 from "/public/img/feature-list-icon-2.png";
import feature_list_icon_3 from "/public/img/feature-list-icon-3.png";

const LeftArea = () => {
  return (
    <div className="left-area">
      <div className="section-header">
        <h3>Faster, cheaper global money transfers</h3>
      </div>
      <div className="single-item d-flex align-items-center">
        <div className="icon-area">
          <Image src={feature_list_icon_1} alt="icon" />
        </div>
        <p>Same-day delivery to dozens of countries</p>
      </div>
      <div className="single-item d-flex align-items-center">
        <div className="icon-area">
          <Image src={feature_list_icon_2} alt="icon" />
        </div>
        <p>
          50,000+ five-star reviews across Trustpilot, the App Store and Google
          Play
        </p>
      </div>
      <div className="single-item d-flex align-items-center">
        <div className="icon-area">
          <Image src={feature_list_icon_3} alt="icon" />
        </div>
        <p>Secure and authorised by the FCA</p>
      </div>
    </div>
  );
};

export default LeftArea;
