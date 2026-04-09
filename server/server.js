/**
 * Main Express server
 * Persona Confidant Manager API
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { connectDB } = require("./database");
const confidantRoutes = require("./routes/confidants");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/**
 * API Routes
 */
app.use("/confidants", confidantRoutes);

/**
 * Root test route
 */
app.get("/", (req, res) => {
  res.send("Persona Confidant Manager API Running");
});

/**
 * Start server after database connects
 */
const PORT = 3000;

async function startServer() {
  try {

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API endpoint: http://localhost:${PORT}/confidants`);
    });

  } catch (error) {

    console.error("Failed to start server:", error);

  }
}

startServer();