import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {

        let filter = {};

        if (req.query.firstName) {
            filter.name = req.query.firstName;
        }
        if (req.query.email) {
            filter.email = req.query.email;
        }
        if (req.query.lastName) {
            filter.address = req.query.lastName;
        }

        let all = await User.find(filter);

        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let idUser = async (req, res) => {
    try {
        console.log(req.params);

        let idQuery = req.params.id
        let all = await User.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}

let userValidate = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            response: req.user
        });
    } catch (error) {
        next(error);
    }
};

export { allUsers, idUser, userValidate }