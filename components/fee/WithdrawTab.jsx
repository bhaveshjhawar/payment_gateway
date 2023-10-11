import Image from "next/image";
import Link from "next/link";
import global_payment_1 from "/public/img/global-payment-1.png";
import local_pay_icon_1 from "/public/img/local-pay-icon-1.png";
import local_pay_icon_4 from "/public/img/local-pay-icon-4.png";
import local_pay_icon_5 from "/public/img/local-pay-icon-5.png";
import local_pay_icon_6 from "/public/img/local-pay-icon-6.png";

const WithdrawTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="withdraw"
      role="tabpanel"
      aria-labelledby="withdraw-tab"
    >
      <div className="withdraw-area">
        <div className="single-item">
          <h5>Local payment methods</h5>
          <div className="single d-flex justify-content-between">
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={local_pay_icon_4} alt="icon" />
              </div>
              <h6>Crypto Wallet</h6>
            </div>
            <div className="text-area">
              <h6>Fee: 1.00 %</h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={local_pay_icon_5} alt="icon" />
              </div>
              <h6>NETELLER</h6>
            </div>
            <div className="text-area">
              <h6>Fee: 3.49 %</h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={local_pay_icon_1} alt="icon" />
              </div>
              <h6>Bank Transfer</h6>
            </div>
            <div className="text-area">
              <h6>Fee: GBP 4.71</h6>
            </div>
          </div>
          <div className="single d-flex justify-content-between">
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={local_pay_icon_6} alt="icon" />
              </div>
              <h6>Credit Card Visa</h6>
            </div>
            <div className="text-area">
              <h6>Fee: 7.50 %</h6>
            </div>
          </div>
        </div>
        <div className="single-item">
          <h5>Global payment methods</h5>
          <div className="single d-flex justify-content-between">
            <div className="icon-area d-flex align-items-center">
              <div className="icon">
                <Image src={global_payment_1} alt="icon" />
              </div>
              <h6>Swift</h6>
            </div>
            <div className="text-area">
              <h6>Fee: GBP 4.71</h6>
            </div>
          </div>
        </div>
        <div className="create-account">
          <Link href="/register-2" className="cmn-btn">
            Open a free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WithdrawTab;
