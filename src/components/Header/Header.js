import React, { Component } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import arrowicon from "../../images/icon-arrow-down.svg";

export default class Header extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="header">
        <nav>
          <Link to="/">
            <img src={logo} alt="sunnyside" />
          </Link>

          <ul className={this.state.clicked ? "nav-links active" : "nav-links"}>
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
            <li>
              <Link to="/contact" className="nav-link">
                <button className="btn">Contact</button>
              </Link>
            </li>
          </ul>

          <div className="hamburger-menu" onClick={this.handleClick}>
            <i
              className={
                this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </nav>
        <div className="container">
          <h1>we are creatives</h1>
          <img src={arrowicon} alt="" />
        </div>
      </div>
    );
  }
}
