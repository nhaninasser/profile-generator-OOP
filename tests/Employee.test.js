// using employee constructor
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/employee');

// makes employee object
test('creates an employee object', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email.toEqual(expect.any(String));
});

// gets id from getId()
test('gets employee name', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
    expect(employee.getName()).toEqual(expect.any(String))
});

    

