require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const router = require("./routes")

const app = express()
const PORT = process.env.PORT || 3000

//middleware
app.use(router)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})