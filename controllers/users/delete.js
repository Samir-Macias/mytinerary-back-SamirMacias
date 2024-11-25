import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {

        let deleateUser = await User.deleteOne({
            email: req.body.email
        })
        return res.status(200).json({
            response: deleateUser
        })
    } catch (error) {
        next(error)
    }

}


let deleteAllUser = async (req, res, next) => {
    try {

        let deleateUser = await User.deleteMany({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleateUser
        })
    } catch (error) {
        next(error)
    }

}

export { deleteAllUser, deleteUser} 