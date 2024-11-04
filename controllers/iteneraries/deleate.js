import Itenerary from "../../models/Itenerary.js";

let deleteItenerary = async (req, res, next) => {
    try {

        let deleteIteneraries = await Itenerary.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteIteneraries
        })
    } catch (error) {
        next(error)
    }

}


let deleteAllIteneary = async (req, res, next) => {
    try {

        let deleteIteneraries = await Itenerary.deleteMany({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteIteneraries
        })
    } catch (error) {
        next(error)
    }

}

export { deleteItenerary, deleteAllIteneary }
