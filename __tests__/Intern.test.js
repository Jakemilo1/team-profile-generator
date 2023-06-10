const Intern = require('../lib/Intern');

test('checks if all info for Intern is provided and accurate', () => {
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const school = "It's the best one ever";
    const role = "Intern";

    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe(role);

    console.log(`Role: ${intern.getRole()}, Intern Name: ${intern.getName()}, Intern ID: ${intern.getId()}, Intern Email: ${intern.getEmail()}, School: ${intern.getSchool()}`);
});
