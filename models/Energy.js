import mongoose from 'mongoose'

const schema = {
  timestamp: Date,
  value: Number,
  studentId: String,
}

export default mongoose.model('Energy', schema)
