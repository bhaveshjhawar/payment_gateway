import Image from "next/image";
import Link from "next/link";
import loading from "/public/img/loading.png";

const SupportedCountries = () => {
  return (
    <section className="supported-countries">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <h2>Supported countries</h2>
                <ul>
                  <li>Albania</li>
                  <li>Algeria</li>
                  <li>Andorra</li>
                  <li>Angola</li>
                  <li>Anguilla</li>
                  <li>Azerbaijan</li>
                  <li>Argentina</li>
                  <li>Armenia</li>
                  <li>Australia</li>
                  <li>Bangladesh</li>
                  <li>Barbados</li>
                  <li>Belarus</li>
                  <li>Belgium</li>
                  <li>Belize</li>
                  <li>Benin</li>
                  <li>Bermuda</li>
                  <li>Bhutan</li>
                  <li>Brazil</li>
                  <li>Cambodia</li>
                  <li>China</li>
                  <li>Croatia</li>
                  <li>Cyprus</li>
                  <li>Denmark</li>
                  <li>Djibouti</li>
                  <li>Ecuador</li>
                  <li>Egypt</li>
                  <li>Finland</li>
                  <li>Gambia</li>
                  <li>Germany</li>
                  <li>Greenland</li>
                  <li>Hong Kong</li>
                  <li>Hungary</li>
                  <li>Iceland</li>
                  <li>India</li>
                  <li>Nigeria</li>
                  <li>Norway</li>
                  <li>Oman</li>
                  <li>Pakistan</li>
                  <li>Palau</li>
                </ul>
                <div className="btn-area text-center">
                  <Link href="#">
                    <Image src={loading} alt="image" />
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedCountries;
