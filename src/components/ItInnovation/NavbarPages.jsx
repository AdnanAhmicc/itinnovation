import { useEffect, useRef } from 'react';
import Link from 'next/link';
import navbarScrollEffect from "@common/navbarScrollEffect";

const NavbarPages = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient" ref={navbarRef}>
      <div className="container content">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <img src="/assets/images/logo2.svg" alt="" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">
                  STARTSIDA
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" legacyBehavior>
                <a className="nav-link">
                  OM OSS
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#services" legacyBehavior>
                <a className="nav-link">
                  TJÄNSTER
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" legacyBehavior>
                <a className="nav-link">
                  KONTAKT CENTER
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <Link href="#" legacyBehavior>
                <a className="me-4">
                  <div className="box">EN</div>
                </a>
              </Link>
              <Link href="#0" legacyBehavior>
                <a className="me-4">
                  <div className="box">SE</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarPages;