/**
 * Confidant API Routes
 * Handles CRUD operations for confidants
 */

const express = require("express");
const router = express.Router();

const Confidant = require("../models/confidant");


// GET ALL CONFIDANTS
router.get("/", async (req, res) => {

  try {

    const confidants = await Confidant.find();

    res.json(confidants);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});


// GET ONE CONFIDANT
router.get("/:id", async (req, res) => {

  try {

    const confidant = await Confidant.findById(req.params.id);

    res.json(confidant);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});


// CREATE CONFIDANT
router.post("/", async (req, res) => {

  const confidant = new Confidant({

    name: req.body.name,
    arcana: req.body.arcana,
    game: req.body.game,
    rank: req.body.rank,
    maxRank: req.body.maxRank,
    notes: req.body.notes

  });

  try {

    const newConfidant = await confidant.save();

    res.status(201).json(newConfidant);

  } catch (error) {

    res.status(400).json({ message: error.message });

  }

});


// UPDATE CONFIDANT
router.put("/:id", async (req, res) => {

  try {

    const updatedConfidant = await Confidant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedConfidant);

  } catch (error) {

    res.status(400).json({ message: error.message });

  }

});


// DELETE CONFIDANT
router.delete("/:id", async (req, res) => {

  try {

    await Confidant.findByIdAndDelete(req.params.id);

    res.json({ message: "Confidant deleted" });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});

//temp end point
router.post('/seed', async (req, res) => {

await Confidant.insertMany([

{
name: "Sojiro Sakura",
arcana: "Hierophant",
game: "Persona 5",
rank: 1,
maxRank: 10,
notes: ""
},

{
name: "Ryuji Sakamoto",
arcana: "Chariot",
game: "Persona 5",
rank: 1,
maxRank: 10,
notes: ""
},

{
name: "Yosuke Hanamura",
arcana: "Magician",
game: "Persona 4",
rank: 1,
maxRank: 10,
notes: ""
},

{
name: "Yukari Takeba",
arcana: "Lovers",
game: "Persona 3",
rank: 1,
maxRank: 10,
notes: ""
}

]);

res.send("Database Seeded");

});


module.exports = router;