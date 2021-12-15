const mysql= require('mysql2');
const ems = require('express').Router();

//Connect to database
const db = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'root',
    database:'ems_db'
},
console.log('Connected to ems_db')
);

// // Query database
// db.query('SELECT * FROM employee', function (err, results) {
//     console.log(results);
//   });


ems.get('/api/employees', (req, res) => {
    const sql = 'SELECT * FROM employee';
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  module.exports= ems;