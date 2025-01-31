import { translate } from '@vitalets/google-translate-api';
export async function generateTranslation(
  question: string,
  answer: string,
  lng: string[]
) {
  const translations: any = {};

  for (const lang of lng) {
    if (typeof lang !== "string" || lang.length < 2) {
      console.error(`Invalid language code: ${lang}`);
    }

    const translatedQuestion = await translate(question, { to: lang });
    const translatedAnswer = await translate(answer, { to: lang });

    translations[lang] = {
      question: translatedQuestion.text,
      answer: translatedAnswer.text,
    };
  }

  return translations;
}
