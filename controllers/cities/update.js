import City from "../../models/City.js";

let updateCities = async (req, res, next) => {
    try {
        const updated = await City.updateOne(
            { _id: req.body._id },
            { price: req.body.price, rating: req.body.rating, weather: req.body.weather }
        );
        return res.status(200).json({
            success: true,
            message: "City updated successfully",
            response: updated,
        });

    } catch (error) {
        next(error)
    }

}


let updateManyCities = async (req, res, next) => {


    try {
        const updated = await City.updateMany(
            { rating: req.body.rating },
            { price: req.body.price, rating: req.body.rating, weather: req.body.weather }
        );
        return res.status(200).json({
            success: true,
            message: "Cities updated successfully",
            response: updated,
        });

    } catch (error) {
        next(error)
    }

}

export { updateCities, updateManyCities }   