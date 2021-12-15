INSERT INTO department (name)
VALUES ("Finance"),
       ("R&D"),
       ("Production"),
       ("Human ResourceManagement"),
       ("Marketting");

INSERT INTO roles (title, salary,dept_id)
VALUES ("Manager",12000,1),
       ("Assistant",2000,2),
       ("Clerk",5000,2),
       ("Manager",12000,3),
       ("Engineer",10000,2),
       ("Worker",1000,1);

INSERT INTO employee (fname,lname,role_id,manager_id)
VALUES ("Noah","Emma",1,1),
       ("Oliver","Ava",2,1),
       ("William","Sophia",4,3);