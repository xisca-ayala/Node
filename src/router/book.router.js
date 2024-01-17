const {Router} = require("express");
const router = Router();
const bookCtrl = require('../controller/book.controller'); 

router.use("/*", function(req, res, next){
    console.log('Petición recibida del cliente');
    console.log('URL: ' + req.hostname);
    console.log('Method: ' + req.method);
    console.log('User-agent: ' + req.headers["user-agent"]);
    next();
});

router.get("/book", bookCtrl.getBook);

router.post("/book", bookCtrl.createBook);

router.put("/book", bookCtrl.updateBook);

router.delete("/book", bookCtrl.deleteBook);

module.exports = router; 