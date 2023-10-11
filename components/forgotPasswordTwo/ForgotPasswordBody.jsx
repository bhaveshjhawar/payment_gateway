import Image from "next/image";
import Link from "next/link";
import forgot_password_Illus from "/public/img/forgot-password-Illus.png";
import forgot_pwd_2_Illus from "/public/img/forgot-pwd-2-Illus.png";
import left_icon from "/public/img/left-icon.png";
import logo from "/public/img/logo.png";

const ForgotPasswordBody = () => {
  return (
    <section className="log-reg forgot-pws reset-pws two">
      <div className="overlay pb-120">
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
          <div className="row justify-content-center">
            <div className="col-md-5 d-flex align-items-end">
              <div className="img-area">
                <Image src={forgot_pwd_2_Illus} alt="image" />
              </div>
            </div>
            <div className="col-lg-6 z-1 text-center d-flex align-items-center">
              <div className="form-box">
                <div className="icon-area">
                  <Image src={forgot_password_Illus} alt="image" />
                </div>
                <h4>Forgot your password?</h4>
                <p>
                  To reset your password, enter the email address that you used
                  to set up your Paylio account. We&#39;ll send you a link to
                  help you get back into your account.
                </p>
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input d-flex align-items-center">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button className="cmn-btn">Recover Password</button>
                  </div>
                </form>
                <p className="back-login dont-acc">
                  Go back to <Link href="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordBody;
