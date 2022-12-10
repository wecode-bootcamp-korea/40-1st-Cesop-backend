const { postService } = require("../services");
const { catchAsync } = require("../utils/error");

const getAllPosts = catchAsync(async (req, res) => {
  const posts = await postService.getAllPosts();

  res.status(200).json({ data: posts });
});

const getPosts = catchAsync(async (req, res) => {
  const id = req.params.id;
  const posts = await postService.getPostsByUser(id);
  return res.status(200).json(posts);
});

module.exports = {
  getAllPosts,
  getPosts
};
