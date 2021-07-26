const multer = require("multer");
const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req,file,cb) =>{
        let externalFile = path.extname(file.originalname);
        if(externalFile !== ".jpg" && externalFile !== ".png" && externalFile !== ".jpeg" ){
            cb(new Error("file is not supported"), false);
            return;
        } else{
            cb(null, true);
        }
    }
})