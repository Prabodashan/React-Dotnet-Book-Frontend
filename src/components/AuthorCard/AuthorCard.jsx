import React from "react";
import "./authorcard.css";

const AuthorCard = () => {
  return (
    <div class="box">
      <div class="tutor">
        <img src="images/pic-2.jpg" alt="" />
        <div>
          <h3>john deo</h3>
          <span>developer</span>
        </div>
      </div>
      <p>
        total playlists : <span>4</span>
      </p>
      <p>
        total videos : <span>18</span>
      </p>
      <p>
        total likes : <span>1208</span>
      </p>
      <a href="teacher_profile.html" class="inline-btn">
        view profile
      </a>
    </div>
  );
};

export default AuthorCard;
