import User from "../../models/User.js";

let updateUser = async (req, res, next) => {
    try {

        let user = req.body
        let upd = await User.updateOne(
            { name: user.name },
            { name: user.name, email: user.email, address: user.address, phone: user.phone }
        )
        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }

}


let updateManyUsers = async (req, res, next) => {
    try {

        let user = req.body
        let updAll = await User.updateMany(
            { name: user.name },
            { name: user.name, email: user.email, address: user.address, phone: user.phone }
        )
        return res.status(200).json({
            response: updAll
        })

    } catch (error) {
        next(error)
    }

}


export {updateManyUsers, updateUser }