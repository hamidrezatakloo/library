function Book(name,author,title,pageNumber,readStatus){
    this.name = name;
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

library = [];


function addToLibrary(book){
    library.push(book)
}