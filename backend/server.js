import express from "express"
import dotenv from  "dotenv";
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import bookRoutes from './routes/bookRoutes.js'
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cors from 'cors'

dotenv.config();
connectDB();
const app = express();
app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// User routes
app.use("/api/users", userRoutes);

// Book routes
app.use("/api/books", bookRoutes);

// Error Handling middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
