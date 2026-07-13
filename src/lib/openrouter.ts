const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function askOpenRouter(systemPrompt: string, userPrompt: string) {
  const response = await fetch(OPENROUTER_URL, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      model: "openai/gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content: systemPrompt,
        },

        {
          role: "user",
          content: userPrompt,
        },
      ],

      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    throw new Error("OpenRouter request failed.");
  }

  const data = await response.json();

  return data.choices[0].message.content;
}