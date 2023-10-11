import Image from "next/image";
import fees_icon_1 from "/public/img/fees-icon-1.png";
import fees_icon_2 from "/public/img/fees-icon-2.png";
import fees_icon_3 from "/public/img/fees-icon-3.png";
import fees_icon_4 from "/public/img/fees-icon-4.png";
import fees_icon_5 from "/public/img/fees-icon-5.png";
import fees_icon_6 from "/public/img/fees-icon-6.png";
import fees_icon_7 from "/public/img/fees-icon-7.png";
import fees_icon_8 from "/public/img/fees-icon-8.png";
import fees_icon_9 from "/public/img/fees-icon-9.png";

const TabList = () => {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="deposit-tab"
          data-bs-toggle="tab"
          data-bs-target="#deposit"
          type="button"
          role="tab"
          aria-controls="deposit"
          aria-selected="true"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_1} alt="icon" />
          </span>
          <span className="title-area">Deposit funds</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="withdraw-tab"
          data-bs-toggle="tab"
          data-bs-target="#withdraw"
          type="button"
          role="tab"
          aria-controls="withdraw"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_2} alt="icon" />
          </span>
          <span className="title-area">Withdraw funds</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="account-tab"
          data-bs-toggle="tab"
          data-bs-target="#account"
          type="button"
          role="tab"
          aria-controls="account"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_3} alt="icon" />
          </span>
          <span className="title-area">Account level fees</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="send-receive-money-tab"
          data-bs-toggle="tab"
          data-bs-target="#send-receive-money"
          type="button"
          role="tab"
          aria-controls="send-receive-money"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_4} alt="icon" />
          </span>
          <span className="title-area">Send money, receive money</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="currency-conversion-tab"
          data-bs-toggle="tab"
          data-bs-target="#currency-conversion"
          type="button"
          role="tab"
          aria-controls="currency-conversion"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_5} alt="icon" />
          </span>
          <span className="title-area">Currency conversion</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="keep-paylio-tab"
          data-bs-toggle="tab"
          data-bs-target="#keep-paylio"
          type="button"
          role="tab"
          aria-controls="keep-paylio"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_6} alt="icon" />
          </span>
          <span className="title-area">Keep Paylio</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="prepaid-card-tab"
          data-bs-toggle="tab"
          data-bs-target="#prepaid-card"
          type="button"
          role="tab"
          aria-controls="prepaid-card"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_7} alt="icon" />
          </span>
          <span className="title-area">Prepaid card</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="buy-sell-tab"
          data-bs-toggle="tab"
          data-bs-target="#buy-sell"
          type="button"
          role="tab"
          aria-controls="buy-sell"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_8} alt="icon" />
          </span>
          <span className="title-area">Buy & sell cryptocurrency</span>
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="administration-tab"
          data-bs-toggle="tab"
          data-bs-target="#administration"
          type="button"
          role="tab"
          aria-controls="administration"
          aria-selected="false"
        >
          <span className="icon d-flex align-items-center justify-content-center">
            <Image src={fees_icon_9} alt="icon" />
          </span>
          <span className="title-area">Administration fees</span>
        </button>
      </li>
    </ul>
  );
};

export default TabList;
