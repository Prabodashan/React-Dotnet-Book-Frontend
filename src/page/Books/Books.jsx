import React from "react";
import "./books.css";

import Card from "./../../components/Card/Card";

const Books = () => {
  return (
    <section class="courses">
      <h1 class="heading">All Books</h1>

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
