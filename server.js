//import express and mysql2
const express = require ('express');
const mysql = require('mysql2');

const PORT = process.env.PORT||3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Connect to database
const db = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'root',
    database:'ems_db'
},
console.log('Connected to ems_db')
);

// Query database
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
