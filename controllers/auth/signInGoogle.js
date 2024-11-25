import User from "../../models/User.js";


export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate( 
            { email: req.body.email || req.user.email },
            { online: true }
        )
        console.log("request de signInGoogle", req);

        return res.redirect('http://localhost:5173/home?token=' + req.token)


    } catch (error) {
        next(error)
    }
}