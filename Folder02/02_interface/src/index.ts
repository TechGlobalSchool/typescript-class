
interface Person {
    id: number;
    name: string;
    birthDate?: Date;
}
const person1: Person = {
    id: 1,
    name: 'John'
}

const person2: Person = {
    id: 2,
    name: 'Jane'
}

// Optional properties with Interface
const person3: Person = {
    id: 3,
    name: 'Joe',
    birthDate: new Date('01/01/1980') // If no ? sign: Object literal may only specify known properties, and 'birthDate' does not exist in type 'Person'
}

const person4: Person = {
    id: 3,
    name: 'Joe',
    birthDate: '01/01/1980' // Even though birthDate is optional, TS still infers the type
}

// Extending Interfaces

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: number;
}

interface Person1 extends Address {
    id: number;
    name: string;
}

const personWithAddress: Person1 = {
    id: 4,
    name: 'Yuri',
    line1: '1111 Street',
    line2: 'Apt 1',
    city: 'NY',
    state: 'NY',
    zipCode: 11111 
}

