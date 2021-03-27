const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// Routes
const todoRouter = require("./routes/todos");

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

app.use("/todos", todoRouter);

// Set static if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
