const books = []

const date = new Date().toISOString()

const { nanoid } = require('nanoid');

exports.createBook = (name, year, author, summary, publisher, pageCount, readPage, reading) => {
    let book = {}
    let getBooks = {}
    book.id = nanoid(16);
    book.name = name;
    book.year = year;
    book.author = author;
    book.summary = summary;
    book.publisher = publisher;
    book.pageCount = pageCount;
    book.readPage = readPage;
    book.finished = pageCount==readPage || false;
    book.reading = reading;
    book.insertedAt = date;
    book.updatedAt = book.insertedAt;
    books.push(book);
}


exports.books = books;

exports.bookSearcher = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
            return arr[i]
        }
    }
};

exports.bookSearcheri = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
            return i
        }
    }
};
