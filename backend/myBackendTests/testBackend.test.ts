//import "@testing-library/jest-dom";

import { describe, it } from "node:test";

// describe("test api", () => {
//   test("return a list of books", async () => {
//     const response = await request(app).get("/api/books");
//     expect(response.statusCode).toEqual(200);
//   });

//   let newBookId;

//   test("creating a new book", async () => {
//     const newBook = {
//       id: 1,
//       title: "Cand corpul spune nu",
//       author: "Gabor Mate",
//       genre: "Dezvoltare Personala",
//       pictureUrl: "test",
//     };

//     const response = await request(app).post("/api/addBook").send(newBook);
//     expect(response.statusCode).toEqual(201);
//     expect(response.body).toHaveProperty("id");
//     newBookId = response.body.id;
//   });

//   test("get book by ID", async () => {
//     const response = await request(app).get(`/api/books/${newBookId}`);
//     expect(response.statusCode).toEqual(200);
//     expect(response.body.title).toEqual("Cand corpul spune nu");
//   });

//   test("update book", async () => {
//     const updatedBook = {
//       title: "update",
//       author: "update",
//       genre: "update",
//       pictureUrl: "update",
//     };

//     const response = await request(app)
//       .put(`/api/books/${newBookId}`)
//       .send(updatedBook);
//     expect(response.statusCode).toEqual(200);
//     expect(response.body.title).toEqual("update");
//     expect(response.body.author).toEqual("update");
//   });

//   test("delete book", async () => {
//     const response = await request(app).delete(`/api/books/${newBookId}`);
//     expect(response.statusCode).toEqual(204);
//   });
// });
// describe('test reviews api', async () => {



//     test('return a list of reviews', async () => {
//         const response = await request(app).get('/api/reviews');
//         expect(response.statusCode).toEqual(200);
//     });


// import "jest";
// import { describe, expect, test } from "vitest";
// const request = require("supertest");
// const app = require("../app");

// describe('test critics', async()=>{

//     let createdBookId, createdCriticId;


//     test('create book', async () => {
//         const book = {
//             title: 'test',
//             author:'test',
//             genre:'test',
//             pictureUrl:'test'
//         };
//         const critic = {
//             criticName: 'test',
//             bookId: 1
//         }

//         const response = await request(app).post('/api/addBook').send(book);
//         const responseReview = await request(app).post('api/addCritic').send(critic);
//         expect(response.statusCode).toEqual(201);
//         expect(responseReview.status).toEqual(201);

//         createdBookId = response.body.id;
//         createdCriticId = responseReview.body.criticId;
//     });

//     test('get critic id', async () => {
//         const response = await request(app).get(`/api/critics/${createdCriticId}`);
//         expect(response.statusCode).toEqual(200);
//         expect(response.body.criticName).toEqual('test');
//       });

//     test('delete critic', async () => {
//         const response = await request(app).delete(`/api/critics/${createdCriticId}`);
//         expect(response.statusCode).toEqual(204);
//     });
// }); 


// const request = require("supertest");
// const express = require("express");
// const app = express();
// //import { expect } from "jest";
// const {
//   getCritics,
//   getCriticById,
//   addCritic,
//   deleteCritic,
//   updateCritic,
// } = require("../src/routes/criticRoutes");

// describe("Critic API", () => {
//   describe("GET /api/critics", () => {
//     it("responds with JSON containing a list of critics", async () => {
//       const response = await request(app).get("/api/critics");
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveLength(3); 
//     });
//   });

//   describe("GET /api/critics/:id", () => {
//     it("responds with JSON containing the requested critic", async () => {
//       const criticId = 1; 
//       const response = await request(app).get(`/api/critics/${criticId}`);
//       expect(response.statusCode).toBe(200);
//       expect(response.body.criticId).toBe(criticId);
//     });
//   });

//   describe("POST /api/critics", () => {
//     it("adds a new critic", async () => {
//       const newCritic = {
//         criticName: "John Doe",
//         bookId: 123, 
//       };
//       const response = await request(app).post("/api/critics").send(newCritic);
//       expect(response.statusCode).toBe(201);
//       expect(response.body).toMatchObject(newCritic);
//     });
//   });

//   describe("DELETE /api/critics/:id", () => {
//     it("deletes the specified critic", async () => {
//       const criticId = 1; 
//       const response = await request(app).delete(`/api/critics/${criticId}`);
//       expect(response.statusCode).toBe(204);
//     });
//   });

//   describe("PUT /api/critics/:id", () => {
//     it("updates the specified critic", async () => {
//       const criticId = 1;
//       const updatedCritic = {
//         criticName: "Updated Critic Name",
//         bookId: 456, 
//       };
//       const response = await request(app)
//         .put(`/api/critics/${criticId}`)
//         .send(updatedCritic);
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toMatchObject(updatedCritic);
//     });
//   });
// });

