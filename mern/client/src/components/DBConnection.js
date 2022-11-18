
const express = require("express");

const app = express();
const cors = require("cors");

// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// //app.use(require("./routes/record"));
// // get driver connection
// //const dbo = require("./db/conn");


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://melvinly:5JV8dkBjnivqrFJ9@notetaker.lsyamaq.mongodb.net/notesdb?retryWrites=true&w=majority";
const Client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
Client.connect(err => {
    const collection = Client.db("test").collection("devices");
    // perform actions on the collection object
    Client.close();
  });