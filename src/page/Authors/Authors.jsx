import React from "react";
import "./authors.css";
import AuthorCard from "../../components/AuthorCard/AuthorCard";

const Authors = () => {
  return (
    <section class="authors">
      <h1 class="heading">All Authors</h1>

      <form action="" method="post" class="search-tutor">
        <input
          type="text"
          name="search_box"
          placeholder="search Authors..."
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
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </section>
  );
};

export default Authors;
