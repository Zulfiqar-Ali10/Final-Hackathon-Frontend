import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className="header">
        <div className="containers">
          <a href="/" className="logo">
            Finanza
          </a>

          <button className="menu-toggle" onClick={toggleMenu}>
            <FaAlignJustify className="fas fa-bars" />
          </button>

          <nav
            className={`nav-menu ${menuActive ? "active" : ""}`}
            id="navMenu"
          >
            <Link to="/" className="active">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <div className="dropdown">
              <Link to="#">
                Pages{" "}
                <i
                  className="fas fa-chevron-down"
                  style={{ fontSize: "0.8em", marginLeft: "4px" }}
                ></i>
              </Link>
              <div className="dropdown-content">
                <a href="/projects">Projects</a>
                <a href="/features">Features</a>
                <a href="/team">Team Member</a>
                <a href="/testimonial">Testimonial</a>
                <a href="/404">404 Page</a>
              </div>
            </div>
            <Link to="/contact">Contact</Link>

            <div className="social-links">
              <a href="#">
                <FaFacebookF className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <FaTwitter className="fab fa-twitter" />
              </a>
              <a href="#">
                <FaLinkedinIn className="fab fa-linkedin-in" />
              </a>
            </div>
              <Link className="signUp" to="/signup" >Login</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
