const SendResumeModal = () => {
  return (
    <div
      className="modal fade"
      id="sendresume"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="apply-now">
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-content">
                        <h2>Apply for Digital Marketing Lead</h2>
                        <form className="form">
                          <div className="row top-area">
                            <div className="col-sm-6">
                              <div className=" single-input d-flex align-items-center">
                                <div className="input-control">
                                  <input
                                    type="number"
                                    className="input-field"
                                    placeholder="Name"
                                    required
                                  />
                                  <label className="input-label">Name</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className=" single-input d-flex align-items-center">
                                <div className="input-control">
                                  <input
                                    type="number"
                                    className="input-field"
                                    placeholder="Mobile number"
                                    required
                                  />
                                  <label className="input-label">
                                    Mobile number
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className=" single-input d-flex align-items-center">
                                <div className="input-control">
                                  <input
                                    type="number"
                                    className="input-field"
                                    placeholder="Email Address"
                                    required
                                  />
                                  <label className="input-label">
                                    Email Address
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className=" single-input d-flex align-items-center">
                                <div className="input-control">
                                  <input
                                    type="number"
                                    className="input-field"
                                    placeholder="Linkedin Profile"
                                    required
                                  />
                                  <label className="input-label">
                                    Linkedin Profile
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="upload-req">
                            <label htmlFor="attach">
                              <span className="smr">Attach Resume</span>
                            </label>
                            <input type="file" id="attach" />
                            <span className="smr">
                              You can attach files of size up to 5 MB
                            </span>
                          </div>
                          <button className="cmn-btn">Get started</button>
                        </form>
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
  );
};

export default SendResumeModal;
