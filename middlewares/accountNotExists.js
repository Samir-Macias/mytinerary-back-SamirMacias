import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
     
        if (account) {            
            req.user = {
                firstname: account.firstName,
                lastname: account.lastName,
                email: account.email,
                password: account.password,
                photoUrl: account.photoUrl,
                country: account.country,
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

    } catch (error) {
        next(error)
    }
}


