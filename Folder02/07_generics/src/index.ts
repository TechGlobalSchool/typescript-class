// Generics

interface User {
    id: number;
    name: string;
}

// Issue
function clone(source: User): User {
    return Object.apply({}, source);
}

const a: User = { id: 1, name: 'John'};
const b = clone(a); // User

/*
 What if i want to clone different object?
*/
interface Book {
    title: string;
    year: number;
}

const book: Book = {title: 'Hobbit', year: 2000}
const cloneOfBook = clone(book); // Error => Book !== User


/*
    Solution => Generics
*/

function clone2<T>(source:T): T {
    return Object.apply({}, source);
}

const toyota = {brand: 'Toyota', year: 2006}
const cloneOfCar = clone2(toyota);

const phone = {company: 'Apple', model: '15', price: '1099$'};
const cloneOfPhone = clone2(phone);


/*
    Multiple generic parameter types
*/
// Example function
function clone3<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

interface User1 {
    id: number;
    name: string;
}
interface User2 {
    id: number;
    name: string;
    status: string;
}

interface User3 {
    address: string;
    title: string;
}

function clone4<User1, User2>(source:User1): User2 {
    return Object.apply({}, source);
}


// const x = clone3({id: 1, name: 'John'}); // unknown
const x = clone3<User1, User2>({id: 1, name: 'John'}); // User2

const y = clone3<User1, User3>({id: 2, name: 'Jane'}) // Type 'User3' does not satisfy the constraint 'User1'.



// Example: function maxNumber (arr) { return number}

