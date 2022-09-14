function Book(author,title,pageNumber,readStatus){
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

library = [];


function addToLibrary(book){
    library.push(book)
}

const book1 = new Book("Dav Pilkey","Dog Man",240,false);
const book2 = new Book("Stephenie Meyer","Midnight Sun"
,658,false);
addToLibrary(book1)
addToLibrary(book2)

const container = document.querySelector('.container');
for (const book of library){
    const div = document.createElement('div');
    div.classList.add('book');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = book.title;
    const author = document.createElement('h4');
    author.classList.add('author');
    author.textContent = book.author;
    const pageNumber = document.createElement('div');
    pageNumber.classList.add('pageNumber');
    pageNumber.textContent = book.pageNumber;
    const readStatus = document.createElement('button');
    readStatus.classList.add('readStatus');
    readStatus.textContent = "Mark as read"
}