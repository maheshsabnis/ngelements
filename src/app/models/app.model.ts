export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public Salary: number
  ){
  }
}

export const Employees: Array<Employee>  = new Array<Employee>();
Employees.push(new Employee(101, 'E1', 11000));
Employees.push(new Employee(102, 'E2', 12000));
Employees.push(new Employee(103, 'E3', 13000));
Employees.push(new Employee(104, 'E4', 14000));
Employees.push(new Employee(105, 'E5', 15000));
