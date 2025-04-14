// Use server directive is required for Genkit flows.
'use server';

/**
 * @fileOverview AI flow for processing player nominations.
 *
 * - processNomination - A function to record, transcribe, and extract information from player nominations.
 * - NominationInput - The input type for the processNomination function.
 * - NominationOutput - The return type for the processNomination function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const NominationInputSchema = z.object({
  audioUrl: z.string().describe('The URL of the audio recording of the nomination.'),
  playerId: z.string().describe('The ID of the nominating player.'),
});
export type NominationInput = z.infer<typeof NominationInputSchema>;

const NominationOutputSchema = z.object({
  nominations: z.array(
    z.object({
      nomineeId: z.string().describe('The ID of the nominated player.'),
      points: z.number().describe('The number of points given to the nominee (3, 2, or 1).'),
      justification: z.string().describe('The justification given for the nomination.'),
    })
  ).describe('An array of nominations made by the player.'),
  justificationPenalty: z.boolean().describe('Whether the player should get a +3 penalty because they did not provide a justification'),
});
export type NominationOutput = z.infer<typeof NominationOutputSchema>;

export async function processNomination(input: NominationInput): Promise<NominationOutput> {
  return nominationProcessingFlow(input);
}

const transcribeAudio = ai.defineTool({
  name: 'transcribeAudio',
  description: 'Transcribes an audio recording to text.',
  inputSchema: z.object({
    audioUrl: z.string().describe('The URL of the audio recording.'),
  }),
  outputSchema: z.string().describe('The transcribed text from the audio recording.'),
},
async input => {
  // TODO: Replace with actual audio transcription implementation.
  // This is a placeholder implementation that returns a canned response.
  return `Doy 3 puntos a Juan porque es muy pesado, 2 puntos a Maria porque siempre se queja, 1 punto a Pedro porque ronca mucho`;
});

const extractNominationsPrompt = ai.definePrompt({
  name: 'extractNominationsPrompt',
  input: {
    schema: z.object({
      transcription: z.string().describe('The transcription of the player nomination.'),
    }),
  },
  output: {
    schema: z.object({
      nominations: z.array(
        z.object({
          nomineeId: z.string().describe('The ID of the nominated player.'),
          points: z.number().describe('The number of points given to the nominee (3, 2, or 1).'),
          justification: z.string().describe('The justification given for the nomination.'),
        })
      ).describe('An array of nominations made by the player.'),
      justificationPenalty: z.boolean().describe('Whether the player should get a +3 penalty because they did not provide a justification'),
    }),
  },
  prompt: `You are an AI assistant that extracts nominations from a player's statement.

  Input: {{{transcription}}}

  Output:
  Follow this JSON schema:
  {
    "nominations": [
      {
        "nomineeId": "The ID of the nominated player.",
        "points": "The number of points given to the nominee (3, 2, or 1).",
        "justification": "The justification given for the nomination."
      }
    ],
    "justificationPenalty": "Whether the player should get a +3 penalty because they did not provide a justification"
  }

  If the player does not provide a justification, set justificationPenalty to true.
  Make sure the points are an integer.
  `,
  tools: [transcribeAudio],
});

const nominationProcessingFlow = ai.defineFlow<
  typeof NominationInputSchema,
  typeof NominationOutputSchema
>(
  {
    name: 'nominationProcessingFlow',
    inputSchema: NominationInputSchema,
    outputSchema: NominationOutputSchema,
  },
  async input => {
    const transcriptionResult = await transcribeAudio({
      audioUrl: input.audioUrl,
    });

    const {output} = await extractNominationsPrompt({
      transcription: transcriptionResult,
    });
    return output!;
  }
);
