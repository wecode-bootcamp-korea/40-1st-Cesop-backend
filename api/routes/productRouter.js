const express = require("express");

const { productController } = require("../controllers");
const { getProductsById } = require("../controllers/productController");
const { getProducts } = require("../controllers/productController");

const router = express.Router();

router.get("/all", productController.getAllProducts);
router.get("/products/:id", getProductsById);
router.get("/product", getProducts);

module.exports = router;


