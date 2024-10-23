import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}


let idCities = async (req, res) => {
    try {

        console.log(req.params);

        let idQuery = req.params.id
        let all = await City.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}


let cityFilter = async (req, res, next) => {
    try {

        let { name } = req.query
        let query = {}

        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }

        let filter = await City.find(query)
        return res.status(200).json({
            response: filter
        })
    } catch (error) {
        next(error)
    }

}
export { allCities, cityFilter, idCities }