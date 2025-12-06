import { GoogleGenAI } from "@google/genai";

export const generateFinancialInsight = async (topic: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Gere um insight financeiro curto, filosófico e prático sobre "${topic}". O tom deve ser de um consultor experiente. Máximo de 2 frases.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null;
  }
};