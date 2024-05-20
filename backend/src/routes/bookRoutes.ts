import express from "express";
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
  getCriticsByBook
} from "../controlers/bookController";

const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.get("/books/:id/critics", getCriticsByBook);
router.post("/addBook", addBook);
router.delete("/books/:id", deleteBook);
router.put("/editBook/:id", updateBook);

export default router;
