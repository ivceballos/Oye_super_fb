/**
 * Represents a row in the Google Sheet.
 */
export interface SheetRow {
  /**
   * The date of the entry.
   */
  date: string;
  /**
   * The position of the player.
   */
  position: number;
  /**
   * The name of the player.
   */
  player: string;
  /**
   * The points of the player.
   */
  points: number;
  /**
   * The day of the entry.
   */
  day: string;
}

/**
 * Asynchronously retrieves ranking data from a Google Sheet.
 * @returns A promise that resolves to an array of SheetRow objects.
 */
export async function getRankingData(): Promise<SheetRow[]> {
  // TODO: Implement this by calling the Google Sheets API.

  return [
    {
      date: '2024-07-27',
      position: 1,
      player: 'Alice',
      points: 100,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 2,
      player: 'Bob',
      points: 80,
      day: 'Saturday',
    },
  ];
}
