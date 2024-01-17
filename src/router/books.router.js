const {Router} = require("express");
const router = Router();
const booksCtrl = require('../controller/books.controller'); 

router.use("/*", function(req, res, next){
    console.log('Petición recibida del cliente');
    console.log('URL: ' + req.hostname);
    console.log('Method: ' + req.method);
    console.log('User-agent: ' + req.headers["user-agent"]);
    next();
});

router.get("/books", booksCtrl.getBooks);

router.post("/books", booksCtrl.createBook);

router.put("/books", booksCtrl.updateBook);

router.delete("/books", booksCtrl.deleteBook);

module.exports = router; 