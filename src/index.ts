import express from "express";
import { databaseConnection } from "./db/database";

const app=express();


databaseConnection();
app.listen(3000,()=>{
    console.log("connected to backend")
});
