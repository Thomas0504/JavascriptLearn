//1.Create 5 employee Details (name , age, and salary) Getthe first output in console
let employeeDetails1 = {
    name: "thoams",
    age: 18,
    salary: 18000
};
let employeeDetails2 = {
    name: "Ashwini",
    age: 16,
    salary: 22000
};
let employeeDetails3 = {
    name: "cathirne",
    age: 20,
    salary: 2300
};
let employeeDetails4 = {
    name: "mithun",
    age: 22,
    salary: 24000
};
let employeeDetails5 = {
    name: "sathis",
    age: 24,
    salary: 26000
};
console.log(employeeDetails1, employeeDetails2, employeeDetails3, employeeDetails4, employeeDetails5);


//2. Using 5 employee create array of object Get the output in cosole
Employelist = [employeeDetails1, employeeDetails2, employeeDetails3, employeeDetails4, employeeDetails5];
console.log(Employelist);


/* 3.Add the salaries and deduct 33 rupees for all the employee.now add the salary . 
Again the salary multiply by 33 and then divide by 7 . Get the output in console*/

let employeTotalsalary = Employelist[0].salary + Employelist[1].salary + Employelist[2].salary + Employelist[3].salary + Employelist[4].salary;
console.log(employeTotalsalary);

const salryDeduct = 33 * 5;
employeTotalsalary -= salryDeduct
console.log(employeTotalsalary);

employeTotalsalary *= 33;
console.log(employeTotalsalary);

employeTotalsalary /= 7;
console.log(employeTotalsalary);


//4.find the employee who get highest salary. Find the employee who get lowest salary
let a = employeeDetails1.salary;
let b = employeeDetails2.salary;
let c = employeeDetails3.salary;
let d = employeeDetails4.salary;
let e = employeeDetails5.salary;
x = [a, b, c, d, e];

//highest salary.
let y;
x[0] > x[1] ? y = x[0] : y = x[1];
y > x[2] ? y : y = x[2];
y > x[3] ? y : y = x[3];
y > x[4] ? y : y = x[4];
console.log(y);

//lowest salary.
let z;
x[0] < x[1] ? z = x[0] : x[1];
z < x[2] ? z : z = x[2];
z < x[3] ? z : z = x[3];
z < x[4] ? z : z = x[4];
console.log(z);


//Get the second employee... Print employee name using 2 syntex of object
console.log(employeeDetails2.name);
console.log(employeeDetails2["name"]);