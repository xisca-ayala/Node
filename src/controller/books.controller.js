const Book = require("../models/book");

let books = [new Book('Test title', 'Test type', 'Test author', 123, 'Test photo', 1)];

function getBooks(req, res){
    let result;
    let message;
    if(req.query.id) {
        message = 'Libro encontrado';
        result = books.filter(book => book.id == req.query.id);
        if(result.length == 0) {
            message = 'Libro no encontrado';
        }
    } else {
        message = 'Todos los libros';
        result = books;
    }
    res.status(200).send({message: message,
        data: result});
}

function createBook(req, res){
    let message;
    if(books.findIndex(book => book.id == req.query.id) >= 0){
        message = 'Un libro con este id ya existe';
    } else {
        let book = new Book(req.query.title, 
            req.query.type, 
            req.query.author, 
            req.query.price, 
            req.query.photo, 
            req.query.id);

        books.push(book);
        message = 'Libro creado';
    }
    res.status(200).send({message: message});
}

function updateBook(req, res){
    let message;
    if(req.query.id) {
        if(books.findIndex(book => book.id == req.query.id) >= 0){
            let book = new Book(req.query.title, 
                req.query.type, 
                req.query.author, 
                req.query.price, 
                req.query.photo, 
                req.query.id);

            books[books.findIndex(book => book.id == req.query.id)] = book;
            message = 'Libro modificado';
        } else {
            message = 'Libro no modificado';
        }

    } else {
        message = 'Libro no encontrado';
    }
    res.status(200).send({message: message});
}

function deleteBook(req, res){
    let message;
    if(req.query.id){
        if(books.findIndex(book => book.id == req.query.id) >= 0){
            books.splice(books.findIndex(book => book.id == req.query.id), 1);
            message = 'Libro eliminado';
        } else {
            message = 'Lbro no encontrado';
        }

    } else {
        message = 'Id del libro no encontrado';
    }
    res.status(200).send({message: message});
}

module.exports = {getBooks, createBook, updateBook, deleteBook};