const express = require("express");
const Product = require("../Schema/product.model.js");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");
const router = express.Router();


router.get('/api/products', getProducts);
router.get("/api/products/:id", getProduct);

router.post("/api/products", createProduct);

// update a product
router.put("/api/products/:id", updateProduct);

// delete a product
router.delete("/api/products/:id", deleteProduct);


module.exports = router;