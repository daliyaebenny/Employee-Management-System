
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
// Display query results as a table in commandline
const cTable = require('console.table');
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ems_db'
  },
  console.log(`Connected to the ems_db database.`)
);

//viewAllEmployees 
function viewAllEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        toBeContinued();
        });
}
// viewAllRoles
function viewAllRoles(){
    db.query('SELECT * FROM roles', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        toBeContinued();
    });
}

// viewAllDepartments
function viewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
        const table = cTable.getTable(results);
        console.log(table);
        toBeContinued();
        });
}

// addDepartment
function addDepartment(seedData){
    db.query(`INSERT INTO department (name) VALUES (?)`,
    seedData.dept_name,function (err, results,) {
        console.log(results);
        toBeContinued();
    });
}

// addEmployee
function addEmployee(seedData){
    db.query(`INSERT INTO employee (fname,lname,role_id,manager_id) VALUES (?,?,?,?)`,
    Object.values(seedData),function (err, results,) {
        console.log(results);
        toBeContinued();
    });
}

// addRole
function addRole(seedData){
    db.query(`INSERT INTO roles (title,salary,dept_id) VALUES (?,?,?)`,
    Object.values(seedData),function (err, results,) {
        console.log(results);
        toBeContinued();
    });
}

// addDepartment
function addDepartment(seedData){
    db.query(`INSERT INTO department (name) VALUES (?)`,
    seedData.dept_name,function (err, results,) {
        console.log(results);
        toBeContinued();
    });
}



async function toBeContinued(){
  await  inquirer.prompt([
        {
              type: "confirm",
              name: "repeat",
              message: "Do you want to continue?",
        }
    ]).then((answer)=>{
        if(answer.repeat === true){
            start();
        }else{
            process.exit(0);
        }
    });
} 

async function start(){
    await inquirer.prompt([
    { 
        type: 'list',
        name: 'task',
        message: 'Please choose your option?',
        choices: ['View All Departments', 'View All Roles','View All Employees','Add a department','Add a role',
        'Add an Employee']
    }
  ])
  .then((data) => {
    
    switch (data.task) {
      case 'View All Roles':
        viewAllRoles();
        break;
      case 'View All Departments':
        viewAllDepartments();
        break;
      case 'View All Employees':
        viewAllEmployees();
        break;
        case 'Add an Employee':
        addEmployee(data);
        break;
      case 'Add a role':
        addRole(data);
        break;
      case 'Add a department':
        addDepartment(data);
        break;
    }
    
  }); 
  }
  start();





