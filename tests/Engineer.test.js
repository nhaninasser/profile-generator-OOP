// using the engineer constructor
const Engineer = require('../lib/engineer');

// makes engineer object
test('creates an engineer object', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com', 'Uzumakinaruto03');

   expect(engineer.github).toEqual(expect.any(String));
   
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Naruto', 30, 'naruto@email.com', 'Uzumakinaruto03');

    expect(engineer.github()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// gets id from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Naruto', 30, 'naruto@email.com', 'Uzumakinaruto03');
    expect(engineer.getRole()).toEqual("Engineer");
});

    

