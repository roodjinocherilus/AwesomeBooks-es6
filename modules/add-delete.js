
import {buttonAdd} from "./dom-element.js";
import {deleteBtn} from "./dom-element.js";
import {Book} from "./class.js"
import {Library} from "./class.js"
import {display} from "./display-books.js"


let index = 0;

const getContent = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const titleBook = title.value;
    const authorBook = author.value;
    const message = document.querySelector('#message');
    if (titleBook === '' || authorBook === '') {
      message.classList.remove('show');
      return;
    }
    const book = new Book(titleBook, authorBook);
    let storage = localStorage.getItem('books');
    storage = JSON.parse(storage);
    const library = new Library(book, storage);
    library.add();
    display();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
  
  buttonAdd.addEventListener('click', getContent);
  
  
  function getIndex() {
    const library = new Library(null, null, index);
    library.remove();
    display();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      index = btn.value;
      getIndex();
    });
  });


  