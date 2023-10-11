import Image from "next/image";
import comment_img_1 from "/public/img/comment-img-1.png";
import comment_img_2 from "/public/img/comment-img-2.png";
import comment_img_3 from "/public/img/comment-img-3.png";
import flag_icon from "/public/img/flag-icon.png";
import reply_icon from "/public/img/reply-icon.png";

const Comment = () => {
  return (
    <>
      <div className="comment-single d-flex">
        <div className="avatar">
          <Image src={comment_img_1} alt="image" />
        </div>
        <div className="comnt-text">
          <div className="reply-icon">
            <button>
              <Image src={reply_icon} alt="image" />
            </button>
          </div>
          <div className="comnt-info">
            <div className="name-review d-flex align-items-center">
              <h6>Lindsey Dokidis</h6>
              <p className="lang smr">
                <Image src={flag_icon} alt="image" />
                United States
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              dolor quis eros imperdiet volutpat.
            </p>
            <p className="smr date">Published 1 week ago</p>
          </div>
        </div>
      </div>
      <div className="comment-single d-flex second">
        <div className="avatar">
          <Image src={comment_img_2} alt="image" />
        </div>
        <div className="comnt-text">
          <div className="reply-icon">
            <button>
              <Image src={reply_icon} alt="image" />
            </button>
          </div>
          <div className="comnt-info">
            <div className="name-review d-flex align-items-center">
              <h6>Ahmad Curtis</h6>
              <p className="lang smr">
                <Image src={flag_icon} alt="image" />
                United States
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              dolor quis eros imperdiet volutpat.
            </p>
            <p className="smr date">Published 1 week ago</p>
          </div>
        </div>
      </div>
      <div className="comment-single d-flex">
        <div className="avatar">
          <Image src={comment_img_3} alt="image" />
        </div>
        <div className="comnt-text">
          <div className="reply-icon">
            <button>
              <Image src={reply_icon} alt="image" />
            </button>
          </div>
          <div className="comnt-info">
            <div className="name-review d-flex align-items-center">
              <h6>Lindsey Dokidis</h6>
              <p className="lang smr">
                <Image src={flag_icon} alt="image" />
                United States
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              dolor quis eros imperdiet volutpat.
            </p>
            <p className="smr date">Published 1 week ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
