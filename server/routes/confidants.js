/**
 * Confidant API Routes
 * Handles retrieving confidant data from MongoDB
 * Falls back to mock JSON data if MongoDB fails
 */

const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const { getDB, isUsingMock } = require("../database");

router.get("/", async (req, res) => {
  try {

    /**
     * If MongoDB connection failed, use mock data
     */
    if (isUsingMock()) {

      const filePath = path.join(
        __dirname,
        "../mockData/confidant-data.json"
      );

      const raw = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(raw);

      // Support both structures
      if (data.confidants) {
        return res.json(data.confidants);
      }

      return res.json(data);
    }

    /**
     * Query MongoDB
     */
    const db = getDB();

    const confidants = await db
      .collection("confidants")
      .find({})
      .toArray();

    res.json(confidants);

  } catch (error) {

    console.error("Error loading confidants:", error);

    res.status(500).json({
      message: "Failed to load confidants"
    });

  }
});

module.exports = router;