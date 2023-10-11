import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ data }) => {
  const { title, desc, user_name, user_designation, avt, rating } = data;

  return (
    <div className="single-item">
      <ul className="d-flex star-area align-items-center">
        {[...Array(rating * 1)].map((_, i) => (
          <li key={i}>
            <Link href="#">
              <i className="fas fa-star"></i>
            </Link>
          </li>
        ))}
      </ul>
      <h5>{title}</h5>
      <p>{desc}</p>
      <div className="profile d-flex align-items-center">
        <div className="left">
          <Image src={avt} alt="image" />
        </div>
        <div className="right">
          <h6>{user_name}</h6>
          <p>{user_designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
