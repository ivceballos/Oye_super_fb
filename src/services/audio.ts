/**
 * Represents an audio clip.
 */
export interface AudioClip {
  /**
   * The name of the audio clip.
   */
  name: string;
  /**
   * The URL of the audio clip.
   */
  url: string;
}

/**
 * Asynchronously retrieves a list of available audio clips.
 * @returns A promise that resolves to an array of AudioClip objects.
 */
export async function getAudioClips(): Promise<AudioClip[]> {
  // TODO: Implement this by fetching audio clip metadata from a remote source.

  return [
    {
      name: 'GH Theme',
      url: 'https://ivceballos.com/despedida2407/audio/Sint_GH-V-corta.m4a',
    },
    {
      name: 'Random Phrase 1',
      url: 'https://example.com/audio/random1.mp3',
    },
  ];
}
