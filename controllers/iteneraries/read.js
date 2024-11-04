import Itenerary from "../../models/Itenerary.js"

let allIteneraries = async (req, res, next) => {
    try {
        let all = await Itenerary.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}


let idIteneraries = async (req, res) => {
    try {
        console.log(req.params);

        let idQuery = req.params.id
        let all = await Itenerary.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}


let iteneraryFilter = async (req, res, next) => {
    try {

        let { name } = req.query
        let query = {}

        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }

        let filter = await Itenerary.find(query)
        return res.status(200).json({
            response: filter
        })
    } catch (error) {
        next(error)
    }

}
export { allIteneraries, idIteneraries, iteneraryFilter }