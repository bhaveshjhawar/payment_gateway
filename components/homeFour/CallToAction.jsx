import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action-inner index4">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-area">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h3>Ready to make the leap? Let us help you.</h3>
                    <Link href="/register-2" className="cmn-btn create">
                      Create Account Now
                    </Link>
                    <Link href="/contact" className="cmn-btn get">
                      Get in touch
                    </Link>
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
