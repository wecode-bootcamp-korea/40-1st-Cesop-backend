const express = require("express");

const { itemController } = require("../controllers");
const { getItems } = require("../controllers/itemController");
const { getProducts } = require("../controllers/itemController");

const router = express.Router();

router.get("/all", itemController.getAllItems);
router.get("/products/:id", getItems);
router.get("/product", getProducts);

module.exports = router;
