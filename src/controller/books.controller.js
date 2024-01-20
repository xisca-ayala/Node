const Book = require("../models/book");
const Response = require("../models/response");

let books = [
    new Book("El día que Nietzsche lloró", "blanda", "Irvin D. Yalom", 19, "/assets/img/imgBooks/Nietzsche.jpeg", 1 ),
    new Book("El monje que vendió su ferrari", "blanda", "Robin Sharma", 11, "/assets/img/imgBooks/monje.jpg", 2),
    new Book("Reina roja", "dura ", "Juan Gómez-Jurado", 21,"/assets/img/imgBooks/reina.jpg", 3 )
];

let response = new Response(false, 200, '', null);

function getBooks(req, res){
    res.status(200);
    if(req.query.id) {
        const filteredBooks = books.filter(book => book.id == req.query.id);
        response.message = 'Libro econtrado';
        response.data = filteredBooks;
        if(filteredBooks.length == 0) {
            response.err = true;
            response.code = 404;
            response.message = 'Libro no encontrado';
            response.data = books;
            res.status(404);
        }
    } else {
        response.message = 'Listado de libros';
        response.data = books;
        }
    res.send(response);
}

function createBook(req, res){
    res.status(200);
    if(books.findIndex(book => book.id == req.query.id) >= 0){
        response.message = 'Ya existe un libro con este id';
    } else {
        let book = new Book(
            req.body.title, 
            req.body.type, 
            req.body.author, 
            req.body.price, 
            req.body.photo, 
            req.body.id);
        books.push(book);
        response.message = 'Libro creado';
        response.data = book;
    }
    res.send(response);
}

function updateBook(req, res){
    res.status(200);
    if(req.body.id && books.findIndex(book => book.id == req.body.id) >= 0){
        let book = new Book(req.body.title, 
            req.body.type, 
            req.body.author, 
            req.body.price, 
            req.body.photo, 
            req.body.id);
        books[books.findIndex(book => book.id == req.body.id)] = book;
        response.message = 'Libro modificado';
        response.data = book;
    } else {
        res.status(404);
        response.err = true;
        response.code = 404;
        response.message = 'Libro no encontrado';
    }
    res.send(response);
}

function deleteBook(req, res){
    res.status(200);
    if(req.query.id && books.findIndex(book => book.id == req.query.id) >= 0){
        books.splice(books.findIndex(book => book.id == req.query.id), 1);
        response.message = 'Libro eliminado';
        response.data = books;
    } else {
        res.status(404);
        response.err = true;
        response.code = 404;
        response.message = 'Libro no encontrado';
    }
    res.send(response);
}

module.exports = {getBooks, createBook, updateBook, deleteBook};