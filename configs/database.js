const { default: mongoose } = require("mongoose");

const db = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://aksharparekh401:12345@cluster0.ncwztql.mongodb.net/Blog"
    );
    console.log("Database is connected...!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
