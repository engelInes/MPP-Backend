const faker = require("faker");
import controller from "/src/controlers/booksList";
import { BookModel } from "./src/models/bookModel";
import { CriticModel, ICritic } from "./src/models/criticModel";

export class CriticList {
  public async addCritic(criticData: any): Promise<ICritic> {
    const book = await BookModel.findOne({ id: criticData.bookId });
    if (!book) {
      const newBook = new BookModel({ title: criticData.title });
      await newBook.save();
    }

    const critic = new CriticModel(criticData);
    const savedCritic = await critic.save();
    return savedCritic;
  }

  public async createCritic(): Promise<ICritic> {
    const criticName = faker.lorem.words(2);

    const randomBook = faker.random.arrayElement(controller.booksList);
    const bookId = randomBook.id;

    const criticData = {
      criticName: criticName,
      bookId: bookId,
    };

    const critic = new CriticModel(criticData);
    const savedCritic = await critic.save();
    return savedCritic;
  }

  public async getCritics(): Promise<ICritic[]> {
    try {
      const critics = await CriticModel.find({});
      return critics;
    } catch (error) {
      console.error("Error getting critics:", error);
      return [];
    }
  }
}
