import mongoose from 'mongoose';
mongoose.set("strictQuery", true)

export async function connectToMondoDB(url: string) {
  return mongoose.connect(url)
}