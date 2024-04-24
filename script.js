const myLibrary = [{title:'Book 1', author: 'bob', pages: '203', read: 'true'}];
let cardList = null;
let dialog = document.querySelector('dialog')
let openModal = document.querySelector('.openModal').addEventListener('click', () => {dialog.showModal()})
const form = document.querySelector('form')
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let readStatus = document.querySelector('select')
let bookList = document.querySelector('div');
const titleError = document.querySelector('#title + span.error')
const authorError = document.querySelector('#author + span.error')
const pagesError = document.querySelector('#pages + span.error')

form.addEventListener('submit', (event) => {
  if (!title.validity.valid) {
    showError()
    event.preventDefault()
    return
  } else if (!author.validity.valid){
    showError()
    event.preventDefault()
    return
  } else if (!pages.validity.valid){
    showError()
    event.preventDefault()
    return
  }
  event.preventDefault()
  addBookToLibrary()
  dialog.close()
})


function showError() {
  if(title.validity.valueMissing) {
    titleError.textContent = 'You need to enter a Title of a book'
  } else if (title.validity.typeMismatch) {
    titleError.textContent = 'Entered value needs to be text of a title.'
  } else if (title.validity.tooShort) {
    titleError.textContent = `Title should be at least ${title.minlength} character; You entered ${title.value.length}.`
  }

  titleError.classList.add('active')
}

class Book {
  constructor(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

class actionBooks extends Book {
  constructor(title, author, pages, read, genre){
    super(title, author, pages, read)
    this.genre = genre;
  }

  displayActionBook() {
    alert(`${this.title}, ${this.author}, ${this. pages}, ${this.read}, ${this.genre}`)
  }
}
let book2 = new actionBooks('bob', 'bob builder', 122, 'Read', 'Action')

function addBookToLibrary() {
  let newBookTitle = title.value;
  let newBookAuthor = author.value;
  let newBookPages = pages.value;
  let newBookStatus = readStatus.value;
  let newBook = new Book(newBookTitle,newBookAuthor, newBookPages, newBookStatus);

  myLibrary.push(newBook);
  console.log(myLibrary);
  displayCards(myLibrary);
}

function displayCards(book) {
  bookList.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');

    let titleParagraph = document.createElement('p');
    titleParagraph.textContent = `title: ${book[i].title}`; 

    let authorParagraph = document.createElement('p');
    authorParagraph.textContent = `author: ${book[i].author}`;

    let pagesParagraph = document.createElement('p')
    pagesParagraph.textContent = `pages: ${book[i].pages}`;

    let bookStatusParagraph = document.createElement('p');
    bookStatusParagraph.textContent = `Read Status: ${book[i].read}`;

    let deleteCard = document.createElement('button')
    deleteCard.classList.add('deleteCard')
    deleteCard.textContent = 'Delete Card' 
    deleteCard.addEventListener('click', () => {
      card.remove()
      removeCard(i)
    })

    let showGenre = document.createElement('button')
    showGenre.classList.add('showGenre')
    showGenre.textContent = 'Show Genre' 
    showGenre.addEventListener('click', () => {
      actionBooks.displayActionBook()
    })

    let toggleRead = document.createElement('input')
    toggleRead.type = 'checkbox';
    toggleRead.classList.add('check-box')
    toggleRead.addEventListener('change', () => { 
      this.checked = !this.checked 
      bookStatusParagraph.textContent = `Read Status: ${this.checked}`
    })

    card.appendChild(titleParagraph);
    card.appendChild(authorParagraph);
    card.appendChild(pagesParagraph);
    card.appendChild(bookStatusParagraph);
    card.appendChild(toggleRead)
    card.appendChild(deleteCard)
    card.appendChild(showGenre)

    bookList.appendChild(card);
  }
}

function removeCard(i) {
  myLibrary.splice(i, 1)
}

document.addEventListener('DOMContentLoaded', () => {
  displayCards(myLibrary)
})


