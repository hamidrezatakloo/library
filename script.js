function Book(author,title,pageNumber){
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
}

library = [];


function addToLibrary(book){
    library.push(book)
}

const book1 = new Book("Dav Pilkey","Dog Man",240);
const book2 = new Book("Stephenie Meyer","Midnight Sun",658);
addToLibrary(book1)
addToLibrary(book2)

const container = document.querySelector('.container');
function createBooks(){
    // clean container child elements
    container.replaceChildren();

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
        readStatus.textContent = "Mark as read";
        const removeButton = document.createElement('img');
        removeButton.setAttribute('src','./images/close-circle.svg');
        removeButton.classList.add('remove-button');  
        div.append(title,author,pageNumber,readStatus);
        container.appendChild(div);
    }
}

function togglePopup(){
    const popup = document.querySelector('.pop-up');
    const style = getComputedStyle(popup);
    style.display=='none'?popup.style.display='initial':popup.style.display='none';
}

document.addEventListener('click',(e)=>{
    if (e.target.matches('.readStatus'))
        e.target.textContent==='Mark as read'?
        e.target.textContent='Read ✔':
        e.target.textContent='Mark as read';

    if (!e.target.matches('.add-book'))
        return;
    togglePopup();
})

document.addEventListener('click',(e)=>{
    if (!e.target.matches('form>button'))
        return;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageNumber = document.getElementById("pageNumber").value;
    const book =  new Book(author,title,pageNumber);
    addToLibrary(book);
    togglePopup();
    createBooks();
})

createBooks();
