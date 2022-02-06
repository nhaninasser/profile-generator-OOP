// using the Intern constructor
const Intern = require('../lib/intern');

// makes intern object
test('creates an intern object', () => {
    const intern = new Intern('Naruto', 30, 'naruto@email.com', 'UCONN');

   expect(intern.school).toEqual(expect.any(String));
   
});

// gets school from getSchool()
test('gets engineer github value', () => {
    const intern = new Intern('Naruto', 30, 'naruto@email.com', 'UCONN');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// gets id from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Naruto', 30, 'naruto@email.com', 'UCONN');
    expect(intern.getRole()).toEqual("Intern");
});
