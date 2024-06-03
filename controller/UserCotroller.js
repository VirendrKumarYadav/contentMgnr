const userModal = require("../modal/userModal");
const UserModal = require("../modal/userModal")



const userRegistration = async (req, res) => {
    try {

        const newUser = new UserModal(req.body)
        const details = await newUser.save();

        res.json({
            massage: "User Creates Sucessfully!",
            sucess: true
        }
        )
    } catch (error) {
        res.status(404).json({
            massage: "unable to create user!",
            sucess: false
        })
    }
}


const loginUser = async (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userDetails = await userModal({
            $or: [
                {
                    username: username
                }, {
                    email: email
                }
            ]
        })
        if (!userDetails) {
            res.status(404).json({
                success: true,
                massage: "Username is incorrect!",

            });
        }
        if (userDetails.password === password) {
            res.json({
                massage: "Login Sucessfully!",
                sucess: true
            }
            )
        }

    } catch (error) {
        res.status(404).json({
            massage: "unable to login user!",
            sucess: false
        })
    }
}

module.exports = {
    userRegistration,
    loginUser
}