import Image from "next/image";
import contact_email_icon from "/public/img/contact-email-icon.png";
import contact_user_icon from "/public/img/contact-user-icon.png";

const CommentForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-6">
          <div className="single-input d-flex align-items-center">
            <input type="text" placeholder="Name" />
            <Image src={contact_user_icon} alt="image" />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input d-flex align-items-center">
            <input type="email" placeholder="Email" />
            <Image src={contact_email_icon} alt="image" />
          </div>
        </div>
      </div>
      <div className="single-input d-flex align-items-center">
        <textarea
          placeholder="What’s your message?"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="btn-area">
        <button className="cmn-btn">Post now</button>
      </div>
    </form>
  );
};

export default CommentForm;
