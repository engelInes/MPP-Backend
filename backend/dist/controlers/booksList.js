"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booksList = [
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
        pictureUrl: "https://s13emagst.akamaized.net/products/494/493515/images/res_496dcfc856298a95409f6b4852ceb01f.jpg"
    },
    {
        id: 3,
        title: "Caraval",
        author: "Stephanie Garber",
        genre: "Fictiune",
        pictureUrl: "https://cdn.dc5.ro/img-prod/1660607-0.jpeg"
    },
    {
        id: 4,
        title: "Hotul de carti",
        author: "Markus Zusak",
        genre: "Istorie",
        pictureUrl: "https://cdn.dc5.ro/img-prod/9786066096133-1854482-240.jpg"
    },
    {
        id: 5,
        title: "Acolo unde canta racii",
        author: "Delia Owens",
        genre: "Fictiune",
        pictureUrl: "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/ac5aee85/6934/4b94/a2a0/79a403abbff4/ac5aee85-6934-4b94-a2a0-79a403abbff4_1.jpg"
    },
    {
        id: 6,
        title: "Diana",
        author: "Andrew Morton",
        genre: "Biografie",
        pictureUrl: "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/f55cd878/001a/4393/b323/08267823bcbf/f55cd878-001a-4393-b323-08267823bcbf_1.jpg?v=10"
    },
    {
        id: 7,
        title: "Printre tonuri cenusii",
        author: "Ruta Sepetys",
        genre: "Fictiune",
        pictureUrl: "https://media.elefant.ro/mnresize/1000/-/images/32/219532/printre-tonuri-cenusii_1_fullsize.jpg"
    },
    {
        id: 8,
        title: "Sotia Bancherului",
        author: "Cristina Alger",
        genre: "Fictiune",
        pictureUrl: "https://nemira.ro/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/c/r/cristina-alger---sotia-bancherului_c1.jpg"
    }
];
// let book1: Book = new Book(
//   1,
//   "Cand corpul spune nu",
//   "Gabor Mate",
//   "Dezvoltare Personala",
//   "https://cdn.dc5.ro/img-prod/1276047538-0.jpeg"
// );
// let book2: Book = new Book(
//   2,
//   "Alchimistul",
//   "Paulo Coehlo",
//   "Fictiune",
//   "https://s13emagst.akamaized.net/products/494/493515/images/res_496dcfc856298a95409f6b4852ceb01f.jpg"
// );
// let book3: Book = new Book(
//   3,
//   "Caraval",
//   "Stephanie Garber",
//   "Fictiune",
//   "https://cdn.dc5.ro/img-prod/1660607-0.jpeg"
// );
// let book4: Book = new Book(
//   4,
//   "Hotul de carti",
//   "Markus Zusak",
//   "Istorie",
//   "https://cdn.dc5.ro/img-prod/9786066096133-1854482-240.jpg"
// );
// let book5: Book = new Book(
//   5,
//   "Acolo unde canta racii",
//   "Delia Owens",
//   "Fictiune",
//   "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/ac5aee85/6934/4b94/a2a0/79a403abbff4/ac5aee85-6934-4b94-a2a0-79a403abbff4_1.jpg"
// );
// let book6: Book = new Book(
//   6,
//   "Diana",
//   "Andrew Morton",
//   "Biografie",
//   "https://media.elefant.ro/mnresize/1000/-/is/product-images/cartero/f55cd878/001a/4393/b323/08267823bcbf/f55cd878-001a-4393-b323-08267823bcbf_1.jpg?v=10"
// );
// let book7: Book = new Book(
//   7,
//   "Printre tonuri cenusii",
//   "Ruta Sepetys",
//   "Fictiune",
//   "https://media.elefant.ro/mnresize/1000/-/images/32/219532/printre-tonuri-cenusii_1_fullsize.jpg"
// );
// let book8: Book = new Book(
//   8,
//   "Sotia Bancherului",
//   "Cristina Alger",
//   "Fictiune",
//   "https://nemira.ro/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/c/r/cristina-alger---sotia-bancherului_c1.jpg"
// );
const faker = require("@faker-js/faker");
const generateRandomBook = () => {
    return {
        id: faker.datatype.number(),
        title: faker.lorem.words(2),
        author: faker.name.findName(), // Generates a random author name
        genre: faker.random.arrayElement([
            "Fictiune",
            "Dezvoltare Personala",
            "Biografie",
        ]), // Generates a random genre
        pictureUrl: faker.image.imageUrl(),
    };
};
// Function to generate random FoodItems
const generateRandomBookItems = (count) => {
    const books = [];
    for (let i = 0; i < count; i++) {
        books.push(generateRandomBook());
    }
    return books;
};
// Generate 5 random FoodItem objects
const randomBooks = generateRandomBookItems(5);
// Append randomFoodItems to foodItemsList
booksList.push(...randomBooks);
//console.log(foodItemsList); // Check the updated foodItemsList
exports.default = booksList;
