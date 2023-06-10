const Employee = require('../lib/Employee');

// Test case: checks if all information is provided and accurate

test('checks if all info is provided and accurate', () => {
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const role = "";

    // Creating an instance of the Employee class with the provided information

    const employee = new Employee(name, id, email, role);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe("Employee");

    console.log(`Employee role: ${employee.getRole()}, Employee Name: ${employee.getName()}, Employee ID: ${employee.getId()}, Employee Email: ${employee.getEmail()}`);
});
