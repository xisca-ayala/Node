const Book = require("../models/book");

let book = new Book('Test title', 'Test type', 'Test author', 123, 'Test photo', 1);

function getBook(req, res){
    res.status(200).send({message: 'Book found',
        data: book});
}

function createBook(req, res){
    book = new Book(req.query.title, 
        req.query.type, 
        req.query.author, 
        req.query.price, 
        req.query.photo, 
        req.query.id);
    res.status(200).send({message: 'Book created',
        data: book});
}

function updateBook(req, res){
    book = new Book(req.query.title, 
        req.query.type, 
        req.query.author, 
        req.query.price, 
        req.query.photo, 
        req.query.id);
    res.status(200).send({message: 'Book updated',
        data: book});
}

function deleteBook(req, res){
    book = null;
    res.status(200).send({message: 'Book deleted'});
}

module.exports = {getBook, createBook, updateBook, deleteBook};