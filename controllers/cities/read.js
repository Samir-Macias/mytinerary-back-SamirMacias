import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        const cities = await City.find();
        return res.status(200).json({
            success: true,
            message: "Cities retrieved successfully",
            response: cities,
        });
    } catch (error) {
        next(error)
    }

}


let idCities = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        return res.status(200).json({
            success: true,
            message: "City retrieved successfully",
            response: city,
        });
    } catch (error) {
        next(error)
    }

}


let cityFilter = async (req, res, next) => {
    try {
        const { name } = req.query;
        const query = name ? { name: { $regex: `^${name}`, $options: "i" } } : {};
        const cities = await City.find(query);
        return res.status(200).json({
            success: true,
            message: "Cities filtered successfully",
            response: cities,
        });
    } catch (error) {
        next(error)
    }

}
export { allCities, cityFilter, idCities }