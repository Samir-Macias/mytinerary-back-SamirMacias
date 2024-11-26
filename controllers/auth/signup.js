import bcryptjs from 'bcryptjs';
import User from "../../models/User.js";
import generateToken from '../../middlewares/generateToken.js'; 

export default async (req, res, next) => {
    try {
        // Desestructuramos los datos de la solicitud
        const { email, password, firstName, lastName, country } = req.body;

        // Comprobamos si los campos necesarios están presentes
        if (!email || !password || !firstName || !lastName || !country) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verificamos si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Encriptamos la contraseña
        const hashedPassword = bcryptjs.hashSync(
            req.body.password,
            10
        );    

        // Creamos un nuevo usuario
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            photoUrl: req.body.photoUrl,
            country: req.body.country
        });

        // Guardamos el nuevo usuario en la base de datos
        await newUser.save();


        console.log(newUser);
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
        next(error); // Pasamos el error al siguiente middleware de manejo de errores
    }
};