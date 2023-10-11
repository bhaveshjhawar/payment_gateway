import Image from "next/image";
import business_commercial_Illu from "/public/img/business-commercial-Illu.png";

const BusinessAndCommercial = () => {
  return (
    <section className="business-commercial">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="img-area">
                <Image src={business_commercial_Illu} alt="icon" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="section">
                <h2 className="title">Business & Commercial payments</h2>
                <p>
                  Paylio offers all business and corporate customers an expert
                  and personal level of foreign exchange services with the best
                  exchange rate.
                </p>
                <p>
                  We believe in helping your business by saving a significant
                  amount on foreign exchange as compared to Banks.
                </p>
                <p>
                  Our business payment system is designed to take the hassle out
                  of international money transfer, leaving you more time to
                  focus on running your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAndCommercial;
