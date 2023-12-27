// Type alias

type Product = {
  title: string;
  price: string;
  quantity: number;
};

const cake: Product = {
  title: "Chococlate cake",
  price: "25$",
  quantity: 10,
};

const ps5 = {
    title: 'PS5',
    price: '399$',
    quantity: 5
}

// Example with interface
interface User {
    id: number;
    name: UserName;
    hobbies: Hobbies[];
}

type UserName = string;
type Hobbies = {type: string, name: string}

const user: User = {
    id: 1,
    name: 'John',
    hobbies: [
        {type: 'sport', name: 'skiing'}, 
        {type: 'education', name: 'reading'}
    ]
}

// Extending Type alias

type Animal = {
    breed: string,
    age?: number
}
type Dog = {
    name: string
} & Animal;

const dog: Dog = {
    name: 'Baliiiii',
    breed: 'chihuahua'
}
