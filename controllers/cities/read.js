import City from "../../models/City.js";

let allCities =  async (req,res,next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }

}

export {allCities}