import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="main pt-120 pb-120">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <div className="section-header text-center">
                        <h2 className="title">
                          Start sending money with Paylio today
                        </h2>
                        <p>
                          Send money over the world with the best and
                          transparent exchange rates without fees!.
                        </p>
                        <Link href="/register" className="cmn-btn">
                          Get your free account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
