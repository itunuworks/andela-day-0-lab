'use strict'

var myApp = require('../app/main.js');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).toBe(101);
  });

  it("should return `19` for number indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(19)).toBe(19);
  });

  it("should return `FizzBuzz` for 60", function() {
    expect(myApp.fizzBuzz(60)).toBe('FizzBuzz');
  });

  it("should return `Buzz` for 1105", function() {
    expect(myApp.fizzBuzz(1105)).toBe('Buzz');
  });

  it("should return `Fizz` for 999", function() {
    expect(myApp.fizzBuzz(999)).toBe('Fizz');
  });
})