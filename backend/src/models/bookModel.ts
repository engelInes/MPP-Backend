import mongoose, { Schema, Document } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

export interface IBook extends Document {
  id: number;
  title: string;
  author: string;
  genre: string;
  pictureUrl: string;
}

const bookSchema: Schema = new Schema({
  id: { type: Number },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  pictureUrl: { type: String, required: true }
});

bookSchema.plugin(AutoIncrement, {inc_field: 'id'});

export const BookModel=mongoose.model<IBook>('Book', bookSchema);