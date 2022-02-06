// using employee constructor
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/employee');

// makes employee object
test('creates an employee object', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.any(Number));
   expect(employee.email).toEqual(expect.any(String));
});

// gets id from getName()
test('gets employee name', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
    expect(employee.getName()).toEqual(expect.any(String))
});

// gets id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
    expect(employee.getID()).toEqual(expect.any(Number))
});

// gets id from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets id from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Naruto', 30, 'naruto@email.com');
    expect(employee.getRole()).toEqual(expect.any("Employee"));
});

    

