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