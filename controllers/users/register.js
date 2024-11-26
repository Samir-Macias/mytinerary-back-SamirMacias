import { token } from "morgan";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = false      

        let all = await User.create(user)
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            response: all,

            token: req.token
        })
    } catch (error) {
        next(error); 
    }
};

export default register