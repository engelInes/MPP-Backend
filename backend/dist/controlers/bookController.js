"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.addBook = exports.getBookById = exports.getBooks = void 0;
const booksList_1 = __importDefault(require("./booksList"));
const book_1 = require("../models/book");
//import {faker} from '@faker-js/faker';
const getBooks = (req, res) => {
    res.json(booksList_1.default);
};
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const book = booksList_1.default.find((cBook) => cBook.id === id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).send("Book not found");
    }
});
exports.getBookById = getBookById;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name: title, author, genre, image: pictureUrl } = req.body;
        if (!id || !title || !author || !genre || !pictureUrl) {
            return res.status(400).json({ message: "All fields are required" });
        }
        //validation
        if (typeof id !== 'number') {
            return res.status(400).json({ message: "Invalid data type for numeric fields" });
        }
        const newBook = new book_1.Book(booksList_1.default.length + 1, title, author, genre, pictureUrl);
        booksList_1.default.push(newBook);
        return res.status(201).json(newBook);
    }
    catch (error) {
        console.error("Error adding book:", error);
        return res.status(500).json({ message: "Server error" });
    }
});
exports.addBook = addBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const index = booksList_1.default.findIndex((cBook) => cBook.id === id);
    if (index > -1) {
        booksList_1.default.splice(index, 1);
        res.status(204).send();
    }
    else {
        res.status(404).send("Book not found");
    }
});
exports.deleteBook = deleteBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const book = booksList_1.default.find((cBook) => cBook.id === id);
    if (book) {
        const { id, title, author, genre, image: pictureUrl } = req.body;
        // if (typeof id !== "number") {
        //   return res
        //     .status(400)
        //     .json({ message: "Invalid data type for numeric fields" });
        // }
        if (title)
            book.title = title;
        if (author)
            book.author = author;
        if (genre)
            book.genre = genre;
        if (pictureUrl)
            book.pictureUrl = pictureUrl;
        res.json(book);
    }
    else {
        res.status(404).send("Book not found");
    }
});
exports.updateBook = updateBook;
