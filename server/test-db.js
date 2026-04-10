/*
Test MongoDB connection.
If connection fails, load local mock data instead.
*/

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Your MongoDB Atlas connection string
const uri = "mongodb+srv://admin:persona@finalsdata.i9dnsp1.mongodb.net/";

// Path to local mock dataset
const mockDataPath = path.join(__dirname, 'mockData', 'confidant-data.json');

mongoose.connect(uri)
.then(() => {

    console.log("✅ MongoDB Atlas connection successful!");

})
.catch(err => {

    console.error("❌ MongoDB connection failed.");
    console.log("⚠️  Falling back to local mock dataset...");

    const mockData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

    console.log("Loaded mock confidants:");

    console.table(mockData);

});

const { MongoClient } = require("mongodb");

const client = new MongoClient(uri);

async function run() {

  try {

    await client.connect();

    console.log("Connected to MongoDB Atlas");

    const db = client.db("FinalsData");

    const data = await db
      .collection("confidants")
      .find({})
      .toArray();

    console.log("Confidants in DB:", data);

  } catch (err) {

    console.error("Connection error:", err);

  } finally {

    await client.close();

  }

}

run();