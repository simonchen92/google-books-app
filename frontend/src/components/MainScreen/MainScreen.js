import React from "react";
import { Container, Row } from "react-bootstrap";
import './MainScreen.css'

const MainScreen = ({ children, title }) => {
  return (
    <div className="main-page-container">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <div>
                <h1 className="heading">{title}</h1>
                <hr />
              </div>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
