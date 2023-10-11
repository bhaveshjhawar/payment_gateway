import Link from "next/link";

const NeedToContact = () => {
  return (
    <section className="need-to-contact">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">Need to Contact Us?</h2>
                <p>Our customer service hours 10:00 a.m. EST - 8 p.m. EST</p>
                <Link href="/contact" className="cmn-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedToContact;
