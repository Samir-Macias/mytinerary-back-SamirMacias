import { Schema, model } from "mongoose";

let collection = 'iteneraries'
let schema = new Schema({
    name: { type: String, required: true }, 
    image: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    likes: { type: String, required: true },
    hashtags: { type: String, required: true },
    userName: { type: String, required: true },
    userImage: { type: String, required: true },
    comments:{type: String}, 
    city: {type: Schema.Types.ObjectId, ref: 'cities', required: true}
}, {
    timestamps: true
})

let Itenerary = model(collection, schema)
export default Itenerary
