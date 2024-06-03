const express=require("express");
const productRouter=express.Router();
const productController=require("../controller/ProductControler")



productRouter.post("/product", productController.createProduct);

productRouter.get("/product/:id", productController.getProduct);

productRouter.get("/products", productController.getProductList);


module.exports = productRouter;