const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("coneccion correcta");
    } catch (e) {
        console.error("error al conectar ", e.message);
        throw new Error("database connection failed");
    }
};

module.exports = connectDatabase;