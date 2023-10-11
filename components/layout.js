import FooterTwo from "./footer/FooterTwo";
import NavBar from "./navBar/NavBar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      <NavBar />

      {children}

      <FooterTwo />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
