import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
     
        if (account) {
            req.user = account; // Pasa el objeto completo del usuario
            return next();
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

    } catch (error) {
        next(error)
    }
}


