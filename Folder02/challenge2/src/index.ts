// Enums
enum BookGenre {
    Fiction,
    NonFiction,
    Mystery,
    Romance,
  }
  
  // Interfaces
  interface Book {
    title: string;
    author: string;
    genre: BookGenre;
  }
  
  // Function to log books
  function logBook(book: Book) {
    console.log(`Title: ${book.titl}, Author: ${book.author}, Genre: ${book.genre}`);
  }
  
  // Generic class for managing a library
  class Library<T> {
    books: T[];
  
    constructor(books: T[]) {
      this.books = books;
    }
  
    addBook(book: T) {
      this.books.push(book);
    }
  
    removeBook(book: T) {
      this.books = this.books.filter((b) => b !== book);
    }
  
    listBooks() {
      this.books.forEach((book) => {
        logBook(book);
      });
    }
  }
  
  // Creating instances of books
  const book1: Book = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: BookGenre.Fiction,
  };
  
  const book2: Book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: BookGenre.NonFiction,
  };
  
  const book3: Book = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: BookGenre.Mystery,
  };
  
  // Creating a library instance
  const library = new Library<Book>([book1, book2, book3]);
  
  library.listBooks();
  
  // Adding a new book to the library
  const newBook: Book = {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: BookGenre.Romance,
  };
  
  library.addBook(newBook);
  
  // Listing books after addition
  library.listBooks();
  
  // Removing a book from the library
  library.removeBook(book2);
  
  // Listing books after removal
  library.listBooks();