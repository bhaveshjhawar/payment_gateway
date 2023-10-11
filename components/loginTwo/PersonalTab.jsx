import Image from "next/image";
import Link from "next/link";
import facebook from "/public/img/fb.png";
import google from "/public/img/google.png";
import show_hide from "/public/img/show-hide.png";

const PersonalTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="personal"
      role="tabpanel"
      aria-labelledby="personal-tab"
    >
      <div className="login-with d-flex align-items-center">
        <Link href="#">
          <Image src={google} alt="image" />
        </Link>
        <Link href="#">
          <Image src={facebook} alt="image" />
        </Link>
      </div>
      <div className="continue">
        <p>Or continue with</p>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-12">
            <div className="single-input d-flex align-items-center">
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="col-12">
            <div className="single-input d-flex align-items-center">
              <input
                type="password"
                className="passInput"
                placeholder="Password"
              />
              <Image className="showPass" src={show_hide} alt="image" />
            </div>
          </div>
        </div>

        <div className="remember-forgot d-flex justify-content-between">
          <div className="form-group d-flex">
            <div className="checkbox_wrapper">
              <input className="check-box" id="check1" type="checkbox" />
              <label></label>
            </div>
            <label htmlFor="check1">
              <span className="check_span">Remember Me</span>
            </label>
          </div>
          <div className="forget-pw">
            <Link href="#">Forgot your password?</Link>
          </div>
        </div>
        <div className="btn-area">
          <button className="cmn-btn">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalTab;
