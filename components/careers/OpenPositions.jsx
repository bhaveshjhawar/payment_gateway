import Image from "next/image";
import Link from "next/link";
import clock_icon from "/public/img/clock-icon.png";

const OpenPositions = () => {
  return (
    <section className="open-positions" id="open-positions">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div className="title-area">
                <h2 className="text-uppercase">Open positions</h2>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-start justify-content-xl-end">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    all
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="design-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#design"
                    type="button"
                    role="tab"
                    aria-controls="design"
                    aria-selected="false"
                  >
                    design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="development-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#development"
                    type="button"
                    role="tab"
                    aria-controls="development"
                    aria-selected="false"
                  >
                    development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="business-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#business"
                    type="button"
                    role="tab"
                    aria-controls="business"
                    aria-selected="false"
                  >
                    business
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="all"
                role="tabpanel"
                aria-labelledby="all-tab"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Junior Frontend Developer</h5>
                      <p className="xlr">Experience: 6 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">April 7, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Technical Success Lead Consultant</h5>
                      <p className="xlr">Experience: 5 - 7 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">May 17, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Digital Marketing Lead</h5>
                      <p className="xlr">Experience: 6 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">February 15, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Fresh Graduates – DevOps Engineer</h5>
                      <p className="xlr">Experience: 7 - 8 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">June 12, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>UI/UX and Product Designer</h5>
                      <p className="xlr">Experience: 5 - 7 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">July 11, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Finance Analyst</h5>
                      <p className="xlr">Experience: 7 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">March 9, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="design"
                role="tabpanel"
                aria-labelledby="design-tab"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>UI/UX and Product Designer</h5>
                      <p className="xlr">Experience: 5 - 7 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">July 11, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="development"
                role="tabpanel"
                aria-labelledby="development-tab"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Junior Frontend Developer</h5>
                      <p className="xlr">Experience: 6 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">April 7, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Fresh Graduates – DevOps Engineer</h5>
                      <p className="xlr">Experience: 7 - 8 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">June 12, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="business"
                role="tabpanel"
                aria-labelledby="business-tab"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Technical Success Lead Consultant</h5>
                      <p className="xlr">Experience: 5 - 7 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">May 17, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Digital Marketing Lead</h5>
                      <p className="xlr">Experience: 6 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">February 15, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-item">
                      <h5>Finance Analyst</h5>
                      <p className="xlr">Experience: 7 - 9 Years</p>
                      <div className="bottom-area d-flex justify-content-between">
                        <div className="left-bottom d-flex align-items-center">
                          <span>
                            <Image src={clock_icon} alt="image" /> Full Time
                          </span>
                          <span className="date">March 9, 2021</span>
                        </div>
                        <div className="right-bottom">
                          <Link href="/open-positions">Explore more</Link>
                        </div>
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

export default OpenPositions;
