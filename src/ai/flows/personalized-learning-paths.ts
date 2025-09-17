'use server';

/**
 * @fileOverview A personalized learning path recommendation AI agent.
 *
 * - getPersonalizedRecommendations - A function that generates personalized learning recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  studentId: z.string().describe('The unique identifier for the student.'),
  gradeLevel: z.number().describe('The grade level of the student (6-12).'),
  completedGames: z.array(z.string()).describe('List of game IDs the student has completed.'),
  performanceData: z.record(z.number()).describe('A record of student performance data for each subject, where the key is subject name and value is score (0-100).'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendedGames: z.array(z.string()).describe('A list of game IDs recommended for the student.'),
  recommendedMaterials: z.array(z.string()).describe('A list of learning material IDs recommended for the student.'),
  reasoning: z.string().describe('Explanation of why these resources were recommended.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to generate personalized learning recommendations for students.

  Consider the student's grade level, completed games, and performance data to recommend relevant games and learning materials.
  Explain the reasoning behind each recommendation.

  Student ID: {{{studentId}}}
  Grade Level: {{{gradeLevel}}}
  Completed Games: {{#each completedGames}}{{{this}}}, {{/each}}
  Performance Data: {{#each (Object.keys performanceData)}}{{{this}}}: {{{lookup ../performanceData this}}}, {{/each}}

  Based on this information, recommend games and learning materials tailored to the student's needs.
  `, 
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
