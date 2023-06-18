const express = require("express");
const { addPost, updatePost, deletePost } = require("./postControllers");

const router = express.Router();

// router.get("/:id", getPost);
router.post("/add", addPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;
