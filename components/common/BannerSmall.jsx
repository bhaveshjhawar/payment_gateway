const BannerSmall = ({ title, children, cls = "pb-120" }) => {
  return (
    <div className="overlay">
      <div className={`banner-content ${cls}`}>
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-7 col-md-10"> */}
            <div className="col-lg-9 col-md-10">
              <div className="main-content">
                <h1>{title}</h1>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
