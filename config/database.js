import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);


async function ConnectDataBase() {
    try {
        await mongoose.connect(url)
        console.log("Base de datos conectada");

    } catch (error) {
        console.log(error);

    }
}

ConnectDataBase()