import Itenerary from "../../models/Itenerary.js"

let create = async (req, res, next) => {
    try {
        let itenerary = req.body
        let all = await Itenerary.create(itenerary)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { create }