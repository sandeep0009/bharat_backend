import { Request, Response } from "express";
import { faq } from "../../schema/faq_scehma";
import { faqMessge } from "../../constant/constant";
import { redis } from "../../helper/redis";
export const getFaq = async (req: Request, res: Response): Promise<any> => {
    try {
        const { lang } = req.query;
        const requestedLanguage = lang ? (lang as string) : 'en';
        const allFaq = await faq.find();

        const cacheKey = `faq:${requestedLanguage}`;
        const cachedData = await redis.get(cacheKey);



        if (cachedData) {
            console.log("Serving from Redis Cache");
            return res.status(200).json({ message: faqMessge.fetched, faqWithTranslation: JSON.parse(cachedData) });
        }
        let faqWithTranslation = allFaq
            .map((item) => {
                const translation = item.translation.get(requestedLanguage);
                if (requestedLanguage === 'en' || translation) {
                    return {
                        question: translation ? translation.question : item.question,
                        answer: translation ? translation.answer : item.answer,
                    };
                }
                return null;
            })
            .filter((item) => item !== null);
            await redis.set(cacheKey, JSON.stringify(faqWithTranslation), "EX", 3600);
        res.status(200).json({ message: faqMessge.fetched, faqWithTranslation });
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        res.status(500).json({ message: "Error fetching FAQs", error });
    }
};
