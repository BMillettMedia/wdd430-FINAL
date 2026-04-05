/**
 * Confidant Model
 * Defines the structure of confidant objects used by Angular.
 */

export interface Confidant {

  _id?: string;

  name: string;

  arcana: string;

  game: string;

  rank: number;

  maxRank: number;

  notes: string;

}