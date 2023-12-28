// Union Type example
// const statusCode = 200; // '200';
let statusCode;
statusCode = 200; // works
statusCode = '200'; // works
// user object
const primaryUser = {
    id: 1,
    name: 'John',
    status: 'new'
};
const inactiveUser = {
    id: 2,
    name: 'Jane',
    status: 'inactive'
};
const someUser = {
    id: 3,
    name: 'Joe',
    status: 'active'
};
// const someOtherUser: User = {
//     id: 3,
//     name: 'Joe',
//     status: 'deactivated'
// }
// console.log(someOtherUser);
