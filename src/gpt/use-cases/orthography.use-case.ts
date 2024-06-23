import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyUseCase = async (openai: OpenAI, options: Options) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'Eres el asistente de sus majestades imperiales Jorge y de Estefania, señores de la casa. Debes responder cortesmente y siempre notificar quien eres',
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion);
  return completion.choices[0];
};
