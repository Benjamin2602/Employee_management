require("dotenv").config();
const express = require("express");

const app = express();

const mysql = require("mysql2");

const cors = require("cors");

app.use(cors());
app.use(express.json());

//connecting to the mySql database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  database: "employeedemo",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

//creating a new user
app.post("/create", (req, res) => {
  console.log("received request ", req.body);
  const name = req.body.name;
  const department = req.body.department;
  const salary = req.body.salary;
  const designation = req.body.designation;
  const dob = req.body.dob;
  const address = req.body.address;

  //inserting the user into the database
  db.query(
    "INSERT INTO employees (name, department, salary, designation, dob, address) VALUES (?,?,?,?,?,?)",
    [name, department, salary, designation, dob, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
