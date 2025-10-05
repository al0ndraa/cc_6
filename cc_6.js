//Step2
class Employee {
    constructor (name, department)
    {this.name = name; this.department = department;}
 describe()
    {return `${this.name} works in the ${this.department} department.`;}
}

//Step3
class Manager extends Employee {
    constructor (name, department, teamSize)
        {super(name, department); this.teamSize = teamSize;}
    describe()
        {return `${this.name} manages ${this.teamSize} people in ${this.department} department.`;}
}

//Step4 
const e = new Employee("Alondra", "HR");
const e2 =new Employee("Alexis", "IT")
const m = new Manager("Fabian", "HR", 10); 
const m2 = new Manager("Luz", "IT", 2)

//Step5
class Company {
    constructor()
    {this.employees = [];}
addEmployee(employee)
    {this.employees.push(employee);}
listEmployees()
    {this.employees.forEach(employee => console.log(employee.describe()));}
}

//Step6
const londra = new Company();
londra.addEmployee(e);
londra.addEmployee(e2)
londra.addEmployee(m);
londra.addEmployee(m2)
londra.listEmployees();