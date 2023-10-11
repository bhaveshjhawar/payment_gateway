import Image from "next/image";
import check_alt from "/public/img/check-alt.png";
import mass_payments_secure from "/public/img/mass-payments-secure.png";

const Security = () => {
  return (
    <section className="security-section">
      <div className="overlay pt-120 pb-120">
        <div className="container cus-mar">
          <div className="row">
            <div className="col-lg-6 col-md-8 d-flex align-items-center">
              <div className="left-area">
                <div className="section-header">
                  <h2 className="title">Safe & secure money transfer</h2>
                  <p>
                    We use advance protection on all the levels of
                    IT-infrastructure
                  </p>
                </div>
                <ul className="feature">
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Send money quickly or start a transfer and pay in-store
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Track your money transfer in real time.
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={check_alt} alt="icon" />
                    </div>
                    Send again quickly to friends and family.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="img-area wow fadeInUp">
                <Image src={mass_payments_secure} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
