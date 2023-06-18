const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.addPost = async (req, res) => {
  try {
    const { email, content } = req.body;
    // const user = await User.findOne({ email });

    // if (!user) {
    //   return res.status(404).json({ message: "User not found!" });
    // }

    const post = new Post({
      author: email,
      content,
    });

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { content },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete({ _id: id });

    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
