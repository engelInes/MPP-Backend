"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, genre, pictureUrl) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pictureUrl = pictureUrl;
    }
}
exports.Book = Book;
