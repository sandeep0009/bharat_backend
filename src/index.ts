import express from "express";
import { databaseConnection } from "./db/database";
import router from "./routes";
const app=express();
app.use(express.json());
databaseConnection();
app.use(router);
app.listen(3000,()=>{
    console.log("connected to backend")
});
