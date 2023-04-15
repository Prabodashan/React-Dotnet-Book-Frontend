import React from "react";
import "./singlebook.css";

const SingleBook = () => {
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
            <img src="images/pic-2.jpg" alt="" />
            <div>
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>

          <div class="details">
            <h3>complete HTML tutorial</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              minus reiciendis, error sunt veritatis exercitationem deserunt
              velit doloribus itaque voluptate.
            </p>
            <a href="teacher_profile.html" class="inline-btn">
              view profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
