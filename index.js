require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConnect = require("./config/mongodb-connection");
const myProjectRoutes = require("./routes/myProjects.routes")

const server = express();
const port = process.env.PORT;

// installing middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

//installing routes
server.use('/projects', myProjectRoutes);

server.get('/', function(req,res){
    res.status(200).send({
        status: 200,
        message: "Server is running"
    })
})


// middleware:

// create connection
dbConnect();



server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})



