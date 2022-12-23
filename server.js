import app from "./app.js";
import { connectDB } from "./dbConnection.js";

const startServer = ()=>{

    connectDB();

    const PORT = process.env.PORT;
    

app.listen(PORT,()=>{
    console.log(`server is running at PORT:${PORT}`)
})

}

export default startServer;
