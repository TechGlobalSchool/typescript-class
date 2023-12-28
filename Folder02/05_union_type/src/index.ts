// Union Type example

// const statusCode = 200; // '200';
let statusCode: number | string;

statusCode = 200; // works
statusCode = '200' // works


// Example use case

// Union type
type StatusCode = 'active' | 'inactive' | 'new';

// Interface
interface User {
    id: number;
    name: string;
    status: StatusCode; // union type usage
}


// user object
const primaryUser: User = {
    id: 1,
    name: 'John',
    status: 'new'
}

const inactiveUser: User = {
    id: 2,
    name: 'Jane',
    status: 'inactive'
}

const someUser: User = {
    id: 3,
    name: 'Joe',
    status: 'active'
}

// const someOtherUser: User = {
//     id: 3,
//     name: 'Joe',
//     status: 'deactivated'
// }

// console.log(someOtherUser);