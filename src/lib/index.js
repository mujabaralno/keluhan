import mongoose from 'mongoose';

const MONGODB_URI = import.meta.env.MONGODB_URI;

let cached = (global).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'keluhan',
    bufferCommands: false,
  })
  mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

  cached.conn = await cached.promise;

  return cached.conn;
}