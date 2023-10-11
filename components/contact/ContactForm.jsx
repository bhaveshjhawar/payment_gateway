import Image from "next/image";
import contact_com_icon from "/public/img/contact-com-icon.png";
import contact_email_icon from "/public/img/contact-email-icon.png";
import contact_phone_icon from "/public/img/contact-phone-icon.png";
import contact_user_icon from "/public/img/contact-user-icon.png";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">
                  Get in touch with us for more information
                </h2>
                <p>If you need help or have a question, we’re here for you</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-area">
                <form action="#">
                  <div className="row">
                    <div className="col-6">
                      <div className="single-input d-flex align-items-center">
                        <input type="text" placeholder="Name" required />
                        <Image src={contact_user_icon} alt="image" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-input d-flex align-items-center">
                        <input type="email" placeholder="Email" required />
                        <Image src={contact_email_icon} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="single-input d-flex align-items-center">
                        <input type="text" placeholder="Phone" required />
                        <Image src={contact_phone_icon} alt="image" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-input d-flex align-items-center">
                        <input type="text" placeholder="Company" required />
                        <Image src={contact_com_icon} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="single-input d-flex align-items-center">
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div className="single-input d-flex align-items-center">
                    <textarea
                      placeholder="What’s your message?"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="btn-area text-center">
                    <button className="cmn-btn">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
