/* PRIMITIVE TYPES */

let x = 5;
// let x; // Variable 'x' implicitly has an 'any' type, but a better type may be inferred from usage.
// let x: number; // It works

let y: string;
let z: boolean;

y = 'Hello';
// y = 124; // Type 'number' is not assignable to type 'string'.
z = true;
// z = 'true'; // Type 'string' is not assignable to type 'boolean'.


/* OTHER TYPES */

let a: Date; // date type
let b: string[]; // array of strings
// let b: any; // array of strings => Not reccomended
let c: number[]; // array of numbers
let d: {id: number, name: string}; // object
let f: { author: string, book: {title: string, year: number }} // nested object

c = [1,2,3]; 
// c = [1,'2',3] // Type 'string' is not assignable to type 'number'

d = {id: 1, name: 'John'}
// d = {id: 1, name: true} // Type 'boolean' is not assignable to type 'string'

b = ['A', 'B']
// b = 'Hello';
b = 'Hello' as any; // type casting => Not reccomended


