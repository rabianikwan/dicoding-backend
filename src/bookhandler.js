const { booksGet , books} = require('./books')

//GET RESPONSE

//POST RESPONSE
exports.resNameNull = {
    status: "fail",
    message: "Gagal menambahkan buku. Mohon isi nama buku"
}

exports.resReadGreater = {
    status: "fail",
    message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
}

exports.searchResultFail = {
    status: "fail",
    message: "Buku tidak ditemukan"
}
exports.updateNoName = {
    status: "fail",
    message: "Gagal memperbarui buku. Mohon isi nama buku"
}

exports.updateReadGreater = {
    status: "fail",
    message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}

exports.updateID404 = {
    "status": "fail",
    "message": "Gagal memperbarui buku. Id tidak ditemukan"
}

exports.updateSuccess = {
    "status": "success",
    "message": "Buku berhasil diperbarui"
}

exports.deleteID404 = {
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
}

exports.successDel = {
    "status": "success",
    "message": "Buku berhasil dihapus"
}
