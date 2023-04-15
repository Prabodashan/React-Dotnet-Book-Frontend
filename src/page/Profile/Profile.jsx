import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <section class="user-profile">
      <h1 class="heading">your profile</h1>

      <div class="info">
        <div class="user">
          <img src="images/pic-1.jpg" alt="" />
          <h3>Prabod Ashan</h3>
          <p>Admin</p>
          <a href="update.html" class="inline-btn">
            update profile
          </a>
        </div>

        <div class="box-container">
          <div class="box">
            <div class="flex">
              <i class="fas fa-bookmark"></i>
              <div>
                <span>4</span>
                <p>Books</p>
              </div>
            </div>
            <a href="#" class="inline-btn">
              View Books
            </a>
          </div>

          <div class="box">
            <div class="flex">
              <i class="fas fa-heart"></i>
              <div>
                <span>33</span>
                <p>Books Liked</p>
              </div>
            </div>
            <a href="#" class="inline-btn">
              view Liked
            </a>
          </div>

          <div class="box">
            <div class="flex">
              <i class="fas fa-comment"></i>
              <div>
                <span>12</span>
                <p>Books Comments</p>
              </div>
            </div>
            <a href="#" class="inline-btn">
              View Comments
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Profile;
