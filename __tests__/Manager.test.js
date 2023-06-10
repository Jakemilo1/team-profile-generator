const Manager = require('../lib/Manager');

test('checks if all info for Manager is provided and accurate', () => {
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const officeNumber = 1;
    const role = "Manager";

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
    expect(manager.getRole()).toBe(role);

    console.log(`Role: ${manager.getRole()}, Manager Name: ${manager.getName()}, Manager ID: ${manager.getId()}, Manager Email: ${manager.getEmail()}, Office Number: ${manager.getOfficeNumber()}`);
});
