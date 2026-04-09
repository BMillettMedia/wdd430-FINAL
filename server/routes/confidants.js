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

const express = require("express");

const fs = require("fs");
const path = require("path");

const { getDB, isUsingMock } = require("../database");

router.get("/", async (req, res) => {

  try {

    if (isUsingMock()) {

      const filePath = path.join(
        __dirname,
        "../mockData/confidant-data.json"
      );

      const raw = fs.readFileSync(filePath);

      const data = JSON.parse(raw);

      return res.json(data.confidants); // IMPORTANT

    }

    const db = getDB();

    const confidants = await db
      .collection("confidants")
      .find({})
      .toArray();

    res.json(confidants);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Failed to load confidants" });

  }
});

module.exports = router;


module.exports = router;