import mongoose, { Document,model,Schema } from "mongoose";


export interface IFAQ extends Document{
    question:string,
    answer:string,
    translation:{
        [key:string]:{
            question:string,
            answer:string
        
        },

    }
}

const faqSchema=new Schema<IFAQ>({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    translation:{
        type:Map,
        of:{
            question:{type:String,required:true},
            answer:{type:String,required:true}
        },
        default:{}
    }

},{timestamps:true});

export const faq=model<IFAQ>('faq',faqSchema);