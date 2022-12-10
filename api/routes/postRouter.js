const express = require("express");

const { postController } = require("../controllers");
const { getPosts } = require("../controllers/postController.js");

const router = express.Router();

router.get("/all", postController.getAllPosts);
router.get("/products/:id", getPosts);

module.exports = router;
