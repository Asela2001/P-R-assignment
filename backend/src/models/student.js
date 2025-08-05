import mongoose, { Schema } from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  telephone: {
    type: String,
    required: true,
    unique: true,
  },
  stream: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
  },
  grade: {
    type: Number,
    required: true,
    min: [10, 'Age must be at least 10'],
  },
})

const Student = mongoose.model('student', studentSchema);
export default Student;