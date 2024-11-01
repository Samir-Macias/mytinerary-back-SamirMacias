import City from "../../models/City.js";

let updateCities = async (req, res, next) => {
    try {
       
        let city = req.body
        await City.updateOne(
            { _id: city._id },
            { city: req.body.city }          
        )
        return res.status(200).json({ response: 'updated' })   
    } catch (error) {
        next(error)
    }

}


let updateManyCities = async (req, res, next) => {
    try {
       
        let city = req.body
        await City.updateMany(
            { _id: city._id },
            { city: req.body.city }          
        )
        return res.status(200).json({ response: 'updated all' })   
    } catch (error) {
        next(error)
    }

}

export {updateCities, updateManyCities}   