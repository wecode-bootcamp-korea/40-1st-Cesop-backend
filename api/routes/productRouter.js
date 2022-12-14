const express = require("express");

const { productController } = require("../controllers");
const { getProductById } = require("../controllers/productController");
const { getProductsByUserId } = require("../controllers/productController"); //
const { getProducts } = require("../controllers/productController");

const router = express.Router();

router.get("/all", productController.getAllProducts);
router.get("/:productId", getProductById); //
router.get("/sub_categories_id/:id", getProductById);
router.get("/:productId", getProductsByUserId); //
router.get("/search", getProducts);

module.exports = router;
