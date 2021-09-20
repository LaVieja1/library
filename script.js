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
  
$newButton = document.querySelector('.new');
$table = document.querySelector('.table');
$tbody = $table.querySelector('tbody');

$form = document.querySelector('.form');
$titleInput = $form.querySelector('#title');
$authorInput = $form.querySelector('#author');
$pagesInput = $form.querySelector('#pages');
$submitButton = $form.querySelector('#submit');
$returnButon = $form.querySelector('#return');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = () => {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const getReadValue = () => {
    if($form.querySelector('input[name="read"]:checked').value == 'yes') return true;
    else return false;
}

$submitButton.addEventListener('click', () => {
    addBookToLibrary();
});