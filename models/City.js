import { Schema, model } from "mongoose";

let collection = 'cities'
let schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    weather: { type: String, required: true },
}, {
    timestamps: true
})

let City = model(collection, schema)
export default City
