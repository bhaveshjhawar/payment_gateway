import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import fb from "/public/img/fb.png";
import google from "/public/img/google.png";
import show_hide from "/public/img/show-hide.png";

const PersonalTab = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="tab-pane fade show active"
      id="personal"
      role="tabpanel"
      aria-labelledby="personal-tab"
    >
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
                type={!showPassword ? "password" : "text"}
                className="passInput"
                placeholder="Password"
              />
              <Image
                className="showPass"
                src={show_hide}
                alt="image"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>
        <div className="btn-area">
          <button className="cmn-btn">Log in</button>
        </div>
      </form>
      <div className="form-bottom">
        <div className="continue">
          <p>Or continue with</p>
        </div>
        <div className="login-with d-flex align-items-center">
          <Link href="#">
            <Image src={google} alt="image" />
          </Link>
          <Link href="#">
            <Image src={fb} alt="image" />
          </Link>
        </div>
        <div className="forget-pw">
          <Link href="/forgot-password-2">Forgot your password?</Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalTab;
