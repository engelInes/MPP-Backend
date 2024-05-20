import { Book } from "../models/book";
const { faker } = require("@faker-js/faker");

const booksList: Book[] = [
  {
    id: 1,
    title: "Cand corpul spune nu",
    author: "Gabor Mate",
    genre: "Dezvoltare Personala",
    pictureUrl: "https://cdn.dc5.ro/img-prod/1276047538-0.jpeg",
  },
  {
    id: 2,
    title: "Alchimistul",
    author: "Paulo Coehlo",
    genre: "Fictiune",
    pictureUrl:
      "https://s13emagst.akamaized.net/products/494/493515/images/res_496dcfc856298a95409f6b4852ceb01f.jpg",
  },
  {
    id: 3,
    title: "Caraval",
    author: "Stephanie Garber",
    genre: "Fictiune",
    pictureUrl: "https://cdn.dc5.ro/img-prod/1660607-0.jpeg",
  },
  {
    id: 4,
    title: "Hotul de carti",
    author: "Markus Zusak",
    genre: "Istorie",
    pictureUrl: "https://cdn.dc5.ro/img-prod/9786066096133-1854482-240.jpg",
  },
  // {
  //   id: 5,
  //   title: "Acolo unde canta racii",
  //   author: "Delia Owens",
  //   genre: "Fictiune",
  //   pictureUrl:
  //     "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/ac5aee85/6934/4b94/a2a0/79a403abbff4/ac5aee85-6934-4b94-a2a0-79a403abbff4_1.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Diana",
  //   author: "Andrew Morton",
  //   genre: "Biografie",
  //   pictureUrl:
  //     "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/f55cd878/001a/4393/b323/08267823bcbf/f55cd878-001a-4393-b323-08267823bcbf_1.jpg?v=10",
  // },
  // {
  //   id: 7,
  //   title: "Printre tonuri cenusii",
  //   author: "Ruta Sepetys",
  //   genre: "Fictiune",
  //   pictureUrl:
  //     "https://media.elefant.ro/mnresize/1000/-/images/32/219532/printre-tonuri-cenusii_1_fullsize.jpg",
  // },
  // {
  //   id: 8,
  //   title: "Sotia Bancherului",
  //   author: "Cristina Alger",
  //   genre: "Fictiune",
  //   pictureUrl:
  //     "https://nemira.ro/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/c/r/cristina-alger---sotia-bancherului_c1.jpg",
  // },
];

const generateRandomBook = (): Book => {
  const genres = ["Fictiune", "Dezvoltare Personala", "Biografie"];
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const newBook: Book = {
    id: faker.datatype.number(),
    title: faker.lorem.words(2),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    genre: randomGenre,
    pictureUrl: faker.image.imageUrl(),
  };
  booksList.push(newBook);
  return newBook;
  // return {
  //   id: faker.datatype.number(),
  //   title: faker.lorem.words(2),
  //   author: faker.name.firstName() + " " + faker.name.lastName(),
  //   genre: randomGenre,
  //   pictureUrl: faker.image.imageUrl(),
  // };
};

const generateRandomBookItems = (count: number): Book[] => {
  const books: Book[] = [];
  for (let i = 0; i < count; i++) {
    books.push(generateRandomBook());
  }
  return books;
};

const randomBooks: Book[] = generateRandomBookItems(1);
booksList.push(...randomBooks);

export default { booksList, generateRandomBook };
