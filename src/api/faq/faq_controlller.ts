import { Request, Response } from "express";
import { faq } from "../../schema/faq_scehma";
import { faqMessge } from "../../constant/constant";

export const getFaq=async(
    req:Request,
    res:Response
):Promise<any>=>{
    try {
        const {lng}=req.query;
        const language=lng?(lng as string):'en';
        console.log("la",language)
        const allFaq=await faq.find();
        const faqWithTranslation=allFaq.map((item)=>{
            const translatedQuestion =item.translation.get(language)?.question || item.question;
          const translatedAnswer =item.translation.get(language)?.answer || item.answer;
            return{
                question:translatedQuestion,
                answer:translatedAnswer
            }
    })

    res.status(200).json({mesage:faqMessge.fetched,faqWithTranslation});

        
    } catch (error) {
        console.log("error",error);
        
    }

}