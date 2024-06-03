


const mongoose = require("mongoose");


const productSchema = {
  title: {
    type: String,
    required: true,
  },
  visitors: {
    type: String,
    required: true,
  },
  matric: {
    type: Number,
    required: true,
  },
  KPR_Matric: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
 
}

module.exports = mongoose.model("products", productSchema);