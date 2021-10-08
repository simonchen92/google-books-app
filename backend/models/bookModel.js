import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    authors: [
      {
        type: String,
        require: true,
      },
    ],
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

export default GoogleBooks;
