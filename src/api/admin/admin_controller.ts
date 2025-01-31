import { Request, Response } from "express";
import { ADMIN_KEY } from "../../config/config";
import { adminMessage } from "../../constant/constant";
import { generateTranslation } from "../../helper/generateTranslation";
import { faq } from "../../schema/faq_scehma";


export const createFaq=async(
    req:Request,
    res:Response
):Promise<any>=>{
    try {
        const {question,answer,lng}=req.body;
        const adminKey = req.headers["adminkey"];
        if(adminKey!==ADMIN_KEY){
            res.status(403).json({message:adminMessage.adminKey});
            return;
        }
        const translation=await generateTranslation(question,answer,lng);
        const newFaq=new faq({
            question,
            answer,
            translation
        });
        await newFaq.save();
        res.status(201).json({message:adminMessage.created,newFaq});
        
    } catch (error) {
        console.log("error",error);
        
    }
}