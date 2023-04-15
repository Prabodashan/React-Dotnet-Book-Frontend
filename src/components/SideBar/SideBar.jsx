import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>

      <div className="profile">
        <img src="images/pic-1.jpg" className="image" alt="" />
        <h3 className="name">Prabod</h3>
        <p className="role">Admin</p>
        <a href="#" className="btn">
          view profile
        </a>
      </div>

      <nav className="navbar">
        <Link to="/">
          <i className="fas fa-home"></i>
          <span>home</span>
        </Link>
        <Link to="/books">
          <i className="fas fa-question"></i>
          <span>All Books</span>
        </Link>
        <Link to="/authors">
          <i className="fas fa-chalkboard-user"></i>
          <span>All Authors</span>
        </Link>
        <Link to="/contactus">
          <i className="fas fa-headset"></i>
          <span>Contact Us</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
