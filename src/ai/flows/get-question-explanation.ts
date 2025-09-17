'use server';

/**
 * @fileOverview Generates an explanation for a quiz question.
 *
 * - getQuestionExplanation - A function that provides an explanation for a given question and answer.
 * - QuestionExplanationInput - The input type for the getQuestionExplanation function.
 * - QuestionExplanationOutput - The return type for the getQuestionExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuestionExplanationInputSchema = z.object({
  question: z.string().describe('The quiz question text.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
});
export type QuestionExplanationInput = z.infer<typeof QuestionExplanationInputSchema>;

const QuestionExplanationOutputSchema = z.object({
  explanation: z.string().describe('A simple, clear explanation of why the answer is correct, suitable for a student.'),
});
export type QuestionExplanationOutput = z.infer<typeof QuestionExplanationOutputSchema>;

export async function getQuestionExplanation(input: QuestionExplanationInput): Promise<QuestionExplanationOutput> {
  return questionExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'questionExplanationPrompt',
  input: {schema: QuestionExplanationInputSchema},
  output: {schema: QuestionExplanationOutputSchema},
  prompt: `You are an expert teacher. Explain why the following answer is correct for the given question.
  Keep the explanation simple, clear, and encouraging for a student in grades 6-12.

  Question: {{{question}}}
  Correct Answer: {{{correctAnswer}}}

  Provide your explanation below.
  `,
});

const questionExplanationFlow = ai.defineFlow(
  {
    name: 'questionExplanationFlow',
    inputSchema: QuestionExplanationInputSchema,
    outputSchema: QuestionExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
