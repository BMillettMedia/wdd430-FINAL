/*
Test MongoDB connection.
If connection fails, load local mock data instead.
*/

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Your MongoDB Atlas connection string
const uri = "YOUR_MONGODB_CONNECTION_STRING";

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