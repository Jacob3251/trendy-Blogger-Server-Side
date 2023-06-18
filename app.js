const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.get("/", (req, res) => {
  res.send("Route is working properly!");
});

module.exports = app;
