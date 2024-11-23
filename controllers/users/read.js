import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {

        let filter = {};

        if (req.query.name) {
            filter.name = req.query.name;
        }
        if (req.query.email) {
            filter.email = req.query.email;
        }
        if (req.query.address) {
            filter.address = req.query.address;
        }
        if (req.query.phone) {

            const phoneValue = Number(req.query.phone);
            if (!isNaN(phoneValue)) {
                filter.phone = { $gte: phoneValue };
            }
        }
        if (req.query.online) {

            filter.online = req.query.online === 'true';
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

export { allUsers, idUser }