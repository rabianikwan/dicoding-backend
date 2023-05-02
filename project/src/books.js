const { nanoid } = require("nanoid");
const dateNow = new Date();
const dateNowString = dateNow.toISOString().split("T")[0];
const books = [];
class booksEntries {
  constructor(
    name,
    year = 0,
    author,
    summary,
    publisher,
    pageCount = 0,
    readPage = 0,
    reading = false
  ) {
    this.id = nanoid(16);
    this.name = name;
    this.year = year;
    this.author = author;
    this.summary = summary;
    this.publisher = publisher;
    this.pageCount = pageCount;
    this.readPage = readPage;
    this.reading = reading;
    this.insertedAt = dateNowString;
    this.updatedAt = this.insertedAt;
    this.pageCount === this.readPage
      ? (this.finished = true)
      : (this.finished = false);
  }
  entries() {
    books.push(this);
    return this;
  }
}
module.exports = { booksEntries, books };
