const express = require("express");

const { productController } = require("../controllers");
const { getProductsById } = require("../controllers/productController");
const { getProductsByUserId } = require("../controllers/productController"); //
const { getProducts } = require("../controllers/productController");

const router = express.Router();

router.get("/all", productController.getAllProducts);
router.get("/sub_categories/:id", getProductsById);
router.get("/:productId", getProductsByUserId); //
router.get("/search", getProducts);

module.exports = router;
