import User from "../../models/User.js";

export default async(req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.body.email || req.user.email},
            {online: true}
        )
        console.log(req);
      
        return res.status(200).json({
            success: true,
            message: "signed In",
            user:{
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                email: req.user.email,
                password: req.user.password,
                photoUrl: req.user.photoUrl,
                country: req.user.country
            },
            token: req.token
        })
        
    } catch (error) {
      next(error)  
    }
}