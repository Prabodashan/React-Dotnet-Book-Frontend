import React from "react";
import Card from "../../components/Card/Card";

const AuthorProfile = () => {
  return (
    <>
      <section class="teacher-profile">
        <h1 class="heading">profile details</h1>

        <div class="details">
          <div class="tutor">
            <img src="images/pic-2.jpg" alt="" />
            <h3>john deo</h3>
            <span>Author</span>
          </div>
          <div class="flex">
            <p>
              total Books : <span>4</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <p>
              total comments : <span>52</span>
            </p>
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
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default AuthorProfile;
