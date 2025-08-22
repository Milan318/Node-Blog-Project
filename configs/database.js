const { default: mongoose } = require("mongoose")
require('dotenv').config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = db;