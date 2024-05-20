import { Request, Response } from "express";
import { BookModel } from "../models/bookModel";
import { CriticModel } from "../models/criticModel";

export const getBooks = async (req: Request, res: Response) => {
  //res.json(controller.booksList);
  try {
    const books = await BookModel.find({});
    res.json(books);
  } catch (error) {
    console.log("error getting books: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  //const book = controller.booksList.find((cBook) => cBook.id === id);
  const book = await BookModel.find({ id: id });
  if (book.length > 0) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const book = new BookModel(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error adding new book:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const book = await BookModel.findOne({ id: id });
    if (!book) {
      return res.status(404).send("book not found");
    }
    await CriticModel.deleteMany({ bookId: id });
    await book.deleteOne();
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting food item:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const currentBook: any = await BookModel.findOne({ id: id });

  if (currentBook.length === 0) {
    res.status(404).send("book not found");
  } else {
    const { title, author, genre, pictureUrl } = req.body;

    if (title) currentBook.title = title;
    if (author) currentBook.author = author;
    if (genre) currentBook.genre = genre;
    if (pictureUrl) currentBook.pictureUrl = pictureUrl;

    await currentBook.save();
    res.json(currentBook);
  }
};

export const getCriticsByBook = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const critics = await CriticModel.find({ id: bookId });
  if (critics.length > 0) {
    res.json(critics);
  } else {
    res.status(404).send("Critics not found for book");
  }
};
