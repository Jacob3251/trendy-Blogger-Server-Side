const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    author: {
      type: String,
    },
    content: {
      type: String,
      maxLength: 310,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
