import Link from "next/link";

const GrowingTeam = () => {
  return (
    <section className="growing-team pb-120">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="section text-center">
                <h3>Join the growing team</h3>
                <Link href="/careers" className="cmn-btn">
                  Browse job openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingTeam;
