import Itenerary from "../../models/Itenerary.js"
import City from "../../models/City.js"

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


let itineraryFilter = async (req, res, next) => {
    try {
        const { city } = req.query;
    
        if (!city) {
          return res.status(400).json({ message: 'City query parameter is required' });
        }
    
        const foundCity = await City.findOne({ name: city });
    
        if (!foundCity) {
          return res.status(404).json({ message: `City not found: ${city}` });
        }
        
        const itineraries = await Itenerary.find({ city: foundCity._id });
    
        if (itineraries.length > 0) {
          res.status(200).json({ response: itineraries });
        } else {
          res.status(404).json({ message: `No itineraries found for city: ${city}` });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error });
      }
}
export { allIteneraries, idIteneraries, itineraryFilter }