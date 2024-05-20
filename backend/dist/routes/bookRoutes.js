"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controlers/bookController");
const router = express_1.default.Router();
router.get("/books", bookController_1.getBooks);
router.get("/books/:bookId", bookController_1.getBookById);
router.post("/addBook", bookController_1.addBook);
router.delete("/books/:bookId", bookController_1.deleteBook);
router.put("/editBook/:bookId", bookController_1.updateBook);
exports.default = router;
