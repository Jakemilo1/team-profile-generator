const Employee = require('../lib/Employee');

test('checks if all info is provided and accurate', () => {
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const role = "";

    const employee = new Employee(name, id, email, role);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe("Employee");

    console.log(`Employee role: ${employee.getRole()}, Employee Name: ${employee.getName()}, Employee ID: ${employee.getId()}, Employee Email: ${employee.getEmail()}`);
});
