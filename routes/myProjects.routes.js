
const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary-connect");

const projectModel = require("../models/projects");


router.post('/create-project', upload.single("image"), async function(req,res){
    try{
      // upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // create project
      let project = new projectModel({
        projectName: req.body.projectName,
        imageUrl: result.public_id
      })
      await project.save();
      res.json(project);

    } catch(err){
      console.log(err);
    }
})


module.exports = router;