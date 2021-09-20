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

const createReadStatusTd = (book) => {
    let $readStatusTd = document.createElement('td');
    let $readStatusButton = document.createElement('button');
    $readStatusButton.textContent = 'Cambiar estado de leído';
    $readStatusButton.addEventListener('click', () => {
      book.read = !book.read;
      updateTable();
    });
    $readStatusTd.appendChild($readStatusButton);
    return $readStatusTd;
}
  
const removeFromLibrary = (index) => {
    myLibrary.splice(index, 1)
    $submitButton.removeEventListener('click', removeFromLibrary);
    updateTable();
}
  
const createEditTd = (book, index) => {
    let $editTd = document.createElement('td');
    let $editButton = document.createElement('button');
    $editButton.textContent = 'Editar';
    $editButton.addEventListener('click', () => {
      $titleInput.value = book.title;
      $authorInput.value = book.author
      $pagesInput.value = book.pages
      book.read ? $form.querySelector('#yes').checked = true : $form.querySelector('#no').checked = true;
      toggleHiddenElements();
      $submitButton.addEventListener('click', removeFromLibrary);
    });
    $editTd.appendChild($editButton);
    return $editTd;
}
  
const createDeleteTd = (index) => {
    let $deleteTd = document.createElement('td');
    let $deleteButton = document.createElement('button');
    $deleteButton.textContent = 'Eliminar';
    $deleteButton.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      updateTable();
    });
    $deleteTd.appendChild($deleteButton);
    return $deleteTd;
}

const updateTable = () => {
    $tbody.textContent = '';
  
    myLibrary.forEach((book, index) => {
      let $row = document.createElement('tr');
      Object.keys(book).forEach(prop => {
        let $newTd = document.createElement('td');
        $newTd.textContent = book[prop];
        if (prop == 'read') $newTd.textContent = book[prop] ? 'Read' : 'Not read';
        $row.appendChild($newTd);
      }); 
  
      $row.appendChild(createReadStatusTd(book));
      $row.appendChild(createEditTd(book, index));
      $row.appendChild(createDeleteTd(index));
      $tbody.appendChild($row);
    });
}

$submitButton.addEventListener('click', () => {
    addBookToLibrary();
    updateTable();
});