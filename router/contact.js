import Contact_Col from "../models/contacts.js";
import excelToJson from "convert-excel-to-json";
import csvToJson from "convert-csv-to-json";
import fs from "fs";
const acceptExcel = async (request,response) =>{
        
    console.log(request.file);
    const fileAddress = request.file.path;
    let excelData ;
    let extension = request.file.mimetype.split("/");
    if(extension[1]==="csv"){
          excelData = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileAddress);
    }else{
           excelData = excelToJson({
                sourceFile:fileAddress,
                columnToKey: {
                    '*': '{{columnHeader}}'
                },
            })
    }
   
     
    fs.unlinkSync(fileAddress);
    console.log(excelData);
    const addData = await Contact_Col.insertMany(excelData);

    if(!addData){
        return response.status(400).json({error:"Process Failed"});
    }

    return response.status(200).json({message:"Data Succesfully added"});


}

export default acceptExcel;