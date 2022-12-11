const express = require("express");

const { postController } = require("../controllers");
const { getPosts } = require("../controllers/postController");
const { getProducts } = require("../controllers/postController");

const router = express.Router();

router.get("/all", postController.getAllPosts);
router.get("/products/:id", getPosts);
router.get("/product", getProducts);

module.exports = router;
