import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div class="box">
      <div class="tutor">
        <img src="images/pic-2.jpg" alt="" />
        <div class="info">
          <h3>Prabod Ashan</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div class="thumb">
        <img src="images/thumb-1.png" alt="" />
        <span>10 Liked</span>
      </div>
      <h3 class="title">complete HTML tutorial</h3>
      <a href="#" class="inline-btn">
        view Books
      </a>
    </div>
  );
};

export default Card;
