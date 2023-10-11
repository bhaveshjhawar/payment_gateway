import SendResumeModal from "./SendResumeModal";

const SendResume = () => {
  return (
    <section className="send-resume">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 d-flex">
              <div className="section-header text-center">
                <h2>
                  We are looking for passionate peopleto join us! Is that you?
                </h2>
                <p>
                  We’re all working together to open up the law for everyone,
                  making legal services easy and affordable.
                </p>
                <button
                  type="button"
                  className="cmn-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#sendresume"
                >
                  Send Resume
                </button>
                {/* Send Resume Modal */}
                <SendResumeModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendResume;
