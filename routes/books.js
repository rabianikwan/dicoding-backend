const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const rootDir = require('../utils/path')
const libs =require('../utils/books')

const book = libs.books;

const harry = new libs.Books(
    'KKJ', 1996,
    'JK R', 'Wizard',
    'Gramedia', 968,
    200, true
)
router.post('/books', (req, res, next) => {
    const Books = libs.Books;
    if (!harry.name) {
        res.status(400)
            .send({
            "status": "fail",
            "message": "Gagal menambahkan buku. Mohon isi nama buku"
        })
    } else if (harry.readPage > harry.pageCount) {
        res.status(400)
            .send({
                "status": "fail",
                "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
            })
    } else {
        book.push(harry)
        res.status(200)
            .send({
                "status": "success",
                "message": "Berhasil menambahkan buku",
            })
    }

})
router.get('/books', (req, res, next) => {
    res.status(200)
        .send({
            "status": "success",
            "message": "Berhasil mendapatkan buku",
            "data" : { "books": book }
        })
})

module.exports = router