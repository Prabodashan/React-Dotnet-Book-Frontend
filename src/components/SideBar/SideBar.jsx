import React from "react";
import "./sidebar.css";

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
        <a href="#">
          <i className="fas fa-home"></i>
          <span>home</span>
        </a>
        <a href="#">
          <i className="fas fa-question"></i>
          <span>about</span>
        </a>
        <a href="#">
          <i className="fas fa-graduation-cap"></i>
          <span>courses</span>
        </a>
        <a href="#">
          <i className="fas fa-chalkboard-user"></i>
          <span>teachers</span>
        </a>
        <a href="#">
          <i className="fas fa-headset"></i>
          <span>contact us</span>
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
