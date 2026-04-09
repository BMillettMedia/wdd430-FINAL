import { Confidant } from './confidant';

describe('Confidant Model', () => {

  it('should create a valid confidant object', () => {

    const confidant: Confidant = {
      name: "Joker",
      arcana: "Fool",
      game: "Persona 5 Royal",
      rank: 1,
      maxRank: 10,
      notes: "Leader of the Phantom Thieves"
    };

    expect(confidant).toBeTruthy();
    expect(confidant.name).toBe("Joker");

  });

});