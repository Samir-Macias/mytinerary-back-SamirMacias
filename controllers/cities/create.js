import City from "../../models/City.js";

let create = async (req, res, next) => {
    try {
        const city = await City.create(req.body);
        return res.status(201).json({
            success: true,
            message: "City created successfully",
            response: city,
        });
    } catch (error) {
        next(error)
    }
}

export { create }