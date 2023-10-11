import Image from "next/image";
import Link from "next/link";
import icon_left from "/public/img/icon-left.png";
import icon_right from "/public/img/icon-right.png";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" href="#" aria-label="Previous">
            <Image src={icon_left} alt="icon" />
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link active" href="#">
            <h5>1</h5>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <h5>2</h5>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <h5>3</h5>
          </Link>
        </li>
        <li className="page-dots">...</li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <h5>7</h5>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <h5>8</h5>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <h5>9</h5>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#" aria-label="Next">
            <Image src={icon_right} alt="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
