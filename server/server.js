const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./database");

const confidantRoutes = require("./routes/confidants");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/confidants", confidantRoutes);

app.get("/", (req, res) => {
  res.send("Persona Confidant Manager API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});