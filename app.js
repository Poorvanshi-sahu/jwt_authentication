require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const mainRouter = require("./routes/main");

// middleware
app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1", mainRouter);

app.use(notFound);

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Connected Database and Listening on port ${port}.....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
