import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./books.css";

import Card from "./../../components/Card/Card";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/Books/get-all-books`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="books">
      <div className="heading">
        <h1>All Books</h1>

        <Link to="/addbook" className="inline-btn">
          Add Book
        </Link>
      </div>

      <form action="" method="post" className="search-tutor">
        <input
          type="text"
          name="search_box"
          placeholder="search Books..."
          required
          maxlength="100"
        />
        <button
          type="submit"
          className="fas fa-search"
          name="search_tutor"
        ></button>
      </form>

      <div className="box-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
