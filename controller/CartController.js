const CartModal = require("../modal/CartModal")
const ProductModal = require("../modal/ProductModal")

//---------------------POST -----------------------------
const createCart = async (req, res) => {
    try {
    console.log(req.body);
    console.log(req.body.products[0].productID);
        const newCart = new CartModal({
            products: [
                { productID: req.body.products[0].productID,
                    quantity:req.body.products[0].quantity,
                    price:req.body.products[0].price,
                 }
            ],
            userID:req.body.userID,

        } );
        const newlyCartCreated = await newCart.save();


        res.json({
            sucess: true,
            massage: "Cart is created Sucessfully",
            craetedCartID: newlyCartCreated._id
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Something went wrong," + `::` + err.message,
        });
    }
};

//----------------------GET -----------------------------
const getCart = async (req, res) => {
    try {

        const Carts = await CartModal.find();

        res.json({
            Carts
        });
        console.log(Jobs);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports = {
    createCart,
    getCart
}