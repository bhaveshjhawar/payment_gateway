const SendResume = () => {
  return (
    <section className="apply-now" id="apply-now">
      <div className="overlay pb-120">
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
                            required
                            type="number"
                            className="input-field"
                            placeholder="Name"
                          />
                          <label className="input-label">Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className=" single-input d-flex align-items-center">
                        <div className="input-control">
                          <input
                            required
                            type="number"
                            className="input-field"
                            placeholder="Mobile number"
                          />
                          <label className="input-label">Mobile number</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className=" single-input d-flex align-items-center">
                        <div className="input-control">
                          <input
                            required
                            type="number"
                            className="input-field"
                            placeholder="Email Address"
                          />
                          <label className="input-label">Email Address</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className=" single-input d-flex align-items-center">
                        <div className="input-control">
                          <input
                            required
                            type="number"
                            className="input-field"
                            placeholder="Linkedin Profile"
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
                    <input required type="file" id="attach" />
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
    </section>
  );
};

export default SendResume;
