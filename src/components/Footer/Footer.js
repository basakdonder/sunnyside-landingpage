import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import insta from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import facebook from "../../images/icon-facebook.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} alt="sunnyside" />
      <nav>
        <ul>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <Link to="">
          <img src={facebook} />
        </Link>
        <Link to="">
          <img src={insta} />
        </Link>
        <Link to="">
          <img src={twitter} />
        </Link>
        <Link to="">
          <img src={pinterest} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
