
const express=require("express");
const router=express.Router();
const cartController=require("../controller/CartController")


router.get("/carts",cartController.getCart);
router.post("/cart",cartController.createCart);

module.exports = router;

