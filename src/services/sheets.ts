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
      player: 'Adrián',
      points: 100,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 2,
      player: 'María',
      points: 80,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 3,
      player: 'Paco',
      points: 70,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 4,
      player: 'Raquel',
      points: 60,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 5,
      player: 'Bea',
      points: 50,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 6,
      player: 'Gonzalo',
      points: 40,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 7,
      player: 'Crina',
      points: 30,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 8,
      player: 'Anita',
      points: 20,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 9,
      player: 'Álvaro',
      points: 10,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 10,
      player: 'Iván',
      points: 5,
      day: 'Saturday',
    },
     {
      date: '2024-07-27',
      position: 11,
      player: 'Aída',
      points: 2,
      day: 'Saturday',
    },
    {
      date: '2024-07-27',
      position: 12,
      player: 'Adri Cuadrado',
      points: 1,
      day: 'Saturday',
    },
  ];
}

