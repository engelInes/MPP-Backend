export class Critic {
  public static nextId = 1;
  public criticId: number;
  public criticName: string;
  public bookId: number;

  public constructor(name: string, bookId: number) {
    this.criticId = Critic.nextId++;
    this.criticName = name;
    this.bookId = bookId;
  }
}
