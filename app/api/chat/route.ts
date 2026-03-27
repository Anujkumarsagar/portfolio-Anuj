import { streamText, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are Anuj's AI Assistant - a professional, knowledgeable, and friendly portfolio chatbot. 
You help visitors learn about Anuj Kumar's skills, projects, and experiences.
You are well-versed in web development, mobile development, full-stack applications, and modern technologies.
Always be professional yet approachable, and provide helpful information about Anuj's work and expertise.
Keep responses concise and engaging. If asked about topics unrelated to Anuj's portfolio, politely redirect the conversation.`,
    messages: await convertToModelMessages(messages),
    temperature: 0.7,
    maxTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
