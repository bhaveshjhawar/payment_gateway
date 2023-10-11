import Image from "next/image";
import Link from "next/link";
import BusinessTab from "./BusinessTab";
import LeftArea from "./LeftArea";
import PersonalTab from "./PersonalTab";
import left_icon from "/public/img/left-icon.png";
import logo from "/public/img/logo.png";

const RegisterTwoBody = () => {
  return (
    <section className="log-reg register reg-2">
      <div className="overlay">
        <div className="container">
          <div className="top-head-area">
            <div className="row d-flex align-items-center">
              <div className="col-sm-5 col">
                <Link className="back-home" href="/">
                  <Image src={left_icon} alt="image" />
                  Back To Paylio
                </Link>
              </div>
              <div className="col-sm-5 col">
                <Link href="/">
                  <Image src={logo} alt="image" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-5 pt-120">
              {/* Left Area */}
              <LeftArea />
            </div>
            <div className="col-lg-6 z-1 text-center d-flex justify-content-center pb-120">
              <div className="form-box">
                <h4>Register with Paylio</h4>
                <p className="alr-acc dont-acc">
                  Already have an account?{" "}
                  <Link href="/login">Log in now.</Link>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="personal-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#personal"
                      type="button"
                      role="tab"
                      aria-controls="personal"
                      aria-selected="true"
                    >
                      Personal
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#business"
                      type="button"
                      role="tab"
                      aria-controls="business"
                      aria-selected="false"
                    >
                      Business
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* Personal Tab */}
                  <PersonalTab />

                  {/* Business Tab */}
                  <BusinessTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterTwoBody;
