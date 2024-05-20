export class Book {
  public static nextId = 1;
  public id: number;
  public title: string;
  public author: string;
  public genre: string;
  public pictureUrl: string;

  public constructor(
    id: number,
    title: string,
    author: string,
    genre: string,
    pictureUrl: string
  ) {
    this.id = Book.nextId++;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pictureUrl = pictureUrl;
  }
}
