// Replace the `apiKey` and `model` values with your own API key and model ID.
const apiKey = "";
const model = "text-davinci-003";

// This is the URL for the OpenAI Create Completions API.
const API_URL = `https://api.openai.com/v1/completions`;

// This is the function that makes the fetch request.
export async function fetchCompletions(prompt: string): Promise<string> {
  // Make the API request.
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    method: "POST",
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.5,
      model: model,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });
  // Parse the response as JSON and return the `text` property.
  const responseJson = await response.json();
  return responseJson["choices"][0]["text"];
}


