import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import BookList from "../Books/BookList";

import googleBooks from "../utils/Api";

import "./HomePage.css";

const HomePage = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setBook(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    googleBooks(book).then((data) => {
      setResult(data.data.items);
    });
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div className="home-page-container">
      <h2 className="search-title">Search Book</h2>
      <div className="search-bar-container">
        <Form className="search-form" onSubmit={handleSubmit}>
          <Form.Group className="search-input-text" controlId="formBasicInput">
            <Form.Control
              type="text"
              placeholder="Search for your Book..."
              onChange={handleChange}
              autoComplete="off"
            />
          </Form.Group>
        </Form>
        <Button className="submit-btn" variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <div>
        {result.length ? (
          <BookList books={result} />
        ) : (
          <div>
            <h4>No Results To Display</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
