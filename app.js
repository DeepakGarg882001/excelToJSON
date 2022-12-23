import express from "express";
import dotENV from "dotenv";
import startServer from "./server.js";
import router from "./router/rootRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";


//  Importing dotENV file
dotENV.config({ 
     path: "./config.env" 
});

 const frontUrl = process.env.FRONT_END_URL;

 const app = express();
 app.use(cors({credentials: true, origin: frontUrl,allowedHeaders:['Content-Type', 'Authorization']}));
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use("/api/v1",router);

 export default app;

 startServer();
 





