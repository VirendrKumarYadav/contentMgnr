const productModal = require("../modal/ProductModal")


const createProduct = async (req, res) => {
    try {
        const productid = req.body.productID
        const quantity = req.body.quantity
        const matric = req.body.metric
        const KPR_Matric = req.body.KPR_Matric
        const location = req.body.location
        if (true) {
            const productID = new productModal(
                req.body
            )
            await productID.save();


            res.json({
                sucess: true,
                massage: "Product Ctrated Sucessfully!",
                ProductID: productID._id
            })
        }
    } catch (err) {
        console.log(err.massage);
    }
}

const getProduct = async (req, res) => {

    try {

        if (true) {
            const productDetails = await productModal.findOne(
                {
                    _id: {
                        $eq: req.params.id,
                    },
                }
            )
            console.log(productDetails);

            if (productDetails == true) {

                res.json({
                    data: productDetails,
                    sucess: true,
                    massage: req.params.id
                })
            } else {

                res.status(404).json({

                    sucess: false,
                    massage: "Product Id is wrong, Please enter the correct one!"
                })
            }
        }
    } catch (err) {
        res.json({
            sucess: false,
            massage: "Product Id is wrong, Please enter the correct one!"
        })

    }

}
const getProductList = async (req, res) => {

    const productList = await productModal.find();
    try {

        if (true) {
            res.json(productList)
        }
    } catch (err) {
        res.json({
            sucess: false,
            massage: err.massage
        })

    }

}

module.exports = {
    createProduct,
    getProduct,
    getProductList
}