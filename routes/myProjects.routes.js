const express = require("express");
const router = express.Router();

const projectModel = require("../models/projects");

router.post('/create-project', function(req,res){
    const incomingData = req.body;
    const newProject = new projectModel(incomingData); 
    
    newProject.save((error,doc)=>{
        if(error){
            if(error.code){
                res.status(400).send({
                    status: 400,
                    message: "There was an error"
                })
            } else{
                res.status(400).send({
                    status: 400,
                    message: "structure invalid"
                })
            } 
        } else{
            res.status(200).send({
                status: 200,
                message: "Project created",
                data: doc
            })
        }
    })
})

module.exports = router;