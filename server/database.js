const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
"mongodb+srv://admin:persona@finalsdata.i9dnsp1.mongodb.net/personaDB?retryWrites=true&w=majority";

let db = null;
let useMockData = false;

async function connectDB() {

  try {

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    });

    await client.connect();

    db = client.db("personaDB");

    console.log("Connected to MongoDB Atlas");

  } catch (error) {

    console.log("MongoDB connection failed. Using mock dataset.");
    console.error(error);

    useMockData = true;

  }

}

function getDB() {
  return db;
}

function isUsingMock() {
  return useMockData;
}

module.exports = {
  connectDB,
  getDB,
  isUsingMock
};