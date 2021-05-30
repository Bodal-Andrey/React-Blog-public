import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const.js";
import HeaderNav from "../header-nav";

const Header = () => {
  return (
    <header className="navbar-fixed-top">
      <div className="container">
        <div className="row">
          {/* HEADER TOP */}
          <div className="col-lg-12">
            <div className="header-top">
              <div className="header-top-logo">
                <Link to={AppRoute.ROOT} href="index.html" title="Logo">
                  <img src="img/logo.png" alt="Dblog Logo" />
                </Link>
              </div>
              <nav className="header-top-nav">
                <ul>
                  <li className="header-top-nav-search">
                    <a href="#" className="light-link" title="Search"><i className="pe-7s-search" /></a>
                    <form action="#" method="get">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <button type="submit"><i className="pe-7s-search" /></button>
                    </form>
                  </li>
                  <li>
                    <a href="#" className="light-link" title="Menu">
                      <div id="menu-animate-icon" className="header-top-nav-menu-icon">
                        <span />
                        <span />
                        <span />
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* end HEADER TOP */}
          <div className="col-lg-12">
            <HeaderNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
