// Enums

// Default enum
enum UserResponse {
    No,
    Yes
}

// Numeric enum
enum UserResponse1 {
    No = 0,
    Yes = 1
}

// String enum
enum UserResponse2 { 
    No = 'NO',
    Yes = 'YES'
}

// Heterogenous enum
enum UserResponse3 {
    No = 1,
    Yes = 'YES'
}


// Example use case

// Interface
interface User {
    id: number;
    name: string;
    status: Status;
}

// Enum
enum Status  {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new'
}


// user object
const primaryUser: User = {
    id: 1,
    name: 'John',
    status: Status.Active
}

const inactiveUser: User = {
    id: 2,
    name: 'Jane',
    status: Status.Inactive
}

const someUser: User = {
    id: 3,
    name: 'Joe',
    status: 'active'
}