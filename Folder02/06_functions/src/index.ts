// Simple function examples

// Argument is type any, return type void. Implicit
function greet(name) {
    console.log(`Hello ${name}`);
}

// Argument is type any, return type void. Explicit
function greet1(name: any): void {
    console.log(`Hello ${name}`);
}

// Argument is type string, return type void. Explicit
function greet2(name: string): void {
    // return 'Hello'; // Error
    console.log(`Hello ${name}`);
}

// Argument is type string, return type string. Explicit
function greet3(name: string) {
    return `Hello ${name}`;
}

// Argument is type string, return type string. Implicit
function greet4(name: string) {
    return `Hello ${name}`;
}

// Ideal
function greet5(name: string) {
    console.log(`Hello ${name}`);
}

// Rest and Spread Operator

// Issue here
function maxNumber(...nums) {
    return Math.max(...nums);
}

maxNumber(1,2,3); // 3
maxNumber('1',2,3); // 3


// Fix by providing type
function maxNumber2(...nums: number[]): number {
    return Math.max(...nums);
}

// Fix by narrowing
function maxNumber3(...nums: number[]): number {
    // loop and check type of each element in nums
    // if(typeof el == 'number') {
        return Math.max(...nums);
    // }
}

maxNumber2(1,2,3); // 3
maxNumber2('1',2,3); // 3


// Our own example using interface

interface User {
    id: number;
    name: string;
}

// Issue
function clone(source: User) {
    return Object.apply({}, source);
}

const a: User = { id: 1, name: 'John'};
const b = clone(a); // any

// Fix
function clone2(source: User): User {
    return Object.apply({}, source);
}

const a2: User = { id: 1, name: 'John'};
const b2 = clone2(a2); // User