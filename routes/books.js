'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const rootDir = require('../utils/path')
const libs =require('../utils/books')

const book = libs.books;
const Books = libs.Books;

router.post('/books', (req, res, next) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;
    if (!name) {
        res.status(400)
            .send({
            "status": "fail",
            "message": "Gagal menambahkan buku. Mohon isi nama buku"
        })
    } else if (readPage > pageCount) {
        res.status(400)
            .send({
                "status": "fail",
                "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
            })
    } else {
        book.push(new Books(name, year, author, summary, publisher, pageCount, readPage))
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