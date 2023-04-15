import React from "react";
import "./home.css";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <>
      <section class="home-grid">
        <h1 class="heading">quick options</h1>

        <div class="box-container">
          <div class="box">
            <h3 class="title">likes and comments</h3>
            <p class="likes">
              total likes : <span>25</span>
            </p>
            <a href="#" class="inline-btn">
              view likes
            </a>
            <p class="likes">
              total comments : <span>12</span>
            </p>
            <a href="#" class="inline-btn">
              view comments
            </a>
            <p class="likes">
              saved playlists : <span>4</span>
            </p>
            <a href="#" class="inline-btn">
              view playlists
            </a>
          </div>

          <div class="box">
            <h3 class="title">top categories</h3>
            <div class="flex">
              <a href="#">
                <i class="fas fa-code"></i>
                <span>development</span>
              </a>
              <a href="#">
                <i class="fas fa-chart-simple"></i>
                <span>business</span>
              </a>
              <a href="#">
                <i class="fas fa-pen"></i>
                <span>design</span>
              </a>
              <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>marketing</span>
              </a>
              <a href="#">
                <i class="fas fa-music"></i>
                <span>music</span>
              </a>
              <a href="#">
                <i class="fas fa-camera"></i>
                <span>photography</span>
              </a>
              <a href="#">
                <i class="fas fa-cog"></i>
                <span>software</span>
              </a>
              <a href="#">
                <i class="fas fa-vial"></i>
                <span>science</span>
              </a>
            </div>
          </div>

          <div class="box">
            <h3 class="title">popular topics</h3>
            <div class="flex">
              <a href="#">
                <i class="fab fa-html5"></i>
                <span>HTML</span>
              </a>
              <a href="#">
                <i class="fab fa-css3"></i>
                <span>CSS</span>
              </a>
              <a href="#">
                <i class="fab fa-js"></i>
                <span>javascript</span>
              </a>
              <a href="#">
                <i class="fab fa-react"></i>
                <span>react</span>
              </a>
              <a href="#">
                <i class="fab fa-php"></i>
                <span>PHP</span>
              </a>
              <a href="#">
                <i class="fab fa-bootstrap"></i>
                <span>bootstrap</span>
              </a>
            </div>
          </div>

          <div class="box">
            <h3 class="title">become a tutor</h3>
            <p class="tutor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <a href="teachers.html" class="inline-btn">
              get started
            </a>
          </div>
        </div>
      </section>

      <section class="courses">
        <h1 class="heading">our courses</h1>

        <div class="box-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div class="more-btn">
          <a href="#" class="inline-option-btn">
            view all Books
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;