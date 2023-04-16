import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./home.css";
import Card from "../../components/Card/Card";

const Home = () => {
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
    <>
      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">
              total likes : <span>25</span>
            </p>
            <a href="#" className="inline-btn">
              view likes
            </a>
            <p className="likes">
              total comments : <span>12</span>
            </p>
            <a href="#" className="inline-btn">
              view comments
            </a>
            <p className="likes">
              saved playlists : <span>4</span>
            </p>
            <a href="#" className="inline-btn">
              view playlists
            </a>
          </div>

          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <a href="#">
                <i className="fas fa-code"></i>
                <span>development</span>
              </a>
              <a href="#">
                <i className="fas fa-chart-simple"></i>
                <span>business</span>
              </a>
              <a href="#">
                <i className="fas fa-pen"></i>
                <span>design</span>
              </a>
              <a href="#">
                <i className="fas fa-chart-line"></i>
                <span>marketing</span>
              </a>
              <a href="#">
                <i className="fas fa-music"></i>
                <span>music</span>
              </a>
              <a href="#">
                <i className="fas fa-camera"></i>
                <span>photography</span>
              </a>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span>software</span>
              </a>
              <a href="#">
                <i className="fas fa-vial"></i>
                <span>science</span>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <a href="#">
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </a>
              <a href="#">
                <i className="fab fa-css3"></i>
                <span>CSS</span>
              </a>
              <a href="#">
                <i className="fab fa-js"></i>
                <span>javascript</span>
              </a>
              <a href="#">
                <i className="fab fa-react"></i>
                <span>react</span>
              </a>
              <a href="#">
                <i className="fab fa-php"></i>
                <span>PHP</span>
              </a>
              <a href="#">
                <i className="fab fa-bootstrap"></i>
                <span>bootstrap</span>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a Author</h3>
            <p className="tutor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <a href="teachers.html" className="inline-btn">
              get started
            </a>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our Books</h1>

        <div className="box-container">
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>

        <div className="more-btn">
          <Link to="/books" className="inline-option-btn">
            view all Books
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
