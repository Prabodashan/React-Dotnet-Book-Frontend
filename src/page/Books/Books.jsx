import React from "react";
import "./books.css";

import Card from "./../../components/Card/Card";

const Books = () => {
  return (
    <section class="books">
      <h1 class="heading">All Books</h1>

      <form action="" method="post" class="search-tutor">
        <input
          type="text"
          name="search_box"
          placeholder="search Books..."
          required
          maxlength="100"
        />
        <button
          type="submit"
          class="fas fa-search"
          name="search_tutor"
        ></button>
      </form>

      <div class="box-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Books;
