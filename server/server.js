require("dotenv").config();
const express = require("express");

const app = express();

const mysql = require("mysql2");

const cors = require("cors");

app.use(cors());
app.use(express.json());

//connecting to the mySql database
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL");
  });
  