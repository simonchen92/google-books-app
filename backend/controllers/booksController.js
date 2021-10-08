import GoogleBooks from "../models/bookModel.js";

const findAll = async (req, res) => {
  await GoogleBooks.find(req.query)
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
};

export { findAll };
