const Book = require("../models/book");
const Response = require("../models/response");

let book = new Book('Test title', 'Test type', 'Test author', 123, 'Test photo', 1);

function getBook(req, res){
    let response = new Response (false, 200, 'Libro', book);
    res.status(200).send(response);
}

function createBook(req, res){
    let response = new Response (false, 200, 'Libro creado', null);
    book = new Book(req.body.title, 
        req.body.type, 
        req.body.author, 
        req.body.price, 
        req.body.photo, 
        req.body.id);
    response.data = book;
    res.status(200).send(response);
}

function updateBook(req, res){
    let response = new Response (false, 200, '', null);
    if(book !== null && req.body.id == book.id){
        book = new Book(req.body.title, 
            req.body.type, 
            req.body.author, 
            req.body.price, 
            req.body.photo, 
            req.body.id);
        response.message = 'Libro modificado';
        response.data = book;
    } else {
        response.err = true;
        response.code = 404;
        response.message = 'Libro no encontrado';
    }
    res.status(200).send(response);
}

function deleteBook(req, res){
    let response = new Response (false, 200, '', null);
    if (req.query.id == book.id){
        book = null;
        response.message = 'El libro se ha eliminado';
    }else{
        response.err = true; 
        response.code = 404;  
        response.message = 'El libro no se ha encontrado';
    }
    res.status(200).send(response);
}

module.exports = {getBook, createBook, updateBook, deleteBook};