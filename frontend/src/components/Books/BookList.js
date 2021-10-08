import React from "react";

import './BookList.css'

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-header"></div>
            <div className="card-body">
            <img
              src={
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
              }
              alt="book"
            />
            <h5 className="card-title">{item.volumeInfo.title}</h5>
            <p className="card-description">Description: {item.volumeInfo.description}</p>
            <p>
              Author(s):{" "}
              {item.volumeInfo.authors && item.volumeInfo.authors.length > 1
                ? item.volumeInfo.authors.join(", ")
                : item.volumeInfo.authors}
            </p>
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-warning" style={{marginRight: "6px"}}>View Book</a>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
