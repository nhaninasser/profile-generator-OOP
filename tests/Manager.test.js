// using the Manager constructor
const Manager = require('../lib/manager');

// makes manager object
test('creates an manager object', () => {
    const manager = new Manager('Naruto', 30, 'naruto@email.com', 5);

   expect(manager.officeNumber).toEqual(expect.any(Number));
   
});
// gets role from getRole()
test('gets role of manager', () => {
    const Manager = new Manager('Naruto', 30, 'naruto@email.com', 'Uzumakinaruto03');
    expect(manager.getRole()).toEqual("Manager");
});

    

