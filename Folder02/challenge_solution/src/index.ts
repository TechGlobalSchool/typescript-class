// Interface here
interface Book {
    id: number;
    title: string;
    status: Status;
    completedOn?: Date;
}

type Status = 'done' | 'in-progress' | 'read';

// enum Status {
//     Done = 'done', 
//     InProgress = 'in-progress',
//     Read = 'read'
// }

const books: Book[] = [
    { id: 1, title: "Lion King", status: 'done', completedOn: new Date("2023-12-26") },
    { id: 2, title: "Hobbit", status: 'in-progress' },
    { id: 3, title: "Don Quixote", status: 'read' },
]


// type Status = 'done' | 

function addBookToLibrary(book: string): Book {
    const id = getNextId(books)

    const newBook = {
        id,
        title: book,
        status: 'read',
    }
    books.push(newBook);
    return newBook
}

// You can pass any object but make sure that object to match at least id
function getNextId<T extends {id: number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newBook = addBookToLibrary("City of Bones")

console.log(JSON.stringify(newBook))