import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  text: String,
  completed: {
    type: Boolean,
    completed: false,
  },
});
