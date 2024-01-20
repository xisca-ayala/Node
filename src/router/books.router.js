const {Router} = require("express");
const router = Router();
const booksCtrl = require('../controller/books.controller'); 

router.get("/books", booksCtrl.getBooks);

router.post("/books", booksCtrl.createBook);

router.put("/books", booksCtrl.updateBook);

router.delete("/books", booksCtrl.deleteBook);

module.exports = router; 