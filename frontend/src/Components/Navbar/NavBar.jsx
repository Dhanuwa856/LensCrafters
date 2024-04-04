import React, { useState } from "react";
import "./Navbar.css";
import Open_icon from "../../assets/open-icon.svg";
import Close_icon from "../../assets/close-icon.svg";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMobileMenuOpen() {
    setMenuActive(!menuActive);
  }

  return (
    <nav className="nav-bar">
      <div className="nav-content container mx-auto">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link">
            <span>
              <i class="fa-solid fa-qrcode"></i>
            </span>
            <h2>LensCrafters</h2>
          </Link>
        </div>
        <div className="nav-menu">
          <ul className={menuActive ? "nav-menu0" : ""}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/tips">Photography Tips</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <div
            className={`open-icon ${menuActive ? "nav-icon-non-visible" : ""}`}
            onClick={toggleMobileMenuOpen}
          >
            <img src={Open_icon} alt="" />
          </div>
          <div
            className={`colse-icon ${
              menuActive ? "nav-icon-visible" : "nav-icon-non-visible"
            }`}
            onClick={toggleMobileMenuOpen}
          >
            <img src={Close_icon} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
