/**
 * Routes for Confidant API
 * Handles CRUD operations for Persona confidants
 */

const express = require('express');
const router = express.Router();
const Confidant = require('../models/confidant');

/**
 * GET
 * Returns all confidants
 */
router.get('/', async (req, res) => {

  try {

    const confidants = await Confidant.find();
    res.status(200).json(confidants);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});

/**
 * PUT
 * Update a confidant's notes
 */
router.put('/:id', async (req, res) => {

  try {

    const updated = await Confidant.findByIdAndUpdate(
      req.params.id,
      { notes: req.body.notes },
      { new: true }
    );

    res.status(200).json(updated);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});

module.exports = router;