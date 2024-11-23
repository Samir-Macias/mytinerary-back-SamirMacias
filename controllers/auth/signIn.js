import User from "../../models/User.js";

export default async(req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
      
        return res.status(200).json({
            success: true,
            message: "signed In",
            user:{
                email: req.user.email,
                name: req.user.name,
                phone: req.user.phone,
                address: req.address
            },
            token: req.token
        })
        
    } catch (error) {
      next(error)  
    }
}