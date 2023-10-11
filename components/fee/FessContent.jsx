import AccountTab from "./AccountTab";
import AdministrationTab from "./AdministrationTab";
import BuySellTab from "./BuySellTab";
import CurrencyConversionTab from "./CurrencyConversionTab";
import DepositTab from "./DepositTab";
import KeepPaylioTab from "./KeepPaylioTab";
import PrepaidCardTab from "./PrepaidCardTab";
import SendReceiveMoneyTab from "./SendReceiveMoneyTab";
import TabList from "./TabList";
import WithdrawTab from "./WithdrawTab";

const FessContent = () => {
  return (
    <section className="fees-content">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <TabList />
            </div>
            <div className="col-lg-7">
              <div className="tab-content" id="myTabContent">
                {/* Deposit Tab */}
                <DepositTab />

                {/* Withdraw Tab */}
                <WithdrawTab />

                {/* Account Tab */}
                <AccountTab />

                {/* SendReceive Money Tab */}
                <SendReceiveMoneyTab />

                {/* Currency Conversion Tab */}
                <CurrencyConversionTab />

                {/* Keep Paylio Tab */}
                <KeepPaylioTab />

                {/* Prepaid Card Tab */}
                <PrepaidCardTab />

                {/* Buy Sell Tab */}
                <BuySellTab />

                {/* Administration Tab */}
                <AdministrationTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FessContent;
