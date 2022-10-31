//PROBLEMO UNO
let sam = {
    "firstName": "Sam",
    "department:": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": "true"

}

let mary = {
    "firstName": "Mary",
    "department:": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": "true"

}

let bill = {
    "firstName": "Bill",
    "department:": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": "false"

}

console.log("PROBLEMO UNO");
console.log(sam);
console.log(mary);
console.log(bill);

//PROBLEMO DOS

let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [sam, mary, bill]

}

console.log("PROBLEMO DOS");
console.log(company);

//PROBLEMO TRES

let anna = {
    "firstName": "Anna",
    "department:": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": "false"
}

console.log("PROBLEMO TRES");
company.employees.push(anna);
console.log(company);

//PROBLEMO CUATRO
employeeList = company.employees;
let totalSalary = 0;
for (const employee of employeeList){
    totalSalary += employee.salary;
}

console.log("PROBLEMO CUATRO");
console.log(`Total Salary of All Employees is: ${totalSalary}`);

//PROBLEMO CINCO
function updatedSalary(company, employeeList) {
    for (const employees of employeeList) {
    if (employees.raiseEligible === "true");
        
        employeeList.salary = employeeList.salary * 1.1;
        employeeList.raiseEligible = "false";
    }
}

console.log("PROBLEMO CINCO");
console.log("UPDATED SALARIES OF ELIGIBLE EMPLOYEES AND REVISED RAISE ELIGIBILITIES");
console.log(company)

//PROBLEMO SEIS
const wfh = ['Anna', 'Sam'];
for (const employees of employeeList) {
    if (wfh.includes(employees.firstName)){
        employees.wfh = "true";

    }
    else {
        employees.wfh = "false";
    }

}
console.log("PROBLEMO SEIS");
console.log("WORK FROM HOME PREFERENCES");
console.log(company);
