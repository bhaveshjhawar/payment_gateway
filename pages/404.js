import Image from "next/image";
import Link from "next/link";
import error_404_illu from "/public/img/error-404-illu.png";

export default function Error() {
  return (
    <section className="error-404">
      <div className="overlay pb-120 pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <Image src={error_404_illu} alt="image" />
              <div className="section-header text-center">
                <h2 className="title">Oops! Page not found</h2>
                <p>
                  The page you are looking for doesn&#39;t exist or has been
                  moved.
                </p>
                <Link href="/" className="cmn-btn">
                  Go home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Error.getLayout = function getLayout(page) {
  return <>{page}</>;
};
