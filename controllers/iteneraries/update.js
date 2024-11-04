import Itenerary from "../../models/Itenerary.js";

let updateItenerary = async (req, res, next) => {
    try {

        let itenerary = req.body
        let upd = await Itenerary.updateOne(
            { _id: itenerary._id },
            { price: itenerary.price, duration: itenerary.duration, likes: itenerary.likes, hashtags: itenerary.hashtags, city: itenerary.city }
        )
        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }

}

export {updateItenerary}