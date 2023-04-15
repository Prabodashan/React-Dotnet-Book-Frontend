import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <header className="header">
      <section className="flex">
        <a href="#" className="logo">
          Cha Book
        </a>

        <form action="search.html" method="post" className="search-form">
          <input
            type="text"
            name="search_box"
            required
            placeholder="search courses..."
            maxlength="100"
          />
          <button type="submit" className="fas fa-search"></button>
        </form>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div id="toggle-btn" className="fas fa-sun"></div>
        </div>

        <div className="profile">
          <img src="images/pic-1.jpg" className="image" alt="" />
          <h3 className="name">Prabod</h3>
          <p className="role">admin</p>
          <a href="#" className="btn">
            view profile
          </a>
          <div className="flex-btn">
            <a href="#" className="option-btn">
              login
            </a>
            <a href="#" className="option-btn">
              register
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
