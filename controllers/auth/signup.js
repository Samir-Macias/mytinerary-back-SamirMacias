import bcryptjs from 'bcryptjs'
import User from '../../models/User.js'
import generateToken from '../../middlewares/generateToken.js'

export default async (req, res, next) => {
    try {
        // Desestructuramos los datos de la solicitud
        const { email, password, firstName, lastName, country, photoUrl  } = req.body;

        // Comprobamos si los campos necesarios están presentes
        if (!email || !password || !firstName || !lastName || !country || !photoUrl) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verificamos si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email already exists' });
        }

    
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Creamos el nuevo usuario
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            photoUrl,
            country,
            online: false
        });

        // Guardamos el usuario en la base de datos
        await newUser.save();

        // Generamos un token para el nuevo usuario
        const token = generateToken(newUser);

        // Enviamos la respuesta con los datos del usuario y el token
        return res.status(201).json({
            success: true,
            message: 'User successfully created',
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                country: newUser.country
            },
            token: token 
        });
    } catch (error) {
        console.error(error);
        next(error); // Pasamos el error al middleware de manejo de errores
    }
};