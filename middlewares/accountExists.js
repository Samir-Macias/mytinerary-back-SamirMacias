import User from "../models/User.js";



export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email });

        if (account) {
   
            return res.status(400).json({
                success: false,
                message: "Email already in use" // Cambié el mensaje de error aquí
            });
        }
        return next(); // Procedemos al siguiente middleware si no existe el usuario
        
    } catch (error) {
        next(error);
    }
}