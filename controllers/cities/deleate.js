import City from "../../models/City.js";


let deleteCity = async (req, res, next) => {
    try {

        let deletecities = await City.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deletecities
        })
    } catch (error) {
        next(error)
    }

}


let deleteAllCities = async (req, res, next) => {
    try {

        let deletecities = await City.deleteMany({
            name: req.body.name
        })
        return res.status(200).json({
            response: deletecities
        })
    } catch (error) {
        next(error)
    }

}

export { deleteCity, deleteAllCities } 