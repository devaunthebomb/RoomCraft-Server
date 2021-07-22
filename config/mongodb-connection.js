require("dotenv").config();
const mongoose = require("mongoose");

const mongo_uri = process.env.MONGODB 

const connectToMongoDB = ()=>{
    mongoose
        .connect(
            mongo_uri, 
            {
                useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
            }
        )
        .then(()=>{
            console.log("Connected to MongoDb")
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = connectToMongoDB;