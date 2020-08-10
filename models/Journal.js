import mongoose from 'mongoose'

const schema = {
  timestamp: Date,
  rating: Number,
  comprehension: Number,
  motto: String,
  notes: String,
  studentId: String,
}

export default mongoose.model('Journal', schema)
