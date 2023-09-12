// utils/openai.ts
import axios, { AxiosResponse } from 'axios';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const model = 'gpt-3.5-turbo'; // Replace with the desired model
const apiUrl = 'https://api.openai.com/v1/chat';

interface OpenAICompletionResponse {
  choices: [{ text: string }];
}

const openai = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export async function fetchOpenAICompletion(prompt: string) {
  try {
    const response = await openai.post("completions", {
      max_tokens: 1000, // Customize this as needed
      model: model,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ]
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    throw error;
  }
}

export default openai;
