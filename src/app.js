const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling");
const bookRouter = require("./router/book.router");
const booksRouter = require("./router/books.router");

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bookRouter);
app.use(booksRouter);
app.use(errorHandling);
app.use("/*", function(req, res, next){
    console.log('Petición recibida del cliente');
    console.log('URL: ' + req.hostname);
    console.log('Method: ' + req.method);
    console.log('User-agent: ' + req.headers["user-agent"]);
    next();
});

app.get("/", function(req, res){
    res.status(200).send({ok: true,
        message: 'Recibido!'});
});

app.get("/bye", function(req, res){
    res.status(200).send({ok: true,
        message: 'Adios!'});
});

module.exports = app; 