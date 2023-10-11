import ReviewCard from "../card/ReviewCard";
import testimonials_user_4 from "/public/img/testimonials-user-4.png";
import testimonials_user_5 from "/public/img/testimonials-user-5.png";
import testimonials_user_6 from "/public/img/testimonials-user-6.png";
import testimonials_user_7 from "/public/img/testimonials-user-7.png";

const reviewsData = [
  {
    id: 1,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_4,
    rating: 5,
  },
  {
    id: 2,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_5,
    rating: 5,
  },
  {
    id: 3,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_6,
    rating: 5,
  },
  {
    id: 4,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_7,
    rating: 5,
  },
  {
    id: 5,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_4,
    rating: 5,
  },
  {
    id: 6,
    title: "Great service",
    desc: "Great service. Very professional and quick. Also way better rates than the bank or PayPal",
    user_name: "Aspen Press",
    user_designation: "Customer",
    avt: testimonials_user_5,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-index3 reviews">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                <h2 className="title">What Our Customers Say</h2>
                <p>
                  245m+ happy clients all around the world. Don’t just take our
                  word for it
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {reviewsData.map((itm) => (
              <div key={itm.id} className="col-lg-4 col-md-6">
                {/* Review Card */}
                <ReviewCard data={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
