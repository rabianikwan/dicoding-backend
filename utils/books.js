const { nanoid } = require('nanoid');
const date = new Date().toLocaleTimeString()
const books = [];

const checkName = (name) => {
    if (!name) {

    }
}
class Books {
    constructor(name, year, author, summary, publisher, pageCount, readPage, reading) {
        this.id = nanoid(16);
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.reading = reading;
        this.finished = (readPage === pageCount);
        this.insertedAt = date;
        this.updatedAt = this.insertedAt;
    }
}

exports.books = books;
exports.Books = Books;