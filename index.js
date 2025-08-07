const express = require("express");
const connectDB = require("./db/db");
const userRouter = require("./Routes/user.routes");
const notesRouter = require("./Routes/notes.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config(); 

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://notes-web-fe.vercel.app"],
  credentials: true,
}));


app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/notes", notesRouter);

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set in .env

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
