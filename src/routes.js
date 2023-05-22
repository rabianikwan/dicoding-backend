const { createBook, booksGet, bookSearcher, books, bookSearcheri} = require('./books')
const { resGetBooks, resNameNull, resReadGreater, searchResultFail,
        updateNoName, updateReadGreater, updateID404, updateSuccess, deleteID404, successDel
} = require('./bookhandler')

module.exports = [
    //GET ALL BOOKS
    {
        method: 'GET',
        path: '/books',
        handler: (request, h) => {
            const sortBookName = request.query.name;
            const reading = request.query.reading;
            const finished = request.query.finished;

            if (sortBookName !== undefined) {
                return {
                    status: 'success',
                    data: {
                        books: books.map((book) => ({
                            id: book.id,
                            name: book.name,
                            publisher: book.publisher
                        })).filter((book) => book.name.toLowerCase().includes(sortBookName.toLowerCase())),
                    },
                }
            }
            if (reading !== undefined) {
                if (Number(reading) === 0) {
                    return {
                        status: 'success',
                        data: {
                            books: books.filter((book) => book.reading === false)
                                .map((book) => ({
                                id: book.id,
                                name: book.name,
                                publisher: book.publisher
                            })),
                        },
                    }
                }
                if (Number(reading) === 1) {
                    return {
                        status: 'success',
                        data: {
                            books: books.filter((book) => book.reading === true)
                                .map((book) => ({
                                id: book.id,
                                name: book.name,
                                publisher: book.publisher
                            })),
                        },
                    }
                }
            }
            if (finished !== undefined) {
                if (Number(finished) === 0) {
                    return {
                        status: 'success',
                        data: {
                            books: books.filter((book) => book.finished === false)
                                .map((book) => ({
                                    id: book.id,
                                    name: book.name,
                                    publisher: book.publisher
                                })),
                        },
                    }
                }
                if (Number(finished) === 1) {
                    return {
                        status: 'success',
                        data: {
                            books: books.filter((book) => book.finished === true)
                                .map((book) => ({
                                    id: book.id,
                                    name: book.name,
                                    publisher: book.publisher
                                })),
                        },
                    }
                }
            }
            return h.response({
                status: 'success',
                data: {
                    books: books.map((book) => ({
                        id: book.id,
                        name: book.name,
                        publisher: book.publisher})
                    )
                }
            })
            // return h.response(resGetBooks).code(200);
        }
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: function (request, h) {
            const book = bookSearcher(books, request.params.bookId);
            if (!book) {
                return h.response(searchResultFail).code(404)
            }
            else {
                return h.response({
                    status : "success",
                    data : { book : book }}).code(200)
            }
        }
    },
    //POST BOOKS
    {
        method: 'POST',
        path: '/books',
        handler: (request, h) => {
            try {
                const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
                if (!name) {
                    return h.response(resNameNull).code(400);
                } else if (readPage > pageCount) {
                    return h.response(resReadGreater).code(400);
                } else {
                    createBook(name, year, author, summary, publisher, pageCount, readPage, reading);
                    return h.response({
                        status: 'success',
                        message: 'Buku berhasil ditambahkan',
                        data: {
                            bookId: books[books.length - 1].id
                        }
                    }).code(201)
                }
            }catch (e) { console.log(e)}
        }
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: function (request, h) {
            const loc = bookSearcheri(books, request.params.bookId);
            const id = bookSearcher(books, request.params.bookId);
            const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
            if (!name) {
                return h.response(updateNoName).code(400);
            } else if (readPage > pageCount) {
                return h.response(updateReadGreater).code(400);
            } else if (!id) {
                return  h.response(updateID404).code(404);
            } else {
                books[loc].name = name,
                books[loc].year = year, books[loc].author = author, books[loc].summary = summary;
                books[loc].publisher = publisher,
                books[loc].pageCount = pageCount, books[loc].readPage = readPage;
                books[loc].reading = reading;
                return h.response(updateSuccess).code(200)
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: function (request, h) {
            const loc = bookSearcheri(books, request.params.bookId);
            const id = bookSearcher(books, request.params.bookId);
            if (!id) {
                return h.response(deleteID404).code(404);
            } else {
                books.splice(loc, 1)
                return h.response(successDel).code(200)
            }
        }

    }
];
