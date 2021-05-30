import React from "react";
import HeaderNav from "../header-nav";

const MobileNav = () => {
    return (
        <nav className="mobile-nav header-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <HeaderNav style={{display: `none`}} />
            </div>
          </div>
        </div>
      </nav>
    );
};

export default MobileNav;
