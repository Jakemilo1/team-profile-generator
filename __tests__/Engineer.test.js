const Engineer = require('../lib/Engineer');

test('checks if all info for Engineer is provided and accurate', () => {
    const name = "John";
    const id = 1;
    const email = "John@bootcampemail.com";
    const github = "JohnGithub";
    const role = "Engineer";

    const engineer = new Engineer(name, id, email, github);
    // Check if the properties of the engineer object match the provided values

    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getGithub()).toBe(github);
    expect(engineer.getRole()).toBe(role);

    // Print out the engineer's information for debugging or verification purposes

    console.log(`Role: ${engineer.getRole()}, Engineer Name: ${engineer.getName()}, Engineer ID: ${engineer.getId()}, Engineer Email: ${engineer.getEmail()}, GitHub Username: ${engineer.getGithub()}`);
});
