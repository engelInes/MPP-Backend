import mongoose, { Document, Schema } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

export interface ICritic extends Document {
  criticId: number;
  criticName: string;
  bookId: number;
}

const CriticSchema: Schema = new Schema({
  criticId: { type: Number },
  criticName: { type: String, required: true },
  bookId: { type: Number, required: true },
});

CriticSchema.plugin(AutoIncrement, { inc_field: "criticId" });

export const CriticModel = mongoose.model<ICritic>("Critic", CriticSchema);
