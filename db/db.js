const mongoose= require('mongoose');

async function connectDB() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>Connected to the database successfully>>>>>>>>>>>>>>>>>>>>>>>");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

module.exports = connectDB;
