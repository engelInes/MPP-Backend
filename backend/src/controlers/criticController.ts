import { Request, Response } from "express";
import { CriticList } from "../../dataStore";
import { BookModel } from "../models/bookModel";
import { Critic } from "../models/critic";
import { CriticModel } from "../models/criticModel";

export const critics = new CriticList();
export const getCritics = async (req: Request, res: Response) => {
  //res.json(controller.booksList);
  try {
    const books = await critics.getCritics();
    res.json(books);
  } catch (error) {
    console.log("error getting critics: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCriticById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  //const book = controller.booksList.find((cBook) => cBook.id === id);
  const book = await CriticModel.find({ criticId: id });
  if (book.length > 0) {
    res.json(book);
  } else {
    res.status(404).send("critic not found");
  }
};

export const addCritic = async (req: Request, res: Response) => {
  try {
    const { criticName, bookId } = req.body;
    const newCritic = new Critic(criticName, bookId);

    console.log("ADD:", newCritic);
    const addedCritic = await critics.addCritic(newCritic);
    console.log("added critic", addedCritic);
    return res.status(201).json(addedCritic);
    //return res.status(201).json(newCritic);
  } catch (error) {
    console.error("Error adding new book:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteCritic = async (req: Request, res: Response) => {
  // const id = parseInt(req.params.id);
  // const index = controller.booksList.findIndex((cBook) => cBook.id === id);
  // if (index > -1) {
  //   controller.booksList.splice(index, 1);
  //   res.status(204).send();
  // } else {
  //   res.status(404).send("Book not found");
  const id = parseInt(req.params.id);

  console.log(id);
  const critic = await CriticModel.findOne({ criticId: id });

  console.log("INES: ", critic);

  if (!critic) {
    res.status(404).send("Critic not found");
  } else {
    await critic.deleteOne();
    res.status(204).send();
  }
  //res.json(review);
  // }
};

export const updateCritic = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const currentCriti: any = await CriticModel.findOne({ criticId: id });

  if (currentCriti.length === 0) {
    res.status(404).send("critic not found");
  } else {
    const newBook = await BookModel.findOne({ id: req.body.bookId });
    if (!newBook) {
      const addBook = new BookModel({
        id: req.body.id,
        title: "",
        author: "",
        genre: "",
        pictureUrl: "",
      });
      await addBook.save();
    }
    const { criticName, bookId } = req.body;
    currentCriti.criticName = criticName;
    currentCriti.bookId = bookId;

    await currentCriti.save();
    res.json(currentCriti);
  }
};
