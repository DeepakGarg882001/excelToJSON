import multer from "multer";



const uploadFile = multer({
    storage:multer.diskStorage({
        destination:function(request,files,cb){
            cb(null , "filesUpload")
        },

        filename:function( request,files ,cb){
            let fileName = files.originalname   ;
            cb(null , fileName)
        }
    })
}).single("file");

export default uploadFile;