//import express and mysql2
const express = require ('express');
//const mysql = require('mysql2');
const emsRoutes = require('./routes/content_management');

const PORT = process.env.PORT||3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(emsRoutes);

// //Connect to database
// const db = mysql.createConnection({
//     host:'localhost',
//     user :'root',
//     password:'root',
//     database:'ems_db'
// },
// console.log('Connected to ems_db')
// );

// // // Query database
// // db.query('SELECT * FROM employee', function (err, results) {
// //     console.log(results);
// //   });


// app.get('/api/employees', (req, res) => {
//     const sql = 'SELECT * FROM employee';
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
