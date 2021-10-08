import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import "./LandingPage.css";

const LandingPage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  return (
    <div className="landing-page-container">
      <Container>
        <Row>
          <div className="landing-page-text">
            <h1>Welcome to Google Books.</h1>
            <p>Where you can find all your favorite books</p>
          </div>
          <div className="buttonContainer">
            <Link to="/login">
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
