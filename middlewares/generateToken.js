import jwt from 'jsonwebtoken'

const generateToken = (user) => {
    if (!user || !user.email) {
        throw new Error('Email is required to generate a token');
    }

    return jwt.sign(
        { email: user.email },  
        process.env.SECRET,    
        { expiresIn: 60 * 60 * 24 } 
    );
};

export default generateToken;