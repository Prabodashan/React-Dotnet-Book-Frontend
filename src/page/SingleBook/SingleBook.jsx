import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./singlebook.css";

const SingleBook = () => {
  const [book, setBook] = useState({});

  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/Books/get-book-by-id/${bookId}`);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [bookId]);

  console.log(book);

  return (
    <section class="playlist-details">
      <h1 class="heading">Book details</h1>

      <div class="row">
        <div class="column">
          <form action="" method="post" class="save-playlist">
            <button type="submit">
              <i class="far fa-bookmark"></i> <span>save Book</span>
            </button>
          </form>

          <div class="thumb">
            <img src="images/thumb-1.png" alt="" />
          </div>
        </div>
        <div class="column">
          <div class="tutor">
            <img src={book.coverUrl} alt="book link" />
            <div>
              <h3>{book.publisherName}</h3>
              <span>{book.genre}</span>
            </div>
          </div>

          <div class="details">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <Link to="/" class="inline-btn">
              view profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
