import React from "react";
import "./card.css";

const Card = ({ book }) => {
  return (
    <div class="box">
      <div class="tutor">
        <img src="images/pic-2.jpg" alt="" />
        <div class="info">
          <h3>{book.publisher}</h3>
          <span>{book.dateAdded}</span>
        </div>
      </div>
      <div class="thumb">
        <img src={book.coverUrl} alt="" />
        <span>10 Liked</span>
      </div>
      <h3 class="title">{book.title}</h3>
      <a href={`/singlebook/${book.id}`} class="inline-btn">
        view Book
      </a>
    </div>
  );
};

export default Card;
