import jwt from "jsonwebtoken"; 

export default (req, res, next) => { 
    
    let email 
    if (req.user != null && req.user != undefined ) {
      
        
        email = req.user.email
    }else{
        email= req.body.email
    }
    const token = jwt.sign( 
        { email: email },  
        process.env.SECRET,
        {expiresIn: 60*60*24} 
    )
    req.token = token
    return next( )
}