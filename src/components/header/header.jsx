import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!document || !document.body) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = null
    }
  }, [isOpen]);

  return (
    <div id="header" 
      className={`header-main`}
      role="navigation"
      aria-label="main navigation">
      <div className={`header-content container clearfix`}>
        <div className="navbar-brand">
          <div className="logo">
            <NavLink
                className="navbar-item"
                to="/"
                exact
              >
                {/* <img src={require('../images/logo.png')} alt="cốc cốc" /> */}
            </NavLink>
          </div>
          <div
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={`nav-header ${isOpen && "is-active"}`}>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            exact
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/about"
            onClick={() => setOpen(false)}
          >
            about
          </NavLink>

          
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
