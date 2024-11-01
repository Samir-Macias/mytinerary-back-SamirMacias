import City from "../../models/City.js";

let updateCities = async (req, res, next) => {
    try {

        let city = req.body
        let upd = await City.updateOne(
            { _id: city._id },
            { price: city.price, rating: city.rating, weather: city.weather }
        )
        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }

}


let updateManyCities = async (req, res, next) => {
    try {

        let city = req.body
        let updAll = await City.updateMany(
            { rating: city.rating },
            { price: city.price, rating: city.rating, weather: city.weather }
        )
        return res.status(200).json({
            response: updAll
        })

    } catch (error) {
        next(error)
    }

}

export { updateCities, updateManyCities }   