const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// make api for getting all the posts
app.get("/post", (req, res) => {
  res.send("Hello World!");
});
// make api for posting posts
app.post("/post", (req, res) => {
  res.send("Hello World!");
});
// make api for deleting posts
app.delete("/post", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
