import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Select from "../common/Select";
import { navData } from "./navData";
import lang from "/public/img/lang.png";
import logo from "/public/img/logo.png";

const langSelector = [
  { id: 1, name: "EN", icon:"/img/lang.png" },
  { id: 2, name: "BN", icon:"/img/lang.png" },
  { id: 3, name: "ES", icon:"/img/lang.png" },
  { id: 4, name: "NL", icon:"/img/lang.png" },
];

const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const menus = useRef();

  const hidenMenu = () => {
    menus.current.classList.remove("show");
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section ${
        windowHeight > 50 && "animated fadeInDown header-fixed"
      } `}
    >
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar d-flex navbar-expand-lg navbar-dark">
              <Link className="navbar-brand" href="/">
                <Image src={logo} className="logo" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
                ref={menus}
              >
                <ul className="navbar-nav">
                  {navData.map(
                    ({ itm, url, id, dropdown, dropdown_itms, mega_menu }) => {
                      return !dropdown ? (
                        <li className="nav-item" key={id}>
                          <Link
                            className="nav-link"
                            href={url}
                            onClick={hidenMenu}
                          >
                            {itm}
                          </Link>
                        </li>
                      ) : (
                        <li className="nav-item dropdown" key={id}>
                          <Link
                            className="nav-link dropdown-toggle"
                            href={url}
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            {itm}
                          </Link>
                          {mega_menu ? (
                            <div className="dropdown-menu show mega-menu">
                              <ul className="dropdown">
                                {dropdown_itms?.map(({ id, dp_itm, url }) => (
                                  <li key={id}>
                                    <Link
                                      className="nav-item"
                                      href={url}
                                      onClick={hidenMenu}
                                    >
                                      {dp_itm}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <ul className="dropdown-menu">
                              {dropdown_itms?.map(({ id, dp_itm, url }) => (
                                <li key={id}>
                                  <Link
                                    className="nav-item"
                                    href={url}
                                    onClick={hidenMenu}
                                  >
                                    {dp_itm}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="right-area header-action d-flex align-items-center">
                  <div className="lang d-flex align-items-center">
                  {/* <Image src={lang} alt="icon" /> */}
                    {/* Select */}
                    <Select data={langSelector} />
                  </div>
                  <Link href="/login" className="cmn-btn login">
                    Login
                  </Link>
                  <Link href="/register" className="cmn-btn">
                    Sign up
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;