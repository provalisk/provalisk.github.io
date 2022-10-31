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
console.log("!!! Employee List !!!");
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
console.log("!!! Company Specs !!!");
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
console.log("!!! Added New Employee, Anna !!!");
company.employees.push(anna);
console.log(company);

//PROBLEMO CUATRO

employeeList = company.employees;
let totalSalary = 0;
for (const employee of employeeList){
    totalSalary += employee.salary;
}

console.log("PROBLEMO CUATRO");
console.log("!!! Total Salary of All Employees is: ${totalSalary} !!!");

//PROBLEM CINCO

function updateSal(company, employeeList){
    for (const employees of employeeList){
        if (employees.raiseEligible === "true"){
            employees.salary = employees.salary * 1.1;
            employees.raiseEligible = "false";
        }
    }
}
updateSal(company, employeeList);
console.log("PROBLEMO CINCO")
console.log("!!! Updated Salaries and Revised Eligibility !!!")
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
console.log("!!! Work From Home Preferences !!!");
console.log(company);
