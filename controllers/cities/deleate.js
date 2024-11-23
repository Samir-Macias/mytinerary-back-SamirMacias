import City from "../../models/City.js";


let deleteCity = async (req, res, next) => {
    try {
        const deleted = await City.deleteOne({ name: req.body.name });
        return res.status(200).json({
            success: true,
            message: "City deleted successfully",
            response: deleted,
        });
    } catch (error) {
        next(error)
    }

}


let deleteAllCities = async (req, res, next) => {
    try {
        const deleted = await City.deleteMany({ name: req.body.name });
        return res.status(200).json({
            success: true,
            message: "Cities deleted successfully",
            response: deleted,
        });
    } catch (error) {
        next(error)
    }

}

export { deleteCity, deleteAllCities } 