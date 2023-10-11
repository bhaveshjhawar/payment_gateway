import BannerSmall from "../common/BannerSmall";
import Breadcrumb from "../common/Breadcrumb";
import Select from "../common/Select";

const country = [
  { id: 1, name: "Country" },
  { id: 2, name: "United kingdom" },
  { id: 3, name: "United State" },
  { id: 4, name: "France" },
  { id: 5, name: "Denmark" },
];
const currency = [
  { id: 1, name: "Currency" },
  { id: 2, name: "GBP (Pound sterling)" },
  { id: 3, name: "USD (United States dollar)" },
  { id: 4, name: "EUR (European euro)" },
  { id: 5, name: "DKK (Danish krone)" },
];

const Banner = () => {
  return (
    <section className="banner-section inner-pages fees">
      {/* Banner Small */}
      <BannerSmall title="Fees">
        <Breadcrumb
          breadcrumbs={[
            ["home", "/"],
            ["Fees", "/"],
          ]}
        />
      </BannerSmall>

      <div className="banner-bottom-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cus-z">
              <div className="top-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <h2 className="text-uppercase">
                      Fees for other transactions
                    </h2>
                    <p>Select your country and local currency to see fees</p>
                    <div className="select-area">
                      {/* Select */}
                      <Select data={country} />

                      {/* Select */}
                      <Select data={currency} />
                    </div>
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
