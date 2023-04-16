import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addbook.css";
import axios from "axios";

const AddBook = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    genre: "",
    coverUrl: "",
    publisherId: "",
    authorIds: [1, 2],
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      const res = await axios.post("/Books/add-book", inputs);
      navigate("/books");
    } catch (err) {
      console.log(err);
      //   setError(err.response.data);
    }
  };

  return (
    <section className="form-container">
      <form action="">
        <h3>Add New Book</h3>
        <p>
          Book Title <span>*</span>
        </p>
        <input
          type="text"
          name="title"
          placeholder="enter book name"
          required
          className="box"
          onChange={handleChange}
        />
        <p>
          Book Description <span>*</span>
        </p>
        <input
          type="text"
          name="description"
          placeholder="enter book description"
          required
          className="box"
          onChange={handleChange}
        />
        <p>
          Genre <span>*</span>
        </p>
        <input
          type="text"
          name="genre"
          placeholder="enter book genre"
          required
          className="box"
          onChange={handleChange}
        />
        <p>
          Cover Url <span>*</span>
        </p>
        <input
          type="text"
          name="coverUrl"
          placeholder="enter cover Url"
          required
          className="box"
          onChange={handleChange}
        />
        <p>
          Publisher Id <span>*</span>
        </p>
        <input
          type="number"
          name="publisherId"
          placeholder="enter publisher id"
          required
          className="box"
          onChange={handleChange}
        />
        <p>
          Author Id <span>*</span>
        </p>
        <input
          type="number"
          name="authorIds"
          placeholder="enter author Id"
          required
          className="box"
          //   onChange={handleChange}
        />

        {/* <p>
          select profile <span>*</span>
        </p>
        <input type="file" accept="image/*" required className="box" /> */}
        <input
          type="button"
          value="Add Book"
          name="submit"
          className="btn"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};

export default AddBook;
