/**
 * Confidant Model
 * Defines the MongoDB schema for Persona confidants.
 */

const mongoose = require("mongoose");

const confidantSchema = new mongoose.Schema({

  /**
   * Name of the confidant character
   */
  name: {
    type: String,
    required: true
  },

  /**
   * Tarot arcana associated with the confidant
   */
  arcana: {
    type: String,
    required: true
  },

  /**
   * Persona game the confidant belongs to
   */
  game: {
    type: String,
    required: true
  },

  /**
   * Current rank of the confidant
   */
  rank: {
    type: Number,
    default: 1
  },

  /**
   * Maximum rank allowed
   */
  maxRank: {
    type: Number,
    default: 10
  },

  /**
   * User editable notes
   */
  notes: {
    type: String,
    default: ""
  }

});

module.exports = mongoose.model("Confidant", confidantSchema);