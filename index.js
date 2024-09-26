// Accessing DOM Elements
const addBook = document.querySelector(".addBook");
const popupForm = document.querySelector(".popupForm");
const submitForm = document.querySelector(".submit");
const bookContainer = document.querySelector(".bookContainer")
const removeBTN = document.querySelectorAll('.remove')

// Initialize the library
const myLibrary = [];

// Objects and Constructors
function books(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

// Take user's input and store the new book objects into an array
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;

    let newBook = new books(title, author, year, pages);
    myLibrary.push(newBook);
}

// loops though the array and displays each book on the page
function loopLibrary() {
    bookContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.id = i
        bookContainer.appendChild(bookDiv)

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('displayTitles')
        bookTitle.innerText = `${book.title}`;
        bookDiv.appendChild(bookTitle);

        const bookAuthor = document.createElement('div')
        bookAuthor.classList.add('displayAuthor')
        bookAuthor.id = 'info'
        bookAuthor.innerText = `Author:${book.author}`;
        bookDiv.appendChild(bookAuthor);

        const bookYear = document.createElement('div')
        bookYear.classList.add('displayYear')
        bookYear.id = 'info'
        bookYear.innerText = `Year:${book.year}`;
        bookDiv.appendChild(bookYear);

        const bookPages = document.createElement('div')
        bookPages.classList.add('displayPages')
        bookPages.id = 'info'
        bookPages.innerText = `Pages:${book.pages}`;
        bookDiv.appendChild(bookPages)

    }
}

// Event Handling
addBook.addEventListener("click", function() {
    popupForm.style.display = "block"; // Show the popup form
});

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();

    addBookToLibrary()
    loopLibrary()

    popupForm.style.display = "none";
    submitForm.reset();
});


