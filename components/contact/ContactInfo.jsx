import Image from "next/image";
import call_icon from "/public//img/call-icon.png";
import contact_banner_icon_1 from "/public/img/contact-banner-icon-1.png";
import contact_banner_icon_2 from "/public/img/contact-banner-icon-2.png";
import contact_banner_icon_3 from "/public/img/contact-banner-icon-3.png";
import sms_icon from "/public/img/sms-icon.png";

const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-item text-center">
          <div className="top-area">
            <div className="icon-area">
              <Image src={contact_banner_icon_1} alt="image" />
            </div>
            <h4 className="text-uppercase">Personal</h4>
            <p>Money Transfer</p>
          </div>
          <div className="bottom-area d-flex align-items-center">
            <div className="icon-bottom">
              <Image src={sms_icon} alt="image" />
            </div>
            <p>info@Paylio.com</p>
          </div>
          <div className="bottom-area d-flex align-items-center">
            <div className="icon-bottom">
              <Image src={call_icon} alt="image" />
            </div>
            <p>(455) 254 - 653</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-item text-center">
          <div className="top-area">
            <div className="icon-area">
              <Image src={contact_banner_icon_2} alt="image" />
            </div>
            <h4 className="text-uppercase">Business</h4>
            <p>International Payments</p>
          </div>
          <div className="bottom-area d-flex align-items-center">
            <div className="icon-bottom">
              <Image src={sms_icon} alt="image" />
            </div>
            <p>info@Paylio.com</p>
          </div>
          <div className="bottom-area d-flex align-items-center">
            <div className="icon-bottom">
              <Image src={call_icon} alt="image" />
            </div>
            <p>(455) 254 - 653</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-item text-center">
          <div className="top-area">
            <div className="icon-area">
              <Image src={contact_banner_icon_3} alt="image" />
            </div>
            <h4 className="text-uppercase">Chat with us</h4>
            <p>Money Transfer</p>
          </div>
          <div className="bottom-area offline">
            <h6>Monday – Saturday (9am to 5pm)</h6>
            <p>Currently Offline</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
