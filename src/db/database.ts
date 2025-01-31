import mongoose from "mongoose";
import { databaseMessage } from "../constant/constant";
import { DATABASE_URI } from "../config/config";


export const databaseConnection=async()=>{
    try {

        await mongoose.connect(DATABASE_URI ?? "");
        console.log(databaseMessage.connected);      
    } catch (error) {
        console.log("error",error);
        
    }
}