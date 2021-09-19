/*
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 600, "readed")
*/

let myLibrary = [
    {
      title: "A Game of Thrones",
      author: "George R. R. Martin",
      pages: 694,
      read: false
    }
];
  

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  
}