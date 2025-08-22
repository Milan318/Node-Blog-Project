const { default: mongoose } = require("mongoose")

const db = async () => {
    try {
        await mongoose.connnect('mongodb+srv://milanmandaviya7495:12345@cluster0.gswuxkt.mongodb.net/blog_project');
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = db;