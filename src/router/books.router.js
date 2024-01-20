const {Router} = require("express");
const router = Router();
const booksCtrl = require('../controller/books.controller'); 

router.get("/books", booksCtrl.getBooks);

router.post("/books/:book", booksCtrl.createBook);

router.put("/books/:book", booksCtrl.updateBook);

router.delete("/books", booksCtrl.deleteBook);

module.exports = router; 