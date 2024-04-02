const myLibrary = [];
let cardList = null;
let btn = document
  .querySelector('button')
  .addEventListener('click', addBookToLibrary);
let input = document.querySelector('input');
let bookList = document.querySelector('div');

function Book(title) {
  this.title = title;
}

function addBookToLibrary() {
  let newBookTitle = input.value;
  if (newBookTitle === '') {
    alert('Please Enter Valid Title');
    return;
  }
  let newBook = new Book(newBookTitle);

  myLibrary.push(newBook);
  console.log(myLibrary);
  input.value = '';
  input.textContent = '';
  displayCards(myLibrary);
}

function displayCards(book) {
  bookList.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');

    let titleParagraph = document.createElement('p');
    titleParagraph.textContent = book[i].title;

    card.appendChild(titleParagraph);

    bookList.appendChild(card);
  }
}
