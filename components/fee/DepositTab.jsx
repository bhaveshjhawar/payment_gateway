import Image from "next/image";
import Link from "next/link";
import local_pay_icon_1 from "/public/img/local-pay-icon-1.png";
import local_pay_icon_2 from "/public/img/local-pay-icon-2.png";
import local_pay_icon_3 from "/public/img/local-pay-icon-3.png";
import online_pay_icon_1 from "/public/img/online-pay-icon-1.png";
import online_pay_icon_2 from "/public/img/online-pay-icon-2.png";
import online_pay_icon_3 from "/public/img/online-pay-icon-3.png";

const DepositTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="deposit"
      role="tabpanel"
      aria-labelledby="deposit-tab"
    >
      <div className="deposit-area">
        <div className="single-item d-flex justify-content-between">
          <div className="icon-side">
            <h5>Local payment methods</h5>
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={local_pay_icon_1} alt="icon" />
              </div>
              <div className="icon">
                <Image src={local_pay_icon_2} alt="icon" />
              </div>
              <div className="icon">
                <Image src={local_pay_icon_3} alt="icon" />
              </div>
            </div>
          </div>
          <div className="text-area">
            <h6>Fee: 1.00 %</h6>
          </div>
        </div>
        <div className="single-item d-flex justify-content-between">
          <div className="icon-side">
            <h5>Global payment methods</h5>
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={online_pay_icon_1} alt="icon" />
              </div>
              <div className="icon">
                <Image src={online_pay_icon_2} alt="icon" />
              </div>
              <div className="icon">
                <Image src={online_pay_icon_3} alt="icon" />
              </div>
            </div>
          </div>
          <div className="text-area">
            <h6>Fee: 1.00 %</h6>
          </div>
        </div>
        <div className="create-account">
          <p>
            Please note that if you use your credit card for gambling purposes
            your issuer may charge a ‘cash advance&#39; fee. This fee is outside
            Paylio’s control, and we receive no part of it.
          </p>
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositTab;
