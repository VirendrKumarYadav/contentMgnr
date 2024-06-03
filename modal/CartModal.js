const mongoose = require("mongoose")



const cardProduct = new mongoose.Schema({

    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number
    }



})

const cartSchema = new mongoose.Schema({

    products: {
        type: [cardProduct],
    },
    userID: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
    },
    // cartTotal: {
    //     type: Number,
    //     required: true,
    //     default: 0
    // },


})

const cartModal = mongoose.model("cart", cartSchema);
module.exports = cartModal;