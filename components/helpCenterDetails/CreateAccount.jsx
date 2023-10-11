import Image from "next/image";
import Link from "next/link";
import dislike from "/public/img/dislike.png";
import like from "/public/img/like.png";
import right_icon_3 from "/public/img/right-icon-3.png";

const CreateAccount = () => {
  return (
    <section className="create-account">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="top-wrapper">
                <h3>Create a account on Paylio</h3>
                <p>
                  Opening a Paylio account is quick and easy. To register you
                  only need to provide your name, country of residence,
                  currency, email and password. You can now explore Paylio!
                </p>
                <p>
                  To actively start using your Paylio account, you will need to
                  complete your registration. We will ask you for the following
                  minimum personal information that will help us set up your
                  Paylio wallet features:
                </p>
                <ul>
                  <li>
                    <Image src={right_icon_3} alt="image" />
                    Address
                  </li>
                  <li>
                    <Image src={right_icon_3} alt="image" />
                    City
                  </li>
                  <li>
                    <Image src={right_icon_3} alt="image" />
                    Postal code
                  </li>
                  <li>
                    <Image src={right_icon_3} alt="image" />
                    Date of birth
                  </li>
                  <li>
                    <Image src={right_icon_3} alt="image" />
                    Mobile phone number
                  </li>
                </ul>
                <p>
                  To secure your newly created account, we will send you via
                  phone or email a 6-digit verification code, that you will need
                  to confirm. You can now start using your Paylio account!
                </p>
                <p>
                  Once you make your first successful deposit or receive money
                  in your Paylio wallet, the option to verify your account will
                  become available for you. You don’t need to verify your
                  identity, though, until you reach certain transaction limit.
                  The limits depend on the features you use and will be
                  displayed to you when you initiate a transaction.{" "}
                </p>
                <h5>Good to note:</h5>
                <ul className="note">
                  <li>
                    If you don’t have a Paylio account and money is sent to you
                    from another Paylio customer or online merchant, you will
                    need to complete the registration in order to receive it.
                    Once you do this, the money will be automatically added to
                    your Paylio account in the currency you chose during the
                    registration.
                  </li>
                  <li>
                    You may need to verify your Paylio account in order to take
                    advantage of some of the available features.
                  </li>
                </ul>
                <div className="like-dislike d-flex align-items-center">
                  <Link href="#" className="border-area">
                    <Image src={like} alt="image" />
                  </Link>
                  <Link href="#">
                    <Image src={dislike} alt="image" />
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

export default CreateAccount;
