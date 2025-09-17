'use server';
/**
 * @fileOverview Generates insights for teachers based on student performance data.
 *
 * - generateTeacherInsights - A function that generates insights for teachers.
 * - TeacherInsightsInput - The input type for the generateTeacherInsights function.
 * - TeacherInsightsOutput - The return type for the generateTeacherInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TeacherInsightsInputSchema = z.object({
  studentPerformanceData: z
    .string()
    .describe(
      'Student performance data, including scores on assignments and tests.'
    ),
});
export type TeacherInsightsInput = z.infer<typeof TeacherInsightsInputSchema>;

const TeacherInsightsOutputSchema = z.object({
  insights: z.string().describe('Insights for the teacher based on the student performance data.'),
});
export type TeacherInsightsOutput = z.infer<typeof TeacherInsightsOutputSchema>;

export async function generateTeacherInsights(input: TeacherInsightsInput): Promise<TeacherInsightsOutput> {
  return teacherInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'teacherInsightsPrompt',
  input: {schema: TeacherInsightsInputSchema},
  output: {schema: TeacherInsightsOutputSchema},
  prompt: `You are an AI assistant for teachers. Your task is to analyze student performance data and provide insights about common problem areas so the teacher can tailor their teaching to address the specific needs of the class.

Student Performance Data: {{{studentPerformanceData}}}

Insights:`,
});

const teacherInsightsFlow = ai.defineFlow(
  {
    name: 'teacherInsightsFlow',
    inputSchema: TeacherInsightsInputSchema,
    outputSchema: TeacherInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
