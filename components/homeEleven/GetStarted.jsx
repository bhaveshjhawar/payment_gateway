import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="get-started-section index11">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">
                  The safest payment system in the world.{" "}
                </h2>
                <p>
                  Once in a lifetime experiences, exclusive tickets to global
                  sporting events, invites to unique tournaments with huge prize
                  pools, and luxury holidays around the world.
                </p>
                <Link href="/register-2" className="cmn-btn">
                  Start sending now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
