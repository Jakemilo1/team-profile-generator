const Intern = require('../lib/Intern');

test('checks if all info for Intern is provided and accurate', () => {
    // Define test data
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const school = "It's the best one ever";
    const role = "Intern";

      // Create an instance of Intern
    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe(role);

        // Print intern details for verification

    console.log(`Role: ${intern.getRole()}, Intern Name: ${intern.getName()}, Intern ID: ${intern.getId()}, Intern Email: ${intern.getEmail()}, School: ${intern.getSchool()}`);
});
