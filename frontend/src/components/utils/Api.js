import axios from "axios";

const googleBooks = (query) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

export default googleBooks;
