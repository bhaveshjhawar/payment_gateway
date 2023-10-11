const SearchItm = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="top-area">
          <h2 className="text-uppercase">
            Send money to 200+ countries and territories
          </h2>
          <p>Your first two transfers are fee-free</p>
          <form action="#">
            <div className="where-to d-flex">
              <input type="email" placeholder="Where to" required />
              <button className="cmn-btn">
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchItm;
