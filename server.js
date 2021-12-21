
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const cTable = require('console.table');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ems_db'
  },
  console.log(`Connected to the books_db database.`)
);




function viewAllEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        });
}

function viewAllRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
    });
}
function viewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        });
}
viewAllEmployees();
viewAllRoles();
viewAllDepartments();
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
