// Import and require mysql2
const express = require('express');
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

//viewAllEmployees 
function viewAllEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        });
}
// viewAllRoles
function viewAllRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
    });
}

// viewAllDepartments
function viewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        });
}

// addDepartment
function addDepartment(seedData){
    db.query(`INSERT INTO department (name) VALUES (?)`,seedData.dept_name,function (err, results,) {
        console.log(results);
    });
}

// addEmployee
function addEmployee(seedData){
    db.query(`INSERT INTO employee (fname,lname,role_id,manager_id) VALUES (?,?,?,?)`,Object.values(seedData),function (err, results,) {
        console.log(results);
    });
}

// addRole
function addRole(seedData){
    db.query(`INSERT INTO roles (title,salary,dept_id) VALUES (?,?,?)`,Object.values(seedData),function (err, results,) {
        console.log(results);
    });
}

// addDepartment
function addDepartment(seedData){
    db.query(`INSERT INTO department (name) VALUES (?)`,seedData.dept_name,function (err, results,) {
        console.log(results);
    });
}

// function addDepartment(){
// // TODO
// }

//  function addDepartment(){
// // TODO
// }

// viewAllEmployees();
// viewAllRoles();
// viewAllDepartments();

const etempData = {
    lname:'Manager',
    fname:'13000',
    role_id:2,
    manager_id:1

}
addEmployee(etempData);

// const rtempData = {
//     title:'Manager',
//     salary:'13000',
//     dept_id:2
// }
// addRole(rtempData);

// const dtempData = {
//     dept_name:'Trial'
// }

// addDepartment(dtempData);


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
