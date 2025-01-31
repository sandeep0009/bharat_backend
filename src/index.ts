import express from "express";
import { databaseConnection } from "./db/database";
import router from "./routes";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());    
databaseConnection();
app.use(router);
app.listen(3000,()=>{
    console.log("connected to backend")
});
