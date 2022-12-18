const express = require("express");

const { getAllProducts } = require("../controllers/productController");
const { getProductByMain } = require("../controllers/productController");
const { getProductByCategory } = require("../controllers/productController");
const { getProductsByUserId } = require("../controllers/productController"); //
const { getProductsByName } = require("../controllers/productController");

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/main_categories/:id", getProductByMain);
router.get("/sub_categories/:id", getProductByCategory);
router.get("/product/:id", getProductsByUserId);
router.get("/search", getProductsByName);

module.exports = router;

