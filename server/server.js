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

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:persona@finalsdata.i9dnsp1.mongodb.net/?appName=FinalsData";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);